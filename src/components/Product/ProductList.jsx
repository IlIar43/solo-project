import React, { useContext, useEffect, useState } from 'react';
import {productContext} from '../../contexts/ProductsContext' 
import { Grid } from '@material-ui/core';
import ProductCard from './ProductCard';
import { useHistory } from 'react-router-dom';
import { Pagination } from '@material-ui/lab';



const ProductList = () => {
    let history = useHistory()
    const {products, getProducts, paginatedPages} = useContext(productContext);
    const [page, setPage] = useState(getPage())

    useEffect(() => {
        getProducts(history)
    }, [])

    function getPage(e, page){
        const search = new URLSearchParams(history.location.search)
        if(!search.get('_page')){
            return 1
        }
        return search.get('_page')
    }

    const handlePage = (e, pageVal) => {
        const search = new URLSearchParams(history.location.search)
        search.set('_page', pageVal)
        history.push(`${history.location.pathname}?${search.toString()}`)
        getProducts(history)
        setPage(pageVal)
    }

    return (
        <>
            <Grid container>
                {
                    products ? (
                        products.map((item, index) => (
                            <ProductCard item={item} key={index} history={history} />
                        ))
                    ) : (<h1>Loading...</h1>)
                }
            </Grid>
                <Grid container display='flex' justifyContent='center' style={{marginTop: '10px', marginBottom: '70px'}}>

                <Pagination
                    count={paginatedPages}
                    color="primary"
                    onChange={handlePage}
                    page={+page}
                />
                </Grid>
        </>
    );
};

export default ProductList;