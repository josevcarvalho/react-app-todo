import React, { Component } from "react"

import TodoForm from "./todoForm"
import TodoList from "./todoList"

export default () => (
    <main role="main">
        <TodoForm />
        <TodoList />
    </main>
)
