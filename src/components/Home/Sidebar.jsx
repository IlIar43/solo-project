import { FormControl, FormControlLabel, FormLabel, Grid, makeStyles, Paper, Radio, RadioGroup} from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { productContext } from '../../contexts/ProductsContext';
import './Sidebar.css'


const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        // width: '1440px'
        width: '125px',
        position: 'absolute',
        backgroundColor: '#fff4cf',
        boxShadow: 'none'
        // margin: '20px'
        // marginRight: '20px',
        // marginBottom: '20px',
        // minWidth: '170px',  //TODO0 NEW (from 19.05.2021)
        // maxWidth: '100%'  //TODO0 NEW (from 19.05.2021)
    }
}))

const Sidebar = () => {

    const history = useHistory()
    const classes = useStyles()
    const {getProducts} = useContext(productContext)
    const [genre, setGenre] = useState(getGenre())

    function getGenre(){
        const search = new URLSearchParams(history.location.search)
        return search.get('genre')
    }

    const handleChangeGenre = (e) => {
        if(e.target.value === 'all'){
            history.push(`${history.location.pathname.replace('genre')}`)
            getProducts(history)
            setGenre(e.target.value)
            return
        }
        const search = new URLSearchParams(history.location.search)
        search.set('genre', e.target.value)
        history.push(`${history.location.pathname}?${search.toString()}`)
        getProducts(history)
        setGenre(e.target.value)
    }

    return (
        <Grid container >
        <Paper elevation={2} className={classes.paper} id='filter'>  
        <FormControl component="fieldset">
        <FormLabel component="legend" style={{fontWeight: 'bold'}}>Жанры</FormLabel>
        <RadioGroup aria-label="gender" name="gender1" value={genre} onChange={handleChangeGenre} style={{
            display: 'flex',
            flexDirection: 'row',
            }}>
            <FormControlLabel value="all" control={<Radio />} label="All" />
            <FormControlLabel value="Pop" control={<Radio />} label="Pop" />
            <FormControlLabel value="Classic" control={<Radio />} label="Classic" />
            <FormControlLabel value="Rap" control={<Radio />} label="Rap" />
            <FormControlLabel value="Electronic" control={<Radio />} label="Electronic" />
            <FormControlLabel value="Hip-Hop" control={<Radio />} label="Hip-Hop" />
            <FormControlLabel value="K-POP" control={<Radio />} label="K-POP" />
            <FormControlLabel value="Uighur" control={<Radio />} label="Uighur" />
            <FormControlLabel value="Disco" control={<Radio />} label="Disco" />
            <FormControlLabel value="Rock" control={<Radio />} label="Rock" />
            <FormControlLabel value="R&B" control={<Radio />} label="R&B" />
        </RadioGroup>
        </FormControl>
        </Paper>
    </Grid>
    );
};

export default Sidebar;