import React, { useState, useEffect } from 'react'
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
   const [theme, setTheme] = useState(false)

   useEffect(() => {
      const storedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY)
      storedTheme && setTheme(JSON.parse(storedTheme))
      handleThemeChange(theme)
   }, [])

   useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, JSON.stringify(theme))
      handleThemeChange(theme)
   }, [theme])

   return (
      <Label htmlFor="theme-switch" aria-label="Theme switcher toggle.">
         <Input
            checkboxTheme
            checked={theme}
            id="theme-switch"
            type="checkbox"
            onChange={(e) => setTheme(e.target.checked)}
         />
         <Icon src={theme ? sun : moon} />
      </Label>
   )
}

export default ThemeToggle
