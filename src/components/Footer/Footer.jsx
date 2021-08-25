import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Footer.css'


const useStyles = makeStyles({
  root: {
    width: '100%',
    // height: '40px',
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root} style={{backgroundColor: '#39393a'}}>
      <Link to = '/' style={{textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center', marginRight: '20px'}}>
        <h2>Главная</h2>
      </Link>
      <Link to = '/favorites' style={{color: 'white', display: 'flex', alignItems: 'center', textDecoration: 'none'}}>
        <h2 >Избранное</h2>
      </Link>
      <Grid container display="flex" justifyContent="flex-end" alignItems="center" style={{maxWidth:'320px'}}>
        <div style={{width: '100%', height: '100%',display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>

        <FacebookIcon className='icons' style={{color: 'white'}}/>
        <TwitterIcon className='icons' style={{color: 'white'}}/>
        <InstagramIcon className='icons' style={{color: 'white'}}/>
        <YouTubeIcon className='icons' style={{color: 'white'}}/>
        </div>

      </Grid>
    </BottomNavigation>
  );
}
