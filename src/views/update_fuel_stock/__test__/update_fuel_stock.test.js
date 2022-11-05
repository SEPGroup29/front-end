import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom';
import UpdateFuelStock from '../update_fuel_stock'

const MockUpdateFuelStock = () => {
    return (
        <BrowserRouter>
            <UpdateFuelStock />
        </BrowserRouter>
    )
}

test('Render select fuel type button', () => {
    // render(<MockUpdateFuelStock />)
    // const peterol = screen.findByTestId("select-fuel-type-petrol")
    // const diesel = screen.findByTestId("select-fuel-type-diesel")
    // expect(peterol).toBeInTheDocument()
    // expect(diesel).toBeInTheDocument()
})