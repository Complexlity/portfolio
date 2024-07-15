import {
    render, screen, fireEvent as userEvent
} from '@testing-library/react';
import { ThemeProvider, useTheme} from 'next-themes';
import ThemeSwitch from '../../components/ThemeSwitch';

  

const createTestProviders = ({  
    theme = "dark",  
  }) =>  
    function ProvideThemes({ children }) {  
      return (  
        <ThemeProvider  
    defaultTheme={theme}  
          enableSystem={false}  
          attribute="class"  
    >  
    {children}  
        </ThemeProvider>  
    )  
    }  

    const renderWithThemeContext = (  
        ui,  
        { theme, ...options } = {},  
     ) =>  
        render(ui, { wrapper: createTestProviders({ theme }), ...options })

        const ThemeSpy = () => {  
            const { theme } = useTheme()  
            return <span data-testid="theme-spy">{theme+"-spy"}</span>  
          }  

        const setup = (theme= "dark") => {  
            renderWithThemeContext(  
              <>  
                  <ThemeSpy /> 
                  <ThemeSwitch /> 
              </>,  
              { theme },  
            )  
            const spy = screen.getByTestId("theme-spy")  
            
            const toggleButton = screen.getByLabelText('Toggle Dark Mode') 
            return { toggleButton , spy }  
          }


describe('ThemeSwitch', () => {
    beforeEach(() => {
        Object.defineProperty(window, 'matchMedia', {
          writable: true,
          value: jest.fn().mockImplementation((query) => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: jest.fn(), // Deprecated
            removeListener: jest.fn(), // Deprecated
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
          })),
        });
      });
  it('renders without crashing', () => {
      render(
              <ThemeSwitch />
    );
    const themeIcon = screen.getByLabelText('Toggle Dark Mode');
    expect(themeIcon).toBeInTheDocument();

  });

  it("should change the theme to the dark", async ()=> {
    const { toggleButton , spy } = setup("light")
    await userEvent.click(toggleButton)  
    expect(spy).toHaveTextContent("dark")
})

it("should change the theme to the light", async ()=> {
    const { toggleButton, spy } = setup("dark")
    await userEvent.click(toggleButton)  
    expect(spy).toHaveTextContent("light")
})

});
