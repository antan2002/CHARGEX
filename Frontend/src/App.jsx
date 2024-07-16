import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import SingleProduct from './components/SingleProduct/SingleProduct';
import Category from './components/Category/Category';
import Success from './components/Success/Success';
import Cancel from './components/Cancel/Cancel'
import Newsletter from './components/Footer/Newsletter/Newsletter';
import StoreContext from './Store/Context';

function App() {
    return <>
        <BrowserRouter>
            <StoreContext>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/category/:id" element={<Category />}></Route>
                    <Route path="/Product/:id" element={<SingleProduct />}></Route>
                    <Route path="/success" element={<Success />}></Route>
                    <Route path="/cancel" element={<Cancel />}></Route>
                </Routes>
                <Newsletter />
                <Footer />
            </StoreContext>
        </BrowserRouter>
    </>;
}

export default App;
