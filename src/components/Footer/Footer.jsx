import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

const useStyles = makeStyles({
  root: {
    width: '100vw',
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
      <BottomNavigationAction icon={<FacebookIcon />} style={{color: 'white'}}/>
      <BottomNavigationAction icon={<TwitterIcon />} style={{color: 'white'}}/>
      <BottomNavigationAction icon={<InstagramIcon />} style={{color: 'white'}}/>
      <BottomNavigationAction icon={<YouTubeIcon />} style={{color: 'white'}}/>
    </BottomNavigation>
  );
}
