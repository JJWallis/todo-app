import React from 'react'
import TodoList from '../components/TodoList'
import { render, screen } from './test-utils'
import '@testing-library/jest-dom/extend-expect'

test('initial', async () => {
   render(<TodoList />)
   expect(screen.getByRole(''))
})
