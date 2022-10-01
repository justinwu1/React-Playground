import ProductView from '../components/UI/ProductView/ProductView'
import style from './Products.module.css'
import SearchBar from '../components/UI/SearchBar/SearchBar'
import FilterOptions from '../components/UI/FilterOptions/FilterOptions'
import { useEffect, useState } from 'react'
import DataFeed from '../DataFeed'

const Products = () => {
  const [productData, setProductData] = useState([])

  useEffect(() => {
    setProductData(DataFeed)
  }, [])

  const renderProducts = () => {
    return productData.map((item) => {
      return <ProductView item={item} key={item.id} />
    })
  }

  const onSearch = (searchInput) => {
    if (searchInput === '') {
      setProductData(DataFeed)
      return
    }
    const searchData = productData.filter((item) => item.name === searchInput)
    setProductData(searchData)
  }

  const onMenuOptions = (menuOption) => {
    let filterData = []
    console.log(menuOption)
    if (menuOption === 'L-H') {
      filterData = productData.sort((a, b) => {
        return a.price - b.price
      })
    } else if (menuOption === 'default') {
      setProductData(DataFeed)
      return
    } else {
      filterData = productData.sort((a, b) => {
        return b.price - a.price
      })
    }
    setProductData([...filterData])
  }
  return (
    <>
      <section>
        <div className={style.container}>
          <form className={style['form-control']}>
            <SearchBar productData={productData} onSearch={onSearch} />
            <FilterOptions onMenuOptions={onMenuOptions} />
          </form>
          <h1 style={{ marginLeft: '3rem ' }}>Products Page</h1>
          <div className={style.products}>{renderProducts()}</div>
        </div>
      </section>
    </>
  )
}

export default Products
