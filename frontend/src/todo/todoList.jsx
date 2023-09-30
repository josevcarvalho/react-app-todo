import React from "react"
import PageHeader from "../template/pageHeader"
import IconButton from "../template/iconButton"

export default props => {
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
                        onClick={_ =>
                            props.handleMarkAsDoneOrPending(todo, true)
                        }
                        hide={todo.done}
                    />
                    <IconButton
                        style="warning"
                        icon="undo"
                        onClick={_ =>
                            props.handleMarkAsDoneOrPending(todo, false)
                        }
                        hide={!todo.done}
                    />
                    <IconButton
                        style="danger"
                        icon="trash-o"
                        onClick={_ => props.handleRemove(todo._id)}
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
