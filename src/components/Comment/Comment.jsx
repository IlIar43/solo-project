import { Grid, Button,makeStyles, TextField } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { API } from '../../helpers/constant';
import { useAuth } from '../../contexts/AuthContext'
import CircularProgress from '@material-ui/core/CircularProgress';
import ComentsCard from './CommentCard'
import { useContext } from 'react';
import { productContext } from '../../contexts/ProductsContext';

const useStyles = makeStyles((theme) => ({
    comentWindow: {
        width: 600,
        height: 300,
        border: 'solid 2px black',
        padding: 10,
        overflow: 'scroll'
    },
    root: {
        display: 'flex',
        '& > * + *': {
          marginLeft: theme.spacing(2),
        },
      },
    input: {
        width: 550
    }
}))
const Coments = () => {
    const classes = useStyles()
    const {currentUser} = useAuth()
    const { getProducts, detail, getDetail, } = useContext(productContext)
    const [value, setValue] = useState('')
    const {id} = useParams()
    const history = useHistory()
    const [product, setProduct] = useState('')
    const [coment, setComent] = useState('')
    const handleInp = (e) => {
        let coment = {
            comment: e.target.value,
            user: currentUser.email
        }
        setComent(coment)
        setValue(e.target.value)
    }
    useEffect(()=> {
        getDetail(id)
    },[])
    const addComent = async(id) => {
        console.log(id)
        detail.comments.push(coment)
        setProduct(detail)
        const data = await axios.patch(`${API}/${id}`,product)
        getProducts(history)
        setValue('')
    }
        
    // const dar = new Date(date,hours)
    // console.log(dar)
    return (
        <>
       
        <Grid container justify="center" alignContent='center'>
            <Grid className={classes.comentWindow}>
            {detail.comments ? (detail.comments.map((item) => (
                <ComentsCard item={item}/>
            ))
            ) : (
                <div className={classes.root}>
                <CircularProgress color="secondary" />
              </div>
            )}
            </Grid>
        </Grid>
        <Grid container display='flex' justifyContent='center'>
            <TextField value={value}className={classes.input} onChange={handleInp}/>
            <Button onClick={() => addComent(id)}>Send</Button>
        </Grid>

          
        </>
    );
};

export default Coments;