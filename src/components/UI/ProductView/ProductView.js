import { Link } from 'react-router-dom'
import style from './ProductView.module.css'



const ProductView = (props) => {
  return (
    <>
      <div className={style.card}>
        <img
          className={style['product-image']}
          src={props.item.image}
          alt={props.item.name}
        />
        <span>{props.item.name}</span>
        <span>${props.item.price}</span>
        <Link to={`/info/${props.item.id}`}>
          <span>Details</span>
        </Link>
      </div>
    </>
  )
}
export default ProductView
