import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Home } from './home';

describe('Home Component', () => {
  test('renders without crashing', () => {
    const { container } = render(<Home />);
    expect(container).toBeInTheDocument();
  });

  test('contains an h1 element with text "Trabalho de CI/CD"', () => {
    const { getByText } = render(<Home />);
    const headingElement = getByText('Trabalho de CI/CD');
    expect(headingElement.tagName).toBe('H1');
  });
});