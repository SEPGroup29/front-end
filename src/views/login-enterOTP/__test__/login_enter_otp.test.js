import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom';
import LoginEnterOTP from '../login-enterOTP';

const MockLoginEnterOTP = () => {
    return (
        <BrowserRouter>
            <LoginEnterOTP />
        </BrowserRouter>
    )
}

test('LoginEnterOTP header', () => {
    render(
        <MockLoginEnterOTP />
    );
    const loginHeader = screen.getByRole('heading', { name: 'Log in' });
    expect(loginHeader).toBeInTheDocument();
});

test('Proceed button', () => {
    render(
        <MockLoginEnterOTP />
    );
    const proceedButton = screen.getByRole('button', { name: 'PROCEED' });
    expect(proceedButton).toBeInTheDocument();
});