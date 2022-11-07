import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom';
import AdminLogin from '../admin_login'

const MockAdminLogin = () => {
    return (
        <BrowserRouter>
            <AdminLogin />
        </BrowserRouter>
    )
}

test('Render email input', () => {
    render(<MockAdminLogin />)
    const emailInput = screen.getByRole('textbox', { id: 'Email' })
    expect(emailInput).toBeInTheDocument()
})

test('Render password input', () => {
    render(<MockAdminLogin />)
    const passwordInput = screen.getByRole('textbox', {type:'password'})
    expect(passwordInput).toBeInTheDocument()
})

test('Render login button', () => {
    render(<MockAdminLogin />)
    const proceedButton = screen.getByRole('button', { name: /proceed/i });
    expect(proceedButton).toBeInTheDocument();
})