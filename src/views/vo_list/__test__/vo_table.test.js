import { render, screen } from '@testing-library/react';
import {BrowserRouter} from "react-router-dom";
import '@testing-library/jest-dom'
import OwnersTable from "../vo_table";

const MockOwnersTable = () => {
    return(
        <BrowserRouter>
            <OwnersTable />
        </BrowserRouter>
    )
}

test('Should render table component', async () => {
    render(
        <MockOwnersTable />
    );
    const linkElement = screen.getByTestId("table");
    expect(linkElement).toBeInTheDocument();
});