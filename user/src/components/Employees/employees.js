import React from 'react'
import Employee from './Employee/Employee';
import { Grid, CircularProgress} from '@material-ui/core'
import { useSelector } from 'react-redux';

import useStyles from "./styles"

const Employees = () => {

    const employees = useSelector( (state) => state.employees)

    const classes = useStyles();

    // console.log(employees)
    
    return (
            !employees.length ? <CircularProgress /> : (
                <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                    {
                        employees.map( (employee) => (
                            <Grid key={employee._id} item xs={12} sm={12} md={6} lg={3}>
                                <Employee employee={employee} />
                            </Grid>
                        )
                        )
                    }
                </Grid>
            )
    )
}

export default Employees;