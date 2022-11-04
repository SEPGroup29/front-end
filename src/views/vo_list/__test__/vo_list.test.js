import { render, screen } from '@testing-library/react';
import {BrowserRouter} from "react-router-dom";
import '@testing-library/jest-dom'
import VehicleOwnersList from "../vo_list";

const MockVehicleOwnersList = () => {
    return(
        <BrowserRouter>
            <VehicleOwnersList />
        </BrowserRouter>
    )
}

test('Should render Heading component named "Vehicle Owners"', async () => {
    render(
        <MockVehicleOwnersList />
    );
    const linkElement = screen.getByText(/Vehicle Owners/i);
    expect(linkElement).toBeInTheDocument();
});

test('Should render table component', async () => {
    render(
        <MockVehicleOwnersList />
    );
    const linkElement = screen.getByTestId("table");
    expect(linkElement).toBeInTheDocument();
});