import { NavLink } from 'react-router-dom'
import style from './NavBar.module.css'

// TODO: Add NavLink and css  file to make it active.

const NavBar = () => {
  return (
    <nav className={style.navbar}>
      <div className={style.container}>
        <div className={style.logo}>
          <NavLink className={style['nav-link']} to='/home'>
            <span className={style.text}>Justin</span>
          </NavLink>
        </div>
        <ul className={style['navbar-ul']}>
          <li className={style['nav-item']}>
            <NavLink className={style['nav-link']} to='/products'>
              <span className={style.text}>Products</span>
            </NavLink>
          </li>
          <li className={style['nav-item']}>
            <NavLink className={style['nav-link']} to='/products/redux'>
              <span className={style.text}>Products Redux</span>
            </NavLink>
          </li>
          <li className={style['nav-item']}>
            <NavLink className={style['nav-link']} to='/new-product'>
              <span className={style.text}>New Product</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
