import { FETCH_ALL, CREATE, FETCH_SEARCH } from "../constants/actionTypes";

/* eslint-disable import/no-anonymous-default-export */

export default (employees = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case FETCH_SEARCH:
            return action.payload;
        case CREATE:
            return [...employees, action.payload];
        default:
            return employees;
    }
}