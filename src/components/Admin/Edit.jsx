import { Button, IconButton, makeStyles, Paper, TextField } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { productContext } from '../../contexts/ProductsContext';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        margin: '40px auto',
        maxWidth: 1000,
        height: 'auto'
    },
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '40ch',
        }}
}))

const Edit = () => {

    const {id} = useParams()
    let history = useHistory()
    const classes = useStyles()
    const {edit, editProduct, saveEditProduct} = useContext(productContext)
    const [values, setValues] = useState(null)
    console.log(id)

    useEffect(() => {
        editProduct(id)
    }, [id])

    useEffect(() => {
        setValues(edit)
    }, [edit])

    const handleEditInp = (e) => {
        let obj = {
            ...values,
            [e.target.name] : e.target.value
        }
        setValues(obj)
    }

    const handleSave = () => {
        saveEditProduct(values)
        history.push('/')
    }


    return (
        <Paper elevation={3} className={classes.paper}>
        <h1>Введите изменения</h1>
        {
            values ? (
                <div style={{display: 'flex', justifyContent: 'space-between', color: 'black'}}>
                <div>
                    <img style={{width: '500px'}} src={values.image} alt="music image"/>
                </div>

                <div
                    style={{
                        width: '450px',  
                        display: 'flex', 
                        alignItems: 'flex-start', 
                        flexDirection: 'column', 
                        justifyContent: 'center'
                    }}>                           
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField name="title" onChange={handleEditInp} value={values.title} variant="outlined" label="Title"/>
                        <TextField name="artist" onChange={handleEditInp} value={values.artist} variant="outlined" label="Artist"/>
                        <TextField name="genre" onChange={handleEditInp} value={values.genre} variant="outlined" label="Genre"/>
                        <TextField name="image" onChange={handleEditInp} value={values.image} variant="outlined" label="Image"/>
                        <TextField name="player" onChange={handleEditInp} value={values.player} variant="outlined" label="Player"/>

                    </form>
                    <IconButton aria-label="share" onClick={handleSave}>
                        <Button variant="contained" color="primary">Save</Button>
                    </IconButton>
                </div>
            </div>
            ) : (<h1>Loading...</h1> )
        }
    </Paper>
    );
};

export default Edit;