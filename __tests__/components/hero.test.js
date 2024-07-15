import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HeroSection from '../../components/Hero'; // Update with the correct path to your component


describe('HeroSection', () => {

    it('renders the hero header correctly', () => {
        const { container } = render(<HeroSection/>)
        // Check if the main text is rendered
        expect(screen.getByText("Hi, I'm")).toBeInTheDocument();
        expect(screen.getByText("Complexlity")).toBeInTheDocument();
        const description = container.getElementsByClassName("description")[0]
        expect(description.textContent.length).toBeGreaterThan(0)
    })
    it('renders the hero image', () => {
        render(<HeroSection/>)
        
        // Check if the image is rendered
        const image = screen.getAllByAltText("Picture of Me");
        expect(image).toHaveLength(2); // Since there are two images (one for mobile and one for desktop)
    })
    
    it('renders my contact links', () => {
        const { getAllByRole, container } = render(<HeroSection/>)
        const links = getAllByRole('link');
        const githubLink = links.find(link => link.href === 'https://github.com/Complexlity');
        expect(githubLink).not.toBeNull();
      
        const warpcastLink = links.find(link => link.href === 'https://warpcast.com/complexlity');
        expect(warpcastLink).not.toBeNull();
      
        const linkedInLink = links.find(link => link.href === 'https://www.linkedin.com/in/nwalozie-elijah-306b33215/');
        expect(linkedInLink).not.toBeNull();
      
        const contactLink = links.find(link => link.href === '/#contact');
        expect(contactLink).not.toBeNull();
      });
      
    }
)

