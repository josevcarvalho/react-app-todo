import React, { Component } from "react"
import Axios from "axios"

import TodoForm from "./todoForm"
import TodoList from "./todoList"

const URL = "http://127.0.0.1:3003/api/todos"

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = { description: "", list: [] }
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleMarkAsDoneOrPending =
            this.handleMarkAsDoneOrPending.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.refresh()
    }

    refresh(description = "") {
        const search = description ? `&description__regex=/${description}/` : ""
        Axios.get(`${URL}?sort=createdAt${search}`).then(resp =>
            this.setState({ ...this.state, description, list: resp.data })
        )
    }

    handleSearch() {
        this.refresh(this.state.description)
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

    handleAdd() {
        const description = this.state.description
        Axios.post(URL, { description }).then(() => this.refresh())
    }

    handleMarkAsDoneOrPending(todo, done) {
        Axios.put(`${URL}/${todo._id}`, { ...todo, done: done }).then(() =>
            this.refresh(this.state.description)
        )
    }

    handleRemove(_id) {
        Axios.delete(`${URL}/${_id}`).then(() =>
            this.refresh(this.state.description)
        )
    }

    handleClear() {
        this.refresh()
    }

    render() {
        return (
            <main role="main">
                <TodoForm
                    description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear}
                />
                <TodoList
                    list={this.state.list}
                    handleMarkAsDoneOrPending={this.handleMarkAsDoneOrPending}
                    handleRemove={this.handleRemove}
                />
            </main>
        )
    }
}
