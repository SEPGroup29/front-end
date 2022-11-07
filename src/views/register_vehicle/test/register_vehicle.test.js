import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import RegisterVehicle from '../register_vehicle';
import { BrowserRouter } from 'react-router-dom';

const MockRegisterVehicle = () => {
    return(
        <BrowserRouter>
            <RegisterVehicle />
        </BrowserRouter>
    );
}

test('Chasis No', () => {
    render (
        <MockRegisterVehicle />
    )
    const chassisNo = screen.getByRole('textbox', {name: 'Chassis Number'});
    expect(chassisNo).toBeInTheDocument();
})

test('Add vehicle button', () => {
    render (
        <MockRegisterVehicle />
    )
    const addVehicleButton = screen.getByRole('button', {name: 'Add another vehicle'});
    expect(addVehicleButton).toBeInTheDocument();
})

test('All done button', () => {
    render (
        <MockRegisterVehicle />
    )
    const allDoneButton = screen.getByRole('button', {name: 'Done'});
    expect(allDoneButton).toBeInTheDocument();
})