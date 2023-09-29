import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import React, { Fragment } from 'react'
import Menu from '../template/menu'
import Routes from './routes'

export default props => (
    <Fragment>
        <Menu />
        <Routes />
    </Fragment>
)
