import { render, screen } from '@testing-library/react'
import Form from './Form'

const mySetTaskFunc = jest.fn()
describe('Todo component', () => {
  test('Initial render the task add input is disabled', () => {
    // Arrange which setups the test data, test conditions and environmnet
    render(<Form />)

    // Asserttion or compare execution results  with expected results
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
  })

  test('Add task into the input element', () => {
    // Arrange which setups the test data, test conditions and environmnet
    render(<Form tasks={[]} setTasks={mySetTaskFunc} />)

    // Asserttion or compare execution results  with expected results
    const inputElement = screen.getByPlaceholderText(/What needs to be done?/i)
    expect(inputElement).toBeInTheDocument()
  })

  // test('be able to write some tasks into the input element', () => {
  //   // Arrange which setups the test data, test conditions and environmnet
  //   render(<Form tasks={[]} setTasks={mySetTaskFunc} />)

  //   // Asserttion or compare execution results  with expected results
  //   const inputElement = screen.getByPlaceholderText(/What needs to be done?/i)
  //   fireEvent.change(inputElement, {target: {value: "Buy milk"}})
  //   expect(inputElement.value).toBe("Buy milk")
  // })
})
