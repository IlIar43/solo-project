import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { productContext } from '../../contexts/ProductsContext';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Grid } from '@material-ui/core';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import './ProductCard.css'




const useStyles = makeStyles((theme) => ({
  root: {
    width: '700px',
    height: '80px',
    marginTop: '5px'
  },
  media: {
    width: '50px',
    height: '50px',
    borderRadius: '5px',
    padding: '5px',
    marginLeft: '10px'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },

}));

export default function ProductCard({item, history}) {
  const classes = useStyles();
  const {deleteProduct, addProductInCart, checkProductInCart, getPlayer} = useContext(productContext)



  let icons = (
    <CardActions disableSpacing>
      <Link to={`/edit/${item.id}`} style={{color: 'black', textDecoration: 'none'}}>
        <IconButton aria-label="add to favorites">
          <EditIcon />
        </IconButton>
      </Link>
      <IconButton aria-label="share" onClick={() => deleteProduct(item.id, history)}>
          <DeleteIcon />
      </IconButton>

      <IconButton 
        aria-label="share"
        onClick={() => addProductInCart(item)}
        color={checkProductInCart(item.id) ? "secondary" : "inherit"}
        >
        <BookmarkBorderIcon />
      </IconButton>
    </CardActions>
  )

  return (
    <div style={{width: '100vw', backgroundColor: '#fff4cf', display: 'flex', justifyContent: 'center', borderLeft: '1px solid black', borderRight: '1px solid black'}}>
      <div>
        <Card className={classes.root}>
          <Grid container display='flex'justifyContent='space-between' alignItems='center'>
          <div style={{display: 'flex', alignItems: 'center'}}>
          <CardMedia
            className='play'
            className={classes.media}
            image={item.image}
            onClick={() => getPlayer(item.id)}
            style={{cursor: 'pointer'}}
          />
            <CardHeader
              title={item.title}
              subheader={item.artist}
              />

          </div>
              {/* <Grid container display='block'> */}

          {icons}
              {/* </Grid> */}
              </Grid>
        </Card>
      </div>
    </div>
  );
}
