import React from "react"
import ReactDOM from "react-dom"
import App from "./main/app"

const appElement = React.createElement(App, null)
const rootElement = document.getElementById("app")

ReactDOM.render(appElement, rootElement)
