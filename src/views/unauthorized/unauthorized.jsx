import { Button, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import '../errors/404.css'

const Unauthorized = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    return (
        <div className="unauthorized">
            <Container sx={{ mt: 3 }}>

                <div className="content">
                    <Typography style={{ textAlign: 'center', mb: 3 }} variant="h3" color="#022B3A" fontWeight='lighter'>
                        401 Error - Unauthorized
                    </Typography>
                    <p style={{ textAlign: 'center' }}>Sorry, you do not have the permission to view this page.</p>
                </div>
                <div className="image">
                    <img src="https://i.ibb.co/f4cwBmF/error-401-no-autorizado-removebg-preview.png" alt="error-401-no-autorizado-removebg-preview" border="0" />
                </div>

                <div className="back_button">
                    <Button onClick={goBack} variant="contained">Go back</Button>
                </div>

            </Container>
        </div >
    );
}

export default Unauthorized;