import React from "react";

export default _ => (
    <nav className="navbar navbar-inverse bg-inverse fixed-top">
        <a href="#" className="navbar-brand">
            <i className="fa fa-calendar-check-o"></i> TodoApp
        </a>

        <div id="navbar" className="navbar-collapse collapse " >
            <ul className="nav navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#/todos">Tarefas</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#/about">Sobre</a>
                </li>
            </ul>
        </div>
    </nav>
)