import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const params = useParams()
  console.log(params)
  return (
    <>
      <div>Product Detail:{params.detailId} </div>
    </>
  )
}

export default ProductDetail
