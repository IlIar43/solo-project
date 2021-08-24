import { Grid } from '@material-ui/core';
import React from 'react';
import Content from './Content';
import FooterPlayer from '../FooterPlayer/FooterPlayer';
import Sidebar from './Sidebar';


const Home = () => {
    return (
        <div>
            
            <Grid container spacing-md={3} spacing-sm={3} display='flex' justifyContent='center'>
                <Sidebar />
                <Content /> 
            </Grid>
            <FooterPlayer />

        </div>
    );
};

export default Home;