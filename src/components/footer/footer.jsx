import { Email, FacebookRounded, GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import { Grid, Link, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

export default function Footer() {
    return (
        <footer style={{textDecoration: 'none'}}>
            <Box
                px={{ xs: 3, sm: 10 }}
                py={{ xs: 5, sm: 10 }}
                bgcolor="#1F7A8C"
                color="white"
            >
                <Container maxWidth="lg">
                    <Grid textAlign="center" container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box sx={{mb: 3}} ><Typography>Help</Typography></Box>
                            <Box>
                                <Link style={{textDecoration: 'none'}} href="/" color="inherit">
                                    Contact
                                </Link>
                            </Box>
                            <Box>
                                <Link style={{textDecoration: 'none'}} href="/" color="inherit">
                                    Support
                                </Link>
                            </Box>
                            <Box>
                                <Link style={{textDecoration: 'none'}} href="/" color="inherit">
                                    Privacy
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box sx={{mb: 3}} ><Typography>Account</Typography></Box>
                            <Box>
                                <Link style={{textDecoration: 'none'}} href="/login" color="inherit">
                                    Vehicle owner login
                                </Link>
                            </Box>
                            <Box>
                                <Link style={{textDecoration: 'none'}} href="/login" color="inherit">
                                    Fuel Station Login
                                </Link>
                            </Box>
                            <Box>
                                <Link style={{textDecoration: 'none'}} href="/" color="inherit">
                                    Vehicle owner registration
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box sx={{mb: 3}} ><Typography>Messages</Typography></Box>
                            <Box>
                                <Link style={{textDecoration: 'none'}} href="/" color="inherit">
                                    Backup
                                </Link>
                            </Box>
                            <Box>
                                <Link style={{textDecoration: 'none'}} href="/" color="inherit">
                                    History
                                </Link>
                            </Box>
                            <Box>
                                <Link style={{textDecoration: 'none'}} href="/" color="inherit">
                                    Roll
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
                        <Typography variant="body2" color="#fff">
                            {'Copyright © '}
                            <Link underline="none" sx={{ "&:hover": { color: "none" }} }  color="inherit" href="/">
                                FuelQ
                            </Link>{' '}
                            {new Date().getFullYear()}
                            {'.'}
                        </Typography>
                    </Box>
                    <Box textAlign="center" pt={{ xs: 1, sm: 2 }}>
                        <Link href="#"><GitHub fontSize="large" /></Link>
                        <Link href="#"><LinkedIn fontSize="large" /></Link>
                        <Link href="#"><FacebookRounded fontSize="large" /></Link>
                        <Link href="#"><Instagram fontSize="large" /></Link>
                        <Link href="#"><Email fontSize="large" /></Link>
                    </Box>
                </Container>
            </Box>
        </footer>
    );
}