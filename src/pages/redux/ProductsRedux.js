import { useEffect, useState } from 'react'
import { productsAction } from '../../store'
import DataFeed from '../../DataFeed'
import { useDispatch, useSelector } from 'react-redux'
import ProductView from '../../components/UI/ProductView/ProductView'
import style from '../Products.module.css'

const ProductsRedux = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products)
  const [searchTerm, setSearchTerm] = useState('')
  useEffect(() => {
    dispatch(productsAction.fetch(DataFeed))
  }, [dispatch])

  // Search product by term
  const onSearch = (event) => {
    event.preventDefault()
    if (searchTerm === '') {
      dispatch(productsAction.fetch(DataFeed))
    }
    dispatch(productsAction.search(searchTerm))
  }

  const handleMenuFilter = (event) => {
    dispatch(productsAction.filter(event.target.value))
  }

  // Render products
  const renderProducts = () => {
    return products.map((item) => {
      return <ProductView item={item} key={item.id} />
    })
  }
  return (
    <>
      <section>
        <div className={style.container}>
          <form className={style['form-control']}>
            <label>Search for Products</label>
            <input
              type='text'
              onChange={(e) => {
                setSearchTerm(e.target.value)
              }}
              value={searchTerm}
              style={{ width: '55%' }}
            />
            <button type='submit' onClick={onSearch}>
              Search
            </button>
            <label>Filter items</label>
            <select onChange={handleMenuFilter}>
              <option value='default'>Default</option>
              <option value='L-H'>Lowest to Highest Price</option>
              <option value='H-L'>Highest to Lowest Price</option>
            </select>
          </form>
          <h1 style={{ marginLeft: '3rem ' }}>Products Redux Page</h1>
          <div className={style.products}>
            {products ? renderProducts() : null}
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductsRedux
