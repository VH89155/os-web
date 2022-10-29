
import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from "./routes/index"
import DashboardPage from './components/Layout/DashboardPage/DashboardPage';
import './App.css';
import {useState, useContext} from "react"
import {Context} from "./components/Context/Context"
function App() {
   const [productEdit,setProductEdit] = useState({});
  return (
    <Router>
    <div className="App">
        <Routes>
        
            {publicRoutes.map((route, index) => {
                let Layout= DashboardPage ;
                if(route.layout){
                    Layout = route.layout
                }
                else if (route.layout === null){
                    Layout = Fragment
                }
                const Page = route.component;

                return <Route key={index} path={route.path} element={
                <Layout>
                    <Context.Provider value={productEdit} >
                    <Page setProductEdit={setProductEdit} />
                    </Context.Provider>
                </Layout>} />;
            })}
           
        </Routes>
        
    </div>
</Router>
  );
}

export default App;
