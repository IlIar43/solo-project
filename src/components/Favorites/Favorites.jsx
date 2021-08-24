import { makeStyles } from '@material-ui/core';
import React, { useContext, useEffect } from 'react';
import { productContext } from '../../contexts/ProductsContext';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ReactAudioPlayer from 'react-audio-player'
// import { Button, Typography } from '@material-ui/core';
// import { calcTotalPrice } from '../../helpers/calcPrice';

const useStyles = makeStyles({
    table: {
      width: '100%',
    },
    paper: {
      width: '50%',
      margin: '40px auto'
    }
  });

const Cart = () => {
    const classes = useStyles()
    const {cart, getCart, changeProductCount} = useContext(productContext)

    useEffect(() => {
        getCart()
    }, [])
    return (
        <TableContainer component={Paper} className={classes.paper}>
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Название</TableCell>
            <TableCell>Исполнители</TableCell>
            <TableCell>Плеер</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {cart.products ? (
                <>
                    {cart.products.map((elem) => (
                    <TableRow key={elem.item.id}>
                        <TableCell><img style={{width: "50px"}} src={elem.item.image} alt={elem.item.title}/></TableCell>
                        <TableCell>{elem.item.title}</TableCell>
                        <TableCell>{elem.item.artist}</TableCell>
                        <TableCell>            
                          <ReactAudioPlayer
                            className='player'
                            src={elem.item.player}
                            controls
                          />
                      </TableCell>
                    </TableRow>
                    ))}
                </>
            ) : (<h1>Loading...</h1> )}
        </TableBody>
      </Table>
    </TableContainer>
    );
};

export default Cart;