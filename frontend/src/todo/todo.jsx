import React, { Component } from "react"
import TodoForm from "./todoForm"
import TodoList from "./todoList"

export default class Todo extends Component {
    render() {
        return (
            <main role="main" >
                <TodoForm />
                <TodoList />
            </main>
        )
    }
}
