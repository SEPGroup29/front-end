import { render, screen } from '@testing-library/react';
import {BrowserRouter} from "react-router-dom";
import '@testing-library/jest-dom'
import InfoCard from "../info_card";
import DriverImage from "../images/Driver.jpg"

const MockInfoCard = ({image, cardTitle, amount}) => {
    return(
        <BrowserRouter>
                <InfoCard image={image} cardTitle={cardTitle} amount={amount} />
        </BrowserRouter>
    )
}

test('If image given image render', () => {
    render(<MockInfoCard image={DriverImage} />);
    const linkElement = screen.getByTestId("info-card");
    expect(linkElement).toHaveStyle(`background-image: url(${DriverImage})`);
})

test('If element render info icon render', () => {
    render(<MockInfoCard image={DriverImage} />);
    const linkElement = screen.getByTestId("InfoRoundedIcon");
    expect(linkElement).toBeInTheDocument();
})

test('If Card Title given it is in the card', () => {
    render(<MockInfoCard cardTitle="Test 1" />);
    const linkElement = screen.getByText(/Test 1/i);
    expect(linkElement).toBeInTheDocument();
})

test('If amount given it is in the card', () => {
    render(<MockInfoCard amount="123456" />);
    const linkElement = screen.getByText(/123456/i);
    expect(linkElement).toBeInTheDocument();
})