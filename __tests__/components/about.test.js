
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import About from '../../components/About'
 



describe('Home', () => {
    render(<About />)
    it('renders correct heading', () => { 
        const heading = screen.getByRole('heading', { level: 2 })
        expect(heading).toBeInTheDocument()
        expect(heading).toHaveTextContent('About')
    })
    it('renders correct sub heading', () => {
      render(<About />)
      const subHeading = screen.getByRole('heading', { level: 3 })
      expect(subHeading).toBeInTheDocument()
      expect(subHeading).toHaveTextContent('Who I Am')
    })
    
    it('should have a description div with elements inside', () => {
        const { container } = render(<About />);
        const descriptionDiv = container.getElementsByClassName('description');
      
        expect(descriptionDiv.length).toBeGreaterThan(0);
      
        const descriptionParagraphs = descriptionDiv[0].getElementsByTagName('p');
      
        expect(descriptionParagraphs.length).toBeGreaterThan(0);
      });

})
