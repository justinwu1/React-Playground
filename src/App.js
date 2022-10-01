import { Route, Switch, Redirect } from 'react-router-dom'
import Products from './pages/Products'
import NewProduct from './pages/NewProduct'
import NavBar from './components/UI/NavBar/NavBar'
import ProductDetail from './pages/ProductDetail'
import Home from './pages/Home'
import ProductsRedux from './pages/redux/ProductsRedux'

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/home' />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/new-product'>
            <NewProduct />
          </Route>
          <Route path='/products' exact>
            <Products />
          </Route>
          <Route path='/product/:detailId'>
            <ProductDetail />
          </Route>
          <Route path='/products/redux'>
            <ProductsRedux />
          </Route>
        </Switch>
      </main>
    </>
  )
}

export default App
