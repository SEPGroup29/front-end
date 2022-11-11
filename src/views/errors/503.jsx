import { Button, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import './404.css'

const ServiceUnavailable = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    return (
        <div className="not_found">
            <Container>

                <div className="content">
                    <Typography style={{ textAlign: 'center', mb: 3 }} variant="h3" color="#022B3A" fontWeight='lighter'>
                        503 Error - Service Unavailable
                    </Typography>
                    <p style={{ textAlign: 'center' }}>Sorry, the service you requested is not available at this time.</p>
                </div>
                <div className="image">
                    <img src="https://i.ibb.co/P6TbVnB/503-error-service-unavailable-bro-2837.webp" alt="error" height='300px' width='300px' />
                </div>

                <div className="back_button">
                    <Button onClick={goBack} variant="contained">Go back</Button>
                </div>

            </Container>
        </div >
    );
}

export default ServiceUnavailable
    ;