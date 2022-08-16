import React from "react";
import {Pagination, PaginationItem} from '@material-ui/lab'
import useStyles from './styles'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Paginate = () => {
    const classes = useStyles();

    const {numberOfPages} = useSelector( (state) => state.employees)

    return(
        <Pagination 
        classes= { { ul: classes.ul}}
        count={numberOfPages}
        page={1}
        variant="outlined"
        color="primary"
        renderItem={ (item) => (
            <PaginationItem {...item} component={Link} to={`/employees?page=${1}`} />
        )}
        />
    )
}

export default Paginate