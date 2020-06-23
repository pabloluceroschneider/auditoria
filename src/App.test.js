import React from 'react';
import { render } from '@testing-library/react';
import App from './components/App';

test('Renderizar caratula', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/AUDITANDO ÉTICAS/i);
  expect(linkElement).toBeInTheDocument();
});
