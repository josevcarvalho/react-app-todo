import Axios from "axios"

import { DESCRIPTION_CHANGED, TODO_SEARCHED, TODO_CLEAR } from "./actionsType"

const URL = "http://127.0.0.1:3003/api/todos"

export function changeDescription(event) {
    return {
        type: DESCRIPTION_CHANGED,
        payload: event.target.value,
    }
}

export function search() {
    return (dispatch, getState) => {
        const description = getState().todo.description
        const search = description ? `&description__regex=/${description}/` : ""
        Axios.get(`${URL}?sort=createdAt${search}`).then(resp =>
            dispatch({ type: TODO_SEARCHED, payload: resp.data })
        )
    }
}

export function add(description) {
    return dispatch => {
        Axios.post(URL, { description })
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(search()))
    }
}

export function markAsDone(todo) {
    return dispatch => {
        Axios.put(`${URL}/${todo._id}`, { ...todo, done: true }).then(resp =>
            dispatch(search())
        )
    }
}

export function markAsPending(todo) {
    return dispatch => {
        Axios.put(`${URL}/${todo._id}`, { ...todo, done: false }).then(resp =>
            dispatch(search())
        )
    }
}

export function remove(todo) {
    return dispatch => {
        Axios.delete(`${URL}/${todo._id}`).then(resp => dispatch(search()))
    }
}

export function clear() {
    return [{ type: TODO_CLEAR }, search()]
}
