import { React } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { Facebook, LinkedIn, YouTube } from '@mui/icons-material';
import { Avatar } from '@mui/material';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary">
            {'Copyright © '}
            <Link color="inherit" href="/">
                FuelQ
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function Footer() {
    return (
        <div className="footer text-center">
            <Box
                component="footer"
                sx={{
                    py: 3,
                    px: 2,
                    mt: 'auto',
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[200]
                            : theme.palette.grey[800],
                }}
            >
                <Container maxWidth="sm">
                    <Copyright />
                    <div className="social_media display-inline">
                        <Link href=""><Facebook style={{ color: '#4267B2' }} /></Link>
                        <Link href=""><LinkedIn style={{ color: '#0072b1' }} /></Link>
                        <Link href=""><YouTube style={{ color: '#ff0000' }} /></Link>
                    </div>
                </Container>
            </Box>
        </div>
    );
}