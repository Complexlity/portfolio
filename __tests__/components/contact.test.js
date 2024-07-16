import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import ContactForm from '../../components/Contact'; // Adjust the import path as necessary

describe('ContactForm', () => {
  const mockSubmit = jest.fn();
  let user = null;
  beforeEach(() => {
    // Mock the initial state and submit function'
    user = userEvent.setup()
    render(
      <ContactForm
      />
    );
  });

  it('renders the contact form with all Inputs and header', () => {
    expect(screen.getByRole("heading")).toBeInTheDocument()
    expect(screen.getByRole('textbox', {name: "name"})).toBeInTheDocument();
    expect(screen.getByRole('textbox', {name: "subject"})).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: "message" })).toBeInTheDocument();

    expect(screen.getByRole('textbox', { name: "email" })).toBeInTheDocument();
    //TODO: Fix this
    
    const submitButton = screen.getByRole('button')
    expect(submitButton).toBeInTheDocument()
    expect(submitButton.textContent.trim()).toEqual('Send Message')
  });

  it('allows input values to be changed', async () => {
    const nameInput = screen.getByRole('textbox', { name: "name" })
    const subjectInput = screen.getByRole('textbox', { name: "subject" })
    const messageInput = screen.getByRole('textbox', { name: "message" })
    const emailInput = screen.getByRole('textbox', { name: "email" })
    fireEvent.change(nameInput, { target: { value: 'Complexlity' } })
    fireEvent.change(subjectInput, { target: { value: 'This is a subject' } })
    fireEvent.change(messageInput, { target: { value: 'This is an example message' } })
    fireEvent.change(emailInput, { target: { value: 'This is an email' } })
    
    expect(nameInput.value).toEqual('Complexlity')
    expect(subjectInput.value.length).toBeGreaterThan(0)
    expect(messageInput.value.length).toBeGreaterThan(0)
    expect(emailInput.value.length).toBeGreaterThan(0)
    
    
  });

  // it('validates email format and shows error if invalid', async () => {
  //   const emailInput = screen.getByRole('textbox', { name: "email" })
  //   const submitButton = screen.getByRole('button')
  //   user.type(emailInput, 'invalid-email');

  //   fireEvent.submit(submitButton);


  //   await waitFor(() => {
  //     expect(emailInput).toBeInvalid();
  //   });
  // });

  it('does not submit the form with invalid values', async () => {
    
    const nameInput = screen.getByRole('textbox', { name: "name" })
    const subjectInput = screen.getByRole('textbox', { name: "subject" })
    const messageInput = screen.getByRole('textbox', { name: "message" })
    const emailInput = screen.getByRole('textbox', { name: "email" })
    const submitButton = screen.getByRole('button')
    fireEvent.change(nameInput, { target: { value: '' } })
    fireEvent.change(subjectInput, { target: { value: '' } })
    fireEvent.change(messageInput, { target: { value: '' } })
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } })
    
    fireEvent.submit(submitButton);

    await waitFor(() => {
      expect(nameInput).toBeInvalid();
      expect(emailInput).toBeInvalid();
      expect(subjectInput).toBeInvalid();
      expect(messageInput).toBeInvalid();
      expect(mockSubmit).not.toHaveBeenCalled();
    });
  });

  it('submits the form with valid values', async () => {
    
    const nameInput = screen.getByRole('textbox', { name: "name" })
    const subjectInput = screen.getByRole('textbox', { name: "subject" })
    const messageInput = screen.getByRole('textbox', { name: "message" })
    const emailInput = screen.getByRole('textbox', { name: "email" })

    const submitButton = screen.getByRole('button')
    fireEvent.change(nameInput, { target: { value: 'Complexlity' } })
    fireEvent.change(subjectInput, { target: { value: 'Form Test' } })
    fireEvent.change(messageInput, { target: { value: 'This is the tested mock submission' } })
    fireEvent.change(emailInput, { target: { value: 'me@complexlity.dev' } })


    
    expect(nameInput).toBeValid();
    expect(emailInput).toBeValid();
    expect(subjectInput).toBeValid();
    expect(messageInput).toBeValid();
    
          
//  fireEvent.submit(submitButton)
//     /* assert on the output */
 
// const span = screen.getByText('Sending');
// expect(span).toBeInTheDocument();
// const loader = screen.getByTestId('loader');
//     expect(loader).toBeInTheDocument();    
  });
});
