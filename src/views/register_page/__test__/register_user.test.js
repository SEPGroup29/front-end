import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import RegisterUser from '../register_user';
import { BrowserRouter } from 'react-router-dom';

const MockRegisterUser = () => {
    return(
        <BrowserRouter>
            <RegisterUser />
        </BrowserRouter>
    );
}

test('Two buttons', () => {
    render (
        <MockRegisterUser />
    )
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(2);
});