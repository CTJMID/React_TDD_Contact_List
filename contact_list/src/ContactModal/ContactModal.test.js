import { render, screen } from '@testing-library/react';
import { ContactModal } from './';

test('renders contact modal text', async () => {
  render(<ContactModal />);
  const text = await screen.findByText('I am the contact modal');
  expect(text).toBeInTheDocument();
});