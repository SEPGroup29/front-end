import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom';
import VehicleList from '../vehicle_list_component';
import QRComponent from '../qr_component';
import FuelSationsList from '../fuel_stations_list_componennt'
import QueueDetails from '../queue_details_component'

const MockVehicleList = ({handleClick, handleRemoveVehicle, vehicles}) => {
    return(
        <BrowserRouter>
            <VehicleList handleClick={handleClick} handleRemoveVehicle={handleRemoveVehicle} vehicles={vehicles} />
        </BrowserRouter>
    )
}

const MockQRComponent = () => {
    return(
        <BrowserRouter>
            <QRComponent />
        </BrowserRouter>
    )
}

const MockStationList = ({handleClick, stations}) => {
    return(
        <BrowserRouter>
            <FuelSationsList handleClick={handleClick} stations={stations} />
        </BrowserRouter>
    )
}

const MockQueueDetails = ({handleClick, handleWithdrawQueues, queues}) => {
    return(
        <BrowserRouter>
            <QueueDetails handleClick={handleClick} handleWithdrawQueues={handleWithdrawQueues} queues={queues} />
        </BrowserRouter>
    )
}

const mockFunction = jest.fn();
const mockList = []

describe('Vehicle list component testing', () => {
    
    test('Add vehicle button', () => {
        render(<MockVehicleList handleClick={mockFunction} handleRemoveVehicle={mockFunction} vehicles={mockList}/>)
        const infoButton = screen.getByText("Add Vehicle")
        expect(infoButton).toBeInTheDocument()
    })
    
})

describe('QR component testing', () => {

    test('Render QR canvas', () => {
        render(<MockQRComponent />)
        const canvas = screen.getByTestId('qr-canvas')
        expect(canvas).toBeInTheDocument()   
    })

    test('Check remaining patrol quota heading', () => {
        render(<MockQRComponent />)
        const heading = screen.getByText("Remaining Petrol Quota")
        expect(heading).toBeInTheDocument()
    })

    test('Check remaining diesel quota heading', () => {
        render(<MockQRComponent />)
        const heading = screen.getByText("Remaining Diesel Quota")
        expect(heading).toBeInTheDocument()
    })

    test('Render QR download button', () => {
        render(<MockQRComponent />)
        const buttons = screen.getAllByRole('button')
        expect(buttons.length).toBe(1)  // Since there is only one button yet in the component and that is QR download button
    })
})

describe('Fuel station list component testing', () => {

    test('Render search fuel station button', () => {
        render(<MockStationList handleClick={mockFunction} stations={mockList} />)
        const button = screen.getByText("Search Fuel Station")
        expect(button).toBeInTheDocument()
    })
})

describe('Queue details component testing', () => {

    test('Render 3 columns of queue details table', () => {
        render(<MockQueueDetails handleClick={mockFunction} handleWithdrawQueues={mockFunction} queues={mockList} />)
        const columns = screen.getAllByText(/Number/i)
        expect(columns.length).toBe(3)  // Vehicle Number, Token Number & Ongoing Number columns
    })
})