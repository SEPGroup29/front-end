import { render, screen } from '@testing-library/react';
import LoginEnterOTP from '../login-enterOTP';

test('LoginEnterOTP header', () => {
    render(<LoginEnterOTP />);
    const loginHeader = screen.getByRole('heading', {name: 'Log in'});
    // expect(loginHeader).toBeInTheDocument();
});

test('Proceed button', () => {
    render(<LoginEnterOTP />);
    const proceedButton = screen.getAllByRole('button', {name: 'PROCEED'});
    // expect(proceedButton).toBeInTheDocument();
});