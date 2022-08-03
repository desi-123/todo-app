import { render, screen } from '@testing-library/react'
import ToDo from './ToDo'

describe('Todo component', () => {
  test('renders tasks', () => {
    // Arrange which setups the test data, test conditions and environmnet

    render(<ToDo />)
    // Action(run logic that should be tested)

    // Asserttion or compare execution results  with expected results

    const linkElement = screen.getByText(/learn react/i)
    expect(linkElement).toBeInTheDocument()
  })

  test('render good to see you if the button was not clicked', () => {
    // Arrange which setups the test data, test conditions and environmnet

    render(<ToDo />)
    // Action(run logic that should be tested)

    // Asserttion or compare execution results  with expected results

    const buttonElement = screen.getByRole(/learn react/i)
    expect(buttonElement).toBeInTheDocument()
  })

    test('render change! if the button was clicked', () => {
      // Arrange which setups the test data, test conditions and environmnet

      render(<ToDo />)
      // Action(run logic that should be tested)

      // Asserttion or compare execution results  with expected results

      const linkElement = screen.getByText(/learn react/i)
      expect(linkElement).toBeInTheDocument()
    })
})
