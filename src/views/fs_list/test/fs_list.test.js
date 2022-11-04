import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom';
import FSList from '../fs_list';

const MockFSList = () => {
    return (
        <BrowserRouter>
            <FSList />
        </BrowserRouter>
    );
}

test('FSList table header', () => {
    render(
        <MockFSList />
    );
    const fsListTableHeader = screen.getByRole('heading', { name: 'Fuel Stations' });
    expect(fsListTableHeader).toBeInTheDocument();
});

// test('FSList table', () => {
//     render(
//         <MockFSList />
//     );
//     const fsListTable = screen.getByRole('table');
//     expect(fsListTable).toBeInTheDocument();
// })