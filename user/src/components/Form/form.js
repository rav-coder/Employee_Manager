import React , {useState} from 'react'
import { TextField, MenuItem, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64'
import { useDispatch} from 'react-redux'

import useStyles from "./styles"
import { createEmployee } from '../../actions/employees';

const Form = () => {
    const classes = useStyles();

    const [employeeData, setEmployeeData] = useState({
        name:'', ID: 1, department: '', employmentStatus: '', email: '', accomodations:'', selectedFile: ''
    })

    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createEmployee(employeeData))

        clear()
    }

    const clear = () => {
        setEmployeeData({
            name:'', ID: 1, department: '', employmentStatus: '', email: '', accomodations:'', selectedFile: ''
        } )
    }

    return (

        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate onSubmit={handleSubmit} className={`${classes.root} ${classes.form}`}>
                <Typography variant='h6'>
                    Add an Employee
                </Typography>
                <TextField
                name="ID"
                variant='outlined'
                type="number"
                label="ID"
                fullWidth
                value={employeeData.ID}
                onChange={(e) => setEmployeeData({ ...employeeData, ID: e.target.value})}
                />
                <TextField
                name="name"
                variant='outlined'
                label="Name"
                fullWidth
                value={employeeData.name}
                onChange={(e) => setEmployeeData({ ...employeeData, name: e.target.value})}
                />
                <TextField
                name="email"
                variant='outlined'
                label="Email"
                fullWidth
                value={employeeData.email}
                onChange={(e) => setEmployeeData({ ...employeeData, email: e.target.value})}
                />
                <TextField
                id="select"
                name="department"
                variant='outlined'
                label="Department"
                fullWidth
                select
                value={employeeData.department}
                onChange={(e) => setEmployeeData({ ...employeeData, department: e.target.value})}
                >
                    <MenuItem value="Admin">Admin</MenuItem>
                    <MenuItem value="Finance">Finance</MenuItem>
                    <MenuItem value="HR">HR</MenuItem>
                </TextField>
                <TextField
                id="select"
                name="employmentStatus"
                variant='outlined'
                label="Employment Status"
                fullWidth
                select
                value={employeeData.employmentStatus}
                onChange={(e) => setEmployeeData({ ...employeeData, employmentStatus: e.target.value})}
                >
                    <MenuItem value="Full-Time">Full-Time</MenuItem>
                    <MenuItem value="Part-Time">Part-Time</MenuItem>
                    <MenuItem value="Contract">Contract</MenuItem>
                </TextField>
                <TextField
                name="accomodations"
                variant='outlined'
                label="Accomodations (comma seperate)"
                fullWidth
                value={employeeData.accomodations}
                onChange={(e) => setEmployeeData({ ...employeeData, accomodations: e.target.value.split(',')})}
                />

                <div className={classes.fileInput}>
                    <FileBase 
                        type="file"
                        multiple={false}
                        onDone = { ( {base64} ) => setEmployeeData({ ...employeeData, selectedFile: base64})}
                    />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>
                    Submit
                </Button>
                <Button className={classes.buttonSubmit} variant="contained" color="secondary" size="small" onClick={clear} fullWidth>
                    Clear
                </Button>
            </form>
        </Paper>
    )
}

export default Form;