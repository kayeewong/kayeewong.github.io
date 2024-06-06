import css from './index.module.scss'
import { BiLogoGmail } from "react-icons/bi"
const Header = () => {
  return (
    <div className={`paddings ${css.wrapper}`}>
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>
          Kayee
        </div>
        <ul className={`flexCenter ${css.menu}`}>
          <li><a href="">Experience</a></li>
          <li><a href="">About</a></li>
          <li className={`flexCenter ${css.gmail}`}>
            {/* TODO global vailable */}
            <p>xxx@gmail.com</p>
            <BiLogoGmail />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header