import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import ContactForm from '../../components/Contact'; // Adjust the import path as necessary

describe('ContactForm', () => {
  const mockSubmit = jest.fn();

  beforeEach(() => {
    // Mock the initial state and submit function
    render(
      <ContactForm
      />
    );
  });

  it('renders the contact form with all fields', () => {
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Subject')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument();
  });

  it('allows input values to be changed', () => {
    userEvent.type(screen.getByPlaceholderText('Name'), 'John Doe');
    userEvent.type(screen.getByPlaceholderText('Email'), 'john@example.com');
    userEvent.type(screen.getByPlaceholderText('Subject'), 'Hello');
    userEvent.type(screen.getByPlaceholderText('Message'), 'This is a test message.');

    expect(screen.getByPlaceholderText('Name')).toHaveValue('John Doe');
    expect(screen.getByPlaceholderText('Email')).toHaveValue('john@example.com');
    expect(screen.getByPlaceholderText('Subject')).toHaveValue('Hello');
    expect(screen.getByPlaceholderText('Message')).toHaveValue('This is a test message.');
  });

  it('validates email format and shows error if invalid', async () => {
    const emailInput = screen.getByPlaceholderText('Email');
    userEvent.type(emailInput, 'invalid-email');

    fireEvent.submit(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => {
      expect(emailInput).toBeInvalid();
    });
  });

  it('does not submit the form with invalid values', async () => {
    const nameInput = screen.getByPlaceholderText('Name');
    const emailInput = screen.getByPlaceholderText('Email');
    const subjectInput = screen.getByPlaceholderText('Subject');
    const messageInput = screen.getByPlaceholderText('Message');

    userEvent.type(nameInput, '');
    userEvent.type(emailInput, 'invalid-email');
    userEvent.type(subjectInput, '');
    userEvent.type(messageInput, '');

    fireEvent.submit(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => {
      expect(mockSubmit).not.toHaveBeenCalled();
      expect(nameInput).toBeInvalid();
      expect(emailInput).toBeInvalid();
      expect(subjectInput).toBeInvalid();
      expect(messageInput).toBeInvalid();
    });
  });

  it('submits the form with valid values', async () => {
    const nameInput = screen.getByPlaceholderText('Name');
    const emailInput = screen.getByPlaceholderText('Email');
    const subjectInput = screen.getByPlaceholderText('Subject');
    const messageInput = screen.getByPlaceholderText('Message');

    userEvent.type(nameInput, 'John Doe');
    userEvent.type(emailInput, 'john@example.com');
    userEvent.type(subjectInput, 'Hello');
    userEvent.type(messageInput, 'This is a test message.');

    fireEvent.submit(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledWith({
        name: 'John Doe',
        email: 'john@example.com',
        subject: 'Hello',
        message: 'This is a test message.'
      });
    });
  });
});
