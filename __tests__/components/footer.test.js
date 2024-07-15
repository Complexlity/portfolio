import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from '../../components/Footer'; // Update the import path if necessary

  

describe('Footer', () => {
  it('renders the footer with current year', () => {
      render(<Footer />);
      const year = new Date().getFullYear();
      expect(screen.getByText('Copyright', {exact: false})).toBeInTheDocument()
      expect(screen.getByText('Complexlity', {exact: false})).toBeInTheDocument()
      expect(screen.getByText(year, {exact: false})).toBeInTheDocument()
      
  });

  it('renders my social links', () => {
    const { getAllByRole } = render(<Footer/>)
    const links = getAllByRole('link');
    const githubLink = links.find(link => link.href === 'https://github.com/Complexlity');
    expect(githubLink).not.toBeNull();
  
    const warpcastLink = links.find(link => link.href === 'https://www.twitter.com/Complexlity');
    expect(warpcastLink).not.toBeNull();
  
    const linkedInLink = links.find(link => link.href === 'https://warpcast.com/complexlity');
    expect(linkedInLink).not.toBeNull();
  
    const contactLink = links.find(link => link.href === '/#contact');
    expect(contactLink).not.toBeNull();
  });
  
    
  
});
