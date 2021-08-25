import { Button, IconButton, makeStyles, Paper, TextField } from '@material-ui/core';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { productContext } from '../../contexts/ProductsContext';
import './Add.css'


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


const Add = () => {

    const classes = useStyles()
    let history = useHistory()
    const [values, setValues] = useState({
        title: '',
        artist: '',
        genre: '',
        image: '',
        player: '',
        comments: []
    })

    const  { addProduct } = useContext(productContext)

    const handleInp = (e) => {
        let obj = {
            ...values,
            [e.target.name] : e.target.value
        }
        setValues(obj)
    }

    const handleSave = () => {
        if(!values.image) values.image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmW8VoNKFg4RKdOI0JZTin_EKy62iPk4dtkg&usqp=CAU"
        addProduct(values)
        history.push('/')
    }

    return (
        <Paper elevation={3} className={classes.paper}>
            <h1 style={{textAlign: 'center'}}>Добавить музыку</h1>
                <div style={{display: 'flex', justifyContent: 'space-around', color: 'black'}}>
                    <div>
                        <img id='addImage' style={{width: '400px'}} src={values.image ? values.image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmW8VoNKFg4RKdOI0JZTin_EKy62iPk4dtkg&usqp=CAU"} alt="smartphone image"/>
                    </div>

                    <div 
                        style={{ 
                            width: '450px',
                            display: 'flex', 
                            alignItems: 'center', 
                            flexDirection: 'column', 
                            justifyContent: 'center'
                        }}>
                        <form className={classes.root} noValidate autoComplete='off'>
                            <TextField name='title' onChange={handleInp} value={values.title} variant='outlined' label='Title' />
                            <TextField name='artist' onChange={handleInp} value={values.artist} variant='outlined' label='Artist' />
                            <TextField name='genre' onChange={handleInp} value={values.genre} variant='outlined' label='Genre' />
                            <TextField name='image' onChange={handleInp} value={values.image} variant='outlined' label='Image' />
                            <TextField name='player' onChange={handleInp} value={values.player} variant='outlined' label='Player' />
                        </form>
                        <IconButton aria-label="share" onClick={handleSave}>
                            <Button variant="contained" color="secondary">Добавить</Button>
                        </IconButton>
                    </div>
                </div>
        </Paper>
    );
};

export default Add;