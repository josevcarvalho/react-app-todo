import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import PageHeader from "../template/pageHeader"
import IconButton from "../template/iconButton"
import { markAsDone, markAsPending, remove } from "../store/actions/todoActions"

function todoList(props) {
    function renderRows() {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? "markedAsDone" : ""}>
                    {todo.description}
                </td>
                <th>
                    <IconButton
                        style="success"
                        icon="check"
                        onClick={() => props.markAsDone(todo)}
                        hide={todo.done}
                    />
                    <IconButton
                        style="warning"
                        icon="undo"
                        onClick={_ => props.markAsPending(todo)}
                        hide={!todo.done}
                    />
                    <IconButton
                        style="danger"
                        icon="trash-o"
                        onClick={_ => props.remove(todo)}
                        hide={!todo.done}
                    />
                </th>
            </tr>
        ))
    }

    return (
        <div className="container">
            <PageHeader name="Lista" />
            <table className="table">
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th className="tableActions">Ações</th>
                    </tr>
                </thead>
                <tbody>{renderRows()}</tbody>
            </table>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        list: state.todo.list,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ markAsDone, markAsPending, remove }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(todoList)
