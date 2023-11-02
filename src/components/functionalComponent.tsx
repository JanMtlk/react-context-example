import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeProvider'

export default function FunctionalComponent() {
  const value = useContext(ThemeContext)
  return <div>{value.state}</div>
}
