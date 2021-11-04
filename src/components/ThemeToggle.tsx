import React, { useState, useContext, useEffect } from 'react'
import { AppState, Context } from '../App'
import styled from 'styled-components'
import Input from './Input'
import Icon from './Icon'
import moon from '../assets/icon-moon.svg'
import sun from '../assets/icon-sun.svg'

const Label = styled.label`
   display: block;
   position: relative;
   cursor: pointer;
`

const LOCAL_STORAGE_THEME_KEY = 'theme'

const ThemeToggle: React.FC = () => {
   const [theme, setTheme] = useState(false)
   const context: any = useContext(Context)
   const determineTheme: AppState['determineTheme'] = context.themeChange

   useEffect(() => {
      const storedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY)
      storedTheme && setTheme(JSON.parse(storedTheme))
      determineTheme(theme)
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, JSON.stringify(theme))
      determineTheme(theme)
   }, [theme, determineTheme])

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
