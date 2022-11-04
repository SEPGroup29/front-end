import { render, screen } from '@testing-library/react';
import {BrowserRouter} from "react-router-dom";
import '@testing-library/jest-dom'
import AdminDashboard from "../admin_dashboard";

const MockAdminDashboard = () => {
  return(
      <BrowserRouter>
            <AdminDashboard />
      </BrowserRouter>

  )
}

test('Should render InfoCard component named "Registered Users"', () => {
    render(
        <MockAdminDashboard />
    );
  const linkElement = screen.getByText(/Registered Users/i);
  expect(linkElement).toBeInTheDocument();
});

test('Should render InfoCard component named "Registered Vehicles"', () => {
    render(
        <MockAdminDashboard />
    );
    const linkElement = screen.getByText(/Registered Vehicles/i);
    expect(linkElement).toBeInTheDocument();
});

test('Should render InfoCard component named "Registered Fuel Stations"', () => {
    render(
        <MockAdminDashboard />
    );
    const linkElement = screen.getByText(/Registered Fuel Stations/i);
    expect(linkElement).toBeInTheDocument();
});

test('Should render InfoCard component named "Active Queues"', () => {
    render(
        <MockAdminDashboard />
    );
    const linkElement = screen.getByText(/Active Queues/i);
    expect(linkElement).toBeInTheDocument();
});

test('Should render Button component named "Register Fuel Station"', () => {
    render(
        <MockAdminDashboard />
    );
    const linkElement = screen.getByText(/Register Fuel Station/i);
    expect(linkElement).toBeInTheDocument();
});

test('Should render Button component named "Register Manager"', () => {
    render(
        <MockAdminDashboard />
    );
    const linkElement = screen.getByText(/Register Manager/i);
    expect(linkElement).toBeInTheDocument();
});



test('Should render Button component named "View Fuel Stations"', () => {
    render(
        <MockAdminDashboard />
    );
    const linkElement = screen.getByText(/View Fuel Stations/i);
    expect(linkElement).toBeInTheDocument();
});