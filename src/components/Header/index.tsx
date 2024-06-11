import css from './index.module.scss'
import { BiLogoGmail, BiMenuAltRight } from "react-icons/bi"
import { motion } from 'framer-motion'
import { getMenuStyles, headerVariants } from '../../utils/motion'
import { useState } from 'react'
import useHeaderShadow from '../../hooks/useHeaderShadow'
const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false)
  const headerShadow = useHeaderShadow()
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      className={`paddings ${css.wrapper}`}
      style={{ boxShadow: headerShadow }}
    >
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>
          Kayee
        </div>
        <ul
          style={getMenuStyles(menuOpened)}
          className={`flexCenter ${css.menu}`}>
          <li><a href="">Experience</a></li>
          <li><a href="">About</a></li>
          <li className={`flexCenter ${css.gmail}`}>
            {/* TODO global vailable */}
            <p>jiayihuang0211@gmail.com</p>
            <BiLogoGmail />
          </li>
        </ul>
        <div className={css.menuIcon} onClick={() => setMenuOpened(prev => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  )
}

export default Header