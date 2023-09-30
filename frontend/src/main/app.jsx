import "modules/bootstrap/dist/css/bootstrap.min.css"
import "modules/font-awesome/css/font-awesome.min.css"
import "../template/style/custom.css"

import React from "react"
import Menu from "../template/menu"
import Routes from "./routes"

export default _ => (
    <div>
        <Menu />
        <Routes />
    </div>
)
