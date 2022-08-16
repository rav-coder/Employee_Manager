import React, { useState, useEffect} from "react";

import {Container, AppBar, Typography, Grow, Grid, Paper, TextField, Button} from '@material-ui/core';
import { useDispatch } from "react-redux";
import employeeManager from './images/employee.png'
import{useNavigate, useLocation} from 'react-router-dom'
import ChipInput from 'material-ui-chip-input'
import { Link} from 'react-router-dom';

import { getEmployees, getEmployeesBySearch} from './actions/employees'
import Employees from "./components/Employees/employees";
import Form from "./components/Form/form";
import Pagination from "./components/Pagination";
import useStyles from './Home_Styles';

function useQuery(){
    return URLSearchParams(useLocation().search)
}

const Home = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    // const query = useQuery();
    const navigate = useNavigate();
    // const page = query.get('page') || 1;
    // const searchQuery = query.get('searchQuery');

    const [search, setSearch] = useState('');
    const [accoms, setAccoms] = useState([]);

    const handleKeyPress = (e) => {
        if(e.keyCode === 13){
            searchEmployee();
        }
    }

    const handleAdd = ( accom ) => setAccoms([...accoms, accom])
    const handleDelete = (accomToDelete) => setAccoms(accoms.filter( (accom) => accom !== accomToDelete))

    const searchEmployee = () => {
        if(search.trim() || accoms) {
            dispatch(getEmployeesBySearch( { search, accoms: accoms.join(',') }))
            navigate(`/employees/search?searchQuery=${search || 'none'}&accoms=${accoms.join(',')}`)
        } else {
            navigate('/')
        }
    }



    useEffect( () => {
        dispatch(  getEmployees() );
    }, [dispatch]);
    
    return(
        <Container maxWidth="xl">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Link to="/" className={classes.brandContainer}>
                    <Typography variant="h2" align="center" className={classes.heading}>
                        Employees
                    </Typography>
                <img  className={classes.image} src={employeeManager} alt="logo" height="60" />
                </Link>
            </AppBar>
            <Grow in>
                <Container maxWidth='xl'>
                    <Grid container className={classes.formInPage} justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={6} md={9}>
                            <Employees />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <AppBar className={classes.appBarSearch} position="static" color="inherit">
                                <TextField 
                                    name='search' 
                                    variant="outlined" 
                                    label='Search Name'
                                    onKeyPress = {handleKeyPress} 
                                    fullWidth 
                                    value={search} 
                                    onChange={ (e) => setSearch(e.target.value) }
                                />
                                <ChipInput 
                                    style={{margin: '10px 0'}}
                                    value={accoms}
                                    onAdd={handleAdd}
                                    onDelete={handleDelete}
                                    label="Search Accomodations"
                                    variant='outlined'
                                />
                                <Button onClick={searchEmployee} className={classes.searchButton} color='primary' variant='contained'>
                                    Search
                                </Button>
                            </AppBar>
                            <Form />
                            <Paper elevation={6}>
                                <Pagination />
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default Home;