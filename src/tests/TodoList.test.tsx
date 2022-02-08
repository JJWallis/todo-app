import React from 'react'
import TodoList from '../components/TodoList'
import { render, screen } from './test-utils'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'

test('initial', () => {
   render(<TodoList />)
   const imgs = screen.getAllByRole('img')
   const summary = screen.getByText(/items left/i)

   imgs.forEach((img) => expect(img).toHaveAttribute('src'))
   expect(imgs).toHaveLength(2)
   expect(summary).toHaveTextContent('2 items left')

   userEvent.click(imgs[imgs.length - 1])
   expect(screen.getAllByRole('img')).toHaveLength(1)
   expect(screen.getAllByRole('listitem')).toHaveLength(1)
   expect(summary).toHaveTextContent('1 item left')

   userEvent.click(screen.getByRole('checkbox'))
   userEvent.click(screen.getByRole('button'))
   expect(screen.queryByRole('img')).toBeNull()
   expect(screen.queryByRole('listitem')).toBeNull()
   expect(summary).toHaveTextContent('0 items left')

   //    screen.getByRole('')
})
