import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'

export const Button = ({ children, type }, props) => {
  const [className, setClassName] = useState(`${styles.btn}`)
  useEffect(() => {
    switch (type) {
      case 'primary':
        setClassName(`${styles.btn} ${styles.primary}`)
        break
      case 'dashed':
        setClassName(`${styles.btn} ${styles.dashed}`)
        break
      case 'text':
        setClassName(`${styles.text}`)
        break
      case 'link':
        setClassName(`${styles.link}`)
        break
      default:
        setClassName(`${styles.btn}`)
        break
    }
  }, [])
  return (
    <button {...props} className={className}>
      {children}
    </button>
  )
}
