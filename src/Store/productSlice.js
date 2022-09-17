import { createSlice } from "@reduxjs/toolkit";

const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
})
const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },
    reducers: {
        // Mutate Function which means whatever is run on this funct it has no side effect
        setProduct(state, action){
            state.data = action.payload;
        },
        setStatus(state, action){
            state.status = action.payload;
        }
    },
});

export const { setProduct, setStatus } = productSlice.actions;
export default productSlice.reducer;

// Thunks 


export function fetchproducts(){
    return async function fetchProductThunk(dispatch, getSpace){
        dispatch(setStatus(STATUSES.LOADING))
        try {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            dispatch(setProduct(data))
            dispatch(setStatus(STATUSES.IDLE))
            
        } catch (error) {
            console.log(error);
            dispatch(setStatus(STATUSES.ERROR))

        }
    }
}