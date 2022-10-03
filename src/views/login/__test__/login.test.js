import { render, screen } from '@testing-library/react';
import Login from '../login';

test('Login header', () => {
    render(<Login />);
    const loginHeader = screen.getByRole('heading', {name: 'Log in'});
    // expect(loginHeader).toBeInTheDocument();
});

test('Email textbox', () => {
    render(<Login />);
    const emailTextBox = screen.getByRole('textbox', {name: 'Email'});
    // expect(emailTextBox).toBeInTheDocument();
});

test('Proceed button', () => {
    render(<Login />);
    const proceedButton = screen.getByRole('button', {name: 'PROCEED'});
    // expect(proceedButton).toBeInTheDocument();
});
