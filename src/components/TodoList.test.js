import { render, screen } from '@testing-library/react'
import TodoList from './TodoList'

describe('TodoList component', () => {
 test('render tasks if request success', () => {
  render(<TodoList />)

  const taskItemElements = screen.getAllByRole('listTask');
  expect(taskItemElements).not.toHaveLength(0)
 })
})