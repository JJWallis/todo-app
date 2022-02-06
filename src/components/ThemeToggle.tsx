import React, { useState, useEffect, useLayoutEffect } from 'react'
import styled from 'styled-components'
import Input from './styled/Input'
import Icon from './styled/Icon'
import moon from '../assets/icon-moon.svg'
import sun from '../assets/icon-sun.svg'
import { HandleThemeChange } from './styled/Theme'

const Label = styled.label`
   display: block;
   position: relative;
   cursor: pointer;
`

interface Props {
   handleThemeChange: HandleThemeChange
}

const LOCAL_STORAGE_THEME_KEY = 'theme'

const ThemeToggle: React.FC<Props> = ({ handleThemeChange }) => {
   const [isDarkTheme, setisDarkTheme] = useState(false)

   useLayoutEffect(() => {
      const storedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY)
      storedTheme && setisDarkTheme(JSON.parse(storedTheme))
      handleThemeChange(isDarkTheme)
   }, [])

   useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, JSON.stringify(isDarkTheme))
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
