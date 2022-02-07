import React, { useState, useEffect, useLayoutEffect } from 'react'
import { HandleThemeChange } from './styled/Theme'
import { Label } from './styled/Label'
import Input from './styled/Input'
import Icon from './styled/Icon'
import moon from '../assets/icon-moon.svg'
import sun from '../assets/icon-sun.svg'

interface Props {
   handleThemeChange: HandleThemeChange
}

const ThemeToggle: React.FC<Props> = ({ handleThemeChange }) => {
   const [isDarkTheme, setisDarkTheme] = useState(false)

   useLayoutEffect(() => {
      const storedTheme = localStorage.getItem('theme')
      storedTheme && setisDarkTheme(JSON.parse(storedTheme))
      handleThemeChange(isDarkTheme)
   }, [])

   useEffect(() => {
      localStorage.setItem('theme', JSON.stringify(isDarkTheme))
      handleThemeChange(isDarkTheme)
   }, [isDarkTheme])

   return (
      <Label htmlFor="theme-switch" aria-label="theme switcher">
         <Input
            checkboxTheme
            id="theme-switch"
            type="checkbox"
            checked={isDarkTheme}
            onChange={(e) => setisDarkTheme(e.target.checked)}
         />
         <Icon src={isDarkTheme ? sun : moon} />
      </Label>
   )
}

export default ThemeToggle
