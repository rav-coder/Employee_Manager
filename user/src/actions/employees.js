import * as api from '../api'
import { FETCH_ALL, CREATE, FETCH_SEARCH } from '../constants/actionTypes';

export const getEmployees = () => async (dispatch) => {
    try {
        const { data } = await api.fetchEmployees();

        dispatch ({ type: FETCH_ALL, payload: data })
    } catch (error) {
        console.log(error)
    }

}

export const createEmployee = (employee) => async (dispatch) => {
    try {
        const { data } = await api.createEmployee(employee);

        dispatch ({ type: CREATE, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const getEmployeesBySearch = (searchQuery) => async (dispatch) => {
    try {
        const {data: { data}} = await api.fetchEmployeesBySearch(searchQuery);

        dispatch ({ type: FETCH_SEARCH, payload: data })

        console.log(data)
    } catch (error) {
        console.log(error)
    }
}