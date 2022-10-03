import { render, screen } from '@testing-library/react';
import Home from '../home';

test('Vehicle owner login button', () => {
    render(<Home />);
    const voLogin = screen.getByRole('button', {name: 'Vehicle Owner Login'});
    // expect(voLogin).toBeInTheDocument();
});

test('Fuel station login button', () => {
    render(<Home />);
    const fsLogin = screen.getByRole('button', {name: 'Fuel Station Login'});
    // expect(voLogin).toBeInTheDocument();
});

test('Vehicle owner registration button', () => {
    render(<Home />);
    const voReg = screen.getByRole('button', {name: 'Register Vehicle Owner'});
    // expect(voLogin).toBeInTheDocument();
});
