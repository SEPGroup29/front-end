import { Button, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import './404.css'

const NotFound = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    return (
        <div className="not_found">
            <Container>

                <div className="content">
                    <Typography style={{ textAlign: 'center', mb: 3 }} variant="h3" color="#022B3A" fontWeight='lighter'>
                        404 Error - Page Not Found
                    </Typography>
                    <p style={{ textAlign: 'center' }}>Sorry, we couldn't find the page you requested.</p>
                </div>
                <div className="image">
                    <img src="https://i.ibb.co/CPpDF4M/error.png" alt="error" height='300px' width='300px' />
                </div>

                <div className="back_button">
                    <Button onClick={goBack} variant="contained">Go back</Button>
                </div>

            </Container>
        </div >
    );
}

export default NotFound
    ;