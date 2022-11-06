import { render, screen } from '@testing-library/react';
import {BrowserRouter} from "react-router-dom";
import '@testing-library/jest-dom'
import SignIn from "../fs_login";

const MockSignIn = () => {
    return(
        <BrowserRouter>
                <SignIn />
        </BrowserRouter>
    )
}

test('Should render a "Log in" text', () => {
    render(<MockSignIn />);
    const linkElement = screen.getByText(/Log in/i);
    expect(linkElement).toBeInTheDocument();
});

test('Should render a "FuelQ Management System" text', () => {
    render(<MockSignIn />);
    const linkElement = screen.getByText(/FuelQ Management System/i);
    expect(linkElement).toBeInTheDocument();
});

test('Should render two input field', () => {
    render(<MockSignIn />);
    const linkElement = screen.getAllByRole('textbox');
    expect(linkElement).toHaveLength(2);
});


test('Should render a "Proceed Button"', () => {
    render(<MockSignIn />);
    const linkElement = screen.getByText(/Proceed/i);
    expect(linkElement).toBeInTheDocument();
});