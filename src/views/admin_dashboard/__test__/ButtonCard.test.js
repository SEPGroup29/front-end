import { render, screen } from '@testing-library/react';
import {BrowserRouter} from "react-router-dom";
import '@testing-library/jest-dom'
import ButtonCard from "../button_card";

const MockButtonCard = ({text}) => {
  return(
      <BrowserRouter>
            <ButtonCard text={text} />
      </BrowserRouter>
  )
}

test('If text is Register Fuel Station then render Local Gas Station Icon', () => {
    render(
        <MockButtonCard text="Register Fuel Station" />
    );
    const linkElement = screen.getAllByTestId("LocalGasStationIcon");
    expect(linkElement[0]).toBeInTheDocument();
});

test('If text is Register Fuel Station then render Add Icon', () => {
    render(
        <MockButtonCard text="Register Fuel Station" />
    );
    const linkElement = screen.getAllByTestId("AddIcon");
    expect(linkElement[0]).toBeInTheDocument();
});

test('If text is Register Manager then render Add Icon', () => {
    render(
        <MockButtonCard text="Register Manager" />
    );
    const linkElement = screen.getAllByTestId("AddIcon");
    expect(linkElement[0]).toBeInTheDocument();
});

test('If text is Register Manager then render Person Icon', () => {
    render(
        <MockButtonCard text="Register Manager" />
    );
    const linkElement = screen.getAllByTestId("PersonIcon");
    expect(linkElement[0]).toBeInTheDocument();
});

test('If text is View Vehicle Owners then render Person Icon', () => {
    render(
        <MockButtonCard text="View Vehicle Owners" />
    );
    const linkElement = screen.getAllByTestId("PersonIcon");
    expect(linkElement[0]).toBeInTheDocument();
});

test('If text is View Vehicle Owners then render Search Icon', () => {
    render(
        <MockButtonCard text="View Vehicle Owners" />
    );
    const linkElement = screen.getAllByTestId("SearchIcon");
    expect(linkElement[0]).toBeInTheDocument();
});

test('If text is View Fuel Stations then render Search Icon', () => {
    render(
        <MockButtonCard text="View Fuel Stations" />
    );
    const linkElement = screen.getAllByTestId("SearchIcon");
    expect(linkElement[0]).toBeInTheDocument();
});

test('If text is View Fuel Stations then render Fuel Station Icon', () => {
    render(
        <MockButtonCard text="View Fuel Stations" />
    );
    const linkElement = screen.getAllByTestId("LocalGasStationIcon");
    expect(linkElement[0]).toBeInTheDocument();
});