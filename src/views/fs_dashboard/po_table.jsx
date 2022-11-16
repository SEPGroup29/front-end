import { Email, LocalGasStation, Person, PhoneAndroid } from "@mui/icons-material";
import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";

const PoTable = ({pumpOperators}) => {
    return (
        <TableContainer component={Paper} sx={{ boxShadow: 0 }}>
            <Table aria-label="simple table">
                <TableBody>
                    {pumpOperators.map((pumpOperator, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 }, backgroundColor: '#ddf8ee' }}
                            align="center"
                        >
                            <TableCell sx={{ fontSize: '16px' }}><LocalGasStation fontSize="medium" color="secondary" /><Person fontSize="medium" color="secondary" />&ensp;{pumpOperator.user.firstName} {pumpOperator.user.lastName}</TableCell>
                            <TableCell sx={{ fontSize: '16px' }}><Email fontSize="medium" color="error" />&ensp;{pumpOperator.user.email}</TableCell>
                            <TableCell sx={{ fontSize: '16px' }}><PhoneAndroid fontSize="medium" color="success" />&ensp;{pumpOperator.contactNumber}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default PoTable;