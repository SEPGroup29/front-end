import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import {BrowserRouter} from 'react-router-dom';
import RegisterFS from '../register_fuel_station';

const MockRegisterFS = () => {
    return(
        <BrowserRouter>
            <RegisterFS />
        </BrowserRouter>
    );
}

test('Owner name', () => {
    render(
        <MockRegisterFS />
    )
    const ownerName = screen.getByRole('textbox', {name: 'Owner Name'});
    expect(ownerName).toBeInTheDocument();
    
})

test('Display name', () => {
    render(
        <MockRegisterFS />
    )
    const displayName = screen.getByRole('textbox', {name: 'Display Name'});
    expect(displayName).toBeInTheDocument();
})


//redo the test
// test('Select town', () => {
//     render(
//         <MockRegisterFS />
//     )
//     const autoComplete = screen.getByRole('textbox', {name: 'Select Town Nearby'});
//     const input = within(autoComplete).getByRole('textbox');

//     autoComplete.focus();
//     fireEvent.change(input, { target: { value: 'Colombo 1' } });
//     fireEvent.keyDown(autoComplete, { key: 'ArrowDown' });
//     fireEvent.keyDown(autoComplete, { key: 'Enter' });
//     expect(input).toHaveValue('Colombo 1');
// })