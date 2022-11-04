import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom';
import FuelStations from '../fuel_stations'
import SearchBar from '../searchbar';
import FuelStationTable from '../fuel_station_table';

const MockFuelStations = () => {
    return (
        <BrowserRouter>
            <FuelStations />
        </BrowserRouter>
    )
}

const MockSearchbar = () => {
    return (
        <BrowserRouter>
            <SearchBar />
        </BrowserRouter>
    )
}

describe('Searchbar component testing', () => {

    test('Render searchbar', () => {
        render(<MockSearchbar />)
        const searchBar = screen.getByRole('textbox', { placeholder: 'Search a fuel station by name' })
        expect(searchBar).toBeInTheDocument()
    })

}) 