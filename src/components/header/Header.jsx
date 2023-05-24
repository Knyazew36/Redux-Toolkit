import React from 'react'
import { BsFillBookmarkHeartFill } from 'react-icons/bs'
import { useFavorites } from '../../hooks/useFavorites'

import styles from './Header.module.css'

const Header = () => {

  const { favorites } = useFavorites()


  return (
    <header className={styles.header}>
      <BsFillBookmarkHeartFill fontSize={'20px'} />
      <span>{favorites.length}</span>
    </header>
  )
}

export default Header