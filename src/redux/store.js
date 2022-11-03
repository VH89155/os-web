import {combineReducers, configureStore} from "@reduxjs/toolkit";
// import authReducer from "./authSlice";
// import userReducer  from "./userSlice"
import productReducer from "./productSlice"
import orderReducer from "./orderSlice"
import orderIDReducer from "./orderIDSlice"
import userSlice from "./userSlice";
import authSlice from "./authSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
}from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig ={
    key: 'root',
    version: 1,
    storage,
};

const rootReducer = combineReducers({
    // users: userReducer,
    // auth: authReducer,
    products: productReducer,
    orders:orderReducer,
    orderID:orderIDReducer,
    users: userSlice,
    auth: authSlice,
   
});


const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware)=>
        getDefaultMiddleware({
            serializableCheck:{
                ignoredActions:[FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER],
            }
        })
})

export let persistor = persistStore(store);