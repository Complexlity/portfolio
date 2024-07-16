import { render } from '@testing-library/react';
import Card from '../../components/Skills//Card';

describe('Card', () => {
  const item = {
    image: 'test.jpg',
    title: 'Test Title',
  };

  it('renders the card with the correct image and title', () => {
    const { getByAltText, getByText } = render(<Card item={item} />);
    expect(getByAltText(item.title)).toHaveAttribute('src', item.image);
    expect(getByText(item.title)).toBeInTheDocument();
  });
});