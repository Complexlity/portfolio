import { render, screen } from '@testing-library/react';
import Button from '../../../components/Projects/Button'

describe('Button Component', () => {
  it('renders the button with text and children', () => {
    const buttonText = 'Click Me';
    const childElement = <span>Child Element</span>;

    render(<Button text={buttonText}>{childElement}</Button>);

    // Check if the button text is rendered
    expect(screen.getByText(buttonText)).toBeInTheDocument();

    // Check if the child element is rendered inside the button
    expect(screen.getByText(/Child Element/i)).toBeInTheDocument();

    // Check if the icon is present and positioned correctly
    const icon = screen.getByTestId('icon');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('absolute right-[.2rem] top-0 w-[.6rem]');
  });
});
