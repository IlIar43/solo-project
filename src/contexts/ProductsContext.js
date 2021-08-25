import axios from "axios"
import React, { useReducer } from "react"
import {API} from '../helpers/constant'

export const productContext = React.createContext()

const INIT_STATE = {
    products: [],
    paginatedPages: 1,
    edit: null,
    player: [],
    cart: {},
    cartLength: 0,
    detail: {}
}

const reducer = (state = INIT_STATE, action) => {
    switch(action.type){
        case "GET_PRODUCTS":
            return {
                ...state, products: action.payload.data,
                paginatedPages: Math.ceil(action.payload.headers["x-total-count"] / 10)
            }
        case "GET_PLAYER":
            return {...state, player: action.payload}
        case "GET_EDIT_PRODUCT":
            return {...state, edit: action.payload}
            case "CHANGE_CART_COUNT": 
            return {...state, cartLength: action.payload}
        case "GET_CART": 
            return {...state, cart: action.payload}
        case "GET_DETAIL_PRODUCT": 
            return {...state, detail: action.payload}
    default: return state
    }
}

const ProductContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const getProducts = async (history) => {
        console.log(history)
        const search = new URLSearchParams(history.location.search)
        search.set('_limit', 10)
        history.push(`${history.location.pathname}?${search.toString()}`)
        let data = await axios(`${API}/${window.location.search}`)
        dispatch({
            type: 'GET_PRODUCTS',
            payload: data
        })
    }


    const addProduct = async (newProduct) => {
        try{
            let res =await axios.post(`${API}`, newProduct)
            return res
        }catch(err){
            return err
        }
    }

    const deleteProduct = async (id, history) => {
        await axios.delete(`${API}/${id}`)
        getProducts(history)
    }

    const editProduct =async (id) => {
        const {data} = await axios.get(`${API}/${id}`)
        dispatch({
            type: 'GET_EDIT_PRODUCT',
            payload: data
        })
    }

    const saveEditProduct = async (editedProduct) => {
        try{
            let res = await axios.patch(`${API}/${editedProduct.id}`, editedProduct)
            return res
        }catch(error){
            return error
        }
    }

    const getPlayer = async (id) => {
        const {data} = await axios.get(`${API}/${id}`)
        dispatch({
            type: 'GET_PLAYER',
            payload: data
        })
    }

    const addProductInCart = (product) => {
        let cart = JSON.parse(localStorage.getItem('cart'))
        if(!cart){
            cart = {
                products: [],
            }
        }

        let newProduct = {
            item: product,
            count: 1,
        }

        let filteredCart = cart.products.filter(elem => elem.item.id === product.id)
        if(filteredCart.length > 0) {
            cart.products = cart.products.filter(elem => elem.item.id !== product.id)
        }else {
            cart.products.push(newProduct)
        }

        localStorage.setItem('cart', JSON.stringify(cart))
        dispatch({
            type: "CHANGE_CART_COUNT",
            payload: cart.products.length
        })
    }

    const getCartLength = () =>{
        let cart = JSON.parse(localStorage.getItem('cart'))
        if(!cart){
            cart = {
                products: [],
            }
        }
        dispatch({
            type: "CHANGE_CART_COUNT",
            payload: cart.products.length
        })
    }

    const getCart = () => {
        let cart = JSON.parse(localStorage.getItem('cart'))
        if(!cart){
            cart = {
                products: [],
            }
        }
        dispatch({
            type: "GET_CART",
            payload: cart
        })
    }

    const changeProductCount = (count, id) => {
        let cart = JSON.parse(localStorage.getItem('cart'))
        cart.products = cart.products.map(elem =>{
            if(elem.item.id === id){
                elem.count = count
                // elem.subPrice = calcSubPrice(elem)
            }
            return elem
        })
        // cart.totalPrice = calcTotalPrice(cart.products)
        localStorage.setItem('cart', JSON.stringify(cart))
        getCart()
    }

    const checkProductInCart = (id) => {
        let cart = JSON.parse(localStorage.getItem('cart'))
        if(!cart) {
            cart = {
                products: [],
            }
        }
        let newCart = cart.products.filter(elem => elem.item.id === id)
        return newCart.length > 0 ? true : false
    }

    const getDetail = async (id) => {
        const {data} = await axios.get(`${API}/${id}`)
        dispatch({
            type: "GET_DETAIL_PRODUCT",
            payload: data
        })
    }


    

    return (
        <productContext.Provider value = {{
            products: state.products,
            player: state.player,
            edit: state.edit,
            paginatedPages: state.paginatedPages,
            cart: state.cart,
            cartLength: state.cartLength,
            detail: state.detail,
            getProducts,
            addProduct,
            deleteProduct,
            getPlayer,
            editProduct,
            saveEditProduct,
            getCart,
            addProductInCart,
            changeProductCount,
            checkProductInCart,
            getCartLength,
            getDetail,
        }}>
            {children}
        </productContext.Provider>
    )
}

export default ProductContextProvider