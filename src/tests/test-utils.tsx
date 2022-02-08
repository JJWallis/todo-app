import React, { FC, ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { reducer } from '../App'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../components/styled/Theme'
import { TodosProvider } from '../context/TodosContext'

const AllTheProviders: FC = ({ children }) => {
   return (
      <ThemeProvider theme={lightTheme}>
         <TodosProvider reducer={reducer}>{children}</TodosProvider>
      </ThemeProvider>
   )
}

const customRender = (
   ui: ReactElement,
   options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
