import React from 'react'
import useStyles from "./styles"
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core'


const Employee = ({ employee }) => {
    const classes = useStyles();
    return (
        <Card className={classes.card} raised elevation={6}>
            <CardMedia className={classes.media} image={employee.selectedFile} />
                <div className={classes.overlay}>
                    <Typography variant="h6">
                        {employee.ID}
                    </Typography>
                </div>
                <div className={classes.details}>
                    <Typography variant='body2' color='textSecondary'> {employee.accomodations.map(( accomodation) => `~ ${accomodation} ` ) }</Typography>
                </div>
                <CardContent>
                    <Typography className={classes.title} variant="h4" gutterBottom>{employee.name}</Typography>
                    <Typography className={classes.title} variant="h6" gutterBottom>{employee.department}, {employee.employmentStatus}</Typography>
                    <Typography className={classes.title} variant="body2" color="textSecondary">{employee.email}</Typography>
                </CardContent>
        </Card>
    )
}

export default Employee;