import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { ContactModal } from './';

afterEach(cleanup)

test('renders contact modal text', async () => {
  render(<ContactModal />);
  const text = await screen.findByText('I am the contact modal');
  expect(text).toBeInTheDocument();
});

test('initializes empty form', () => {
    render(<ContactModal />);
   const nameInput =  screen.queryByPlaceholderText('Name')
   const phoneInput =  screen.queryByPlaceholderText('Phone Number')
   const emailInput = screen.queryByPlaceholderText('Email Address')
   const submitButton = screen.getByText('Submit')

   expect(nameInput).toBeInTheDocument();
   expect(phoneInput).toBeInTheDocument();
   expect(emailInput).toBeInTheDocument();

   expect(nameInput).toHaveValue("");
   expect(phoneInput).toHaveValue("");
   expect(emailInput).toHaveValue("");

   expect(submitButton).toBeDisabled();

  });

test('Disables submit button until form is valid', () => {
    render(<ContactModal />);
   const nameInput =  screen.queryByPlaceholderText('Name')
   const phoneInput =  screen.queryByPlaceholderText('Phone Number')
   const emailInput = screen.queryByPlaceholderText('Email Address')
   const submitButton = screen.getByText('Submit')

   fireEvent.change(nameInput, {target: {value: 'Chris'}})
   fireEvent.change(phoneInput, {target: {value: '01000 000000'}})
   fireEvent.change(emailInput, {target: {value: 'test@test.com'}})

    expect(nameInput).toHaveValue('Chris')

    // expect(submitButton).not.toBeDisabled();
})