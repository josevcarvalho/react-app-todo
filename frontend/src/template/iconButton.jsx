import React from "react"
import If from "./helper/if"

export default props => (
    <If test={!props.hide}>
        <button
            className={`btn btn-${props.style}`}
            onClick={props.onClick}
            disabled={props.disabled}
            hide={props.hide}
        >
            <i className={`fa fa-${props.icon}`}></i>
        </button>
    </If>
)
