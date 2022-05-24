import { render, screen, cleanup } from '@testing-library/react';
import { ContactModal } from './';

afterEach(cleanup)

test('renders contact modal text', async () => {
  render(<ContactModal />);
  const text = await screen.findByText('I am the contact modal');
  expect(text).toBeInTheDocument();
});

test('initializes empty form', () => {
    render(<ContactModal />);
   const nameInput =  screen.queryAllByPlaceholderText('Name')
   const phoneInput =  screen.queryAllByPlaceholderText('Phone Number')
   const emailInput = screen.queryAllByPlaceholderText('EmailAddress')

   expect(nameInput).toBeInTheDocument();
   expect(phoneInput).toBeInTheDocument();
   expect(emailInput).toBeInTheDocument();

   expect(nameInput).toHaveValue("");
   expect(phoneInput).toHaveValue("");
   expect(emailInput).toHaveValue("");

  });