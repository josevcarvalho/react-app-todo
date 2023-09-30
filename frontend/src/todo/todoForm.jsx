import React from "react"
import PageHeader from "../template/pageHeader"
import Grid from "../template/grid"
import IconButton from "../template/iconButton"

export default props => {
    const keyHandler = e => {
        if (e.key === "Enter") {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === "Escape") {
            props.handleClear()
        }
    }

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
                            value={props.description}
                            onChange={props.handleChange}
                            onKeyUp={keyHandler}
                            autoComplete="off"
                        ></input>
                    </Grid>

                    <Grid cols="12 3 2">
                        <IconButton
                            style="primary"
                            icon="plus"
                            onClick={props.handleAdd}
                            disabled={!props.description}
                        />
                        <IconButton
                            style="info"
                            icon="search"
                            onClick={props.handleSearch}
                        />
                        <IconButton
                            style="default"
                            icon="close"
                            onClick={props.handleClear}
                            disabled={!props.description}
                        />
                    </Grid>
                </div>
            </div>
        </div>
    )
}
