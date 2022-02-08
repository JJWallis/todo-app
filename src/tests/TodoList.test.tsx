import React from 'react'
import TodoList from '../components/TodoList'
import { render, screen } from './test-utils'

test('initial', () => {
   render(<TodoList />)
   screen.getByRole('')
})
