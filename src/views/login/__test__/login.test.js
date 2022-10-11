import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom';
import Login from '../login';

const MockLogin = () => {
    return (
        <BrowserRouter>
            <Login />
        </BrowserRouter>
    );
}

test('Login header', () => {
    render(
        <MockLogin />
    );
    const loginHeader = screen.getByRole('heading', { name: 'Log in' });
    expect(loginHeader).toBeInTheDocument();
});

test('Email textbox', () => {
    render(
        <MockLogin />
    );
    const emailTextBox = screen.getByRole('textbox', { name: 'Email' });
    expect(emailTextBox).toBeInTheDocument();
});

test('Proceed button', () => {
    render(
        <MockLogin />
    );
    const proceedButton = screen.getByRole('button', { name: 'PROCEED' });
    expect(proceedButton).toBeInTheDocument();
});
