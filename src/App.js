import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Header from './pages/Shared/Header/Header';
import Cart from './pages/Home/Cart/Cart';
import ProductDetails from './pages/Home/ProductDetails/ProductDetails';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/products/:productId'>
            <ProductDetails></ProductDetails>
          </Route>
          <Route path='/cart/:cartId'>
            <Cart></Cart>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
