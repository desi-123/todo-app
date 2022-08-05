import { render, screen } from "@testing-library/react"
import ToDoScreen from "./ToDoScreen"

describe('ToDoScreen component', () => {
  test('renders Todo List as a text', () => {
    // Arrange
    render(<ToDoScreen />)
    // Assert
    const todoListElement = screen.getByText('Todo List')
    expect(todoListElement).toBeInTheDocument()
  })
})
