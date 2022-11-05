import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom';
import FSDashboard from '../fs_dashboard';

const MockFSDashboard = () => {
    return (
        <BrowserRouter>
            <FSDashboard />
        </BrowserRouter>
    );
}

test('FSDashboard header', () => {
    render(
        <MockFSDashboard />
    );
    const fsDashboardHeader = screen.getByRole('heading', { name: 'Maco Filling Station, Kalegana' });
    expect(fsDashboardHeader).toBeInTheDocument();
});