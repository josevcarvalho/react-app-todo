import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import PageHeader from "../template/pageHeader"
import Grid from "../template/grid"
import IconButton from "../template/iconButton"
import {
    changeDescription,
    search,
    add,
    clear,
} from "../store/actions/todoActions"

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    keyHandler(e) {
        const { add, search, description, clear } = this.props
        if (e.key === "Enter") {
            e.shiftKey ? search() : add(description)
        } else if (e.key === "Escape") {
            clear()
        }
    }

    componentWillMount() {
        this.props.search()
    }

    render() {
        const { add, search, description, clear } = this.props
        return (
            <div className="jumbotron">
                <div className="container">
                    <PageHeader name="Tarefas" small="Cadastro" />
                    <div role="form" className="todoForm">
                        <Grid cols="12 9 10">
                            <input
                                id="description"
                                className="form-control"
                                placeholder="Adicione uma tarefa"
                                value={description}
                                onChange={this.props.changeDescription}
                                onKeyUp={this.keyHandler}
                                autoComplete="off"
                            />
                        </Grid>

                        <Grid cols="12 3 2">
                            <IconButton
                                style="primary"
                                icon="plus"
                                onClick={() => add()}
                                disabled={!description}
                            />
                            <IconButton
                                style="info"
                                icon="search"
                                onClick={search}
                            />
                            <IconButton
                                style="default"
                                icon="close"
                                onClick={() => clear()}
                                disabled={!description}
                            />
                        </Grid>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        description: state.todo.description,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        { changeDescription, search, add, clear },
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
