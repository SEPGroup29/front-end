import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, TableHead } from "@mui/material";
import { InfoOutlined, FollowTheSigns, Logout } from '@mui/icons-material';

const QueueDetails = ({ handleClick, handleWithdrawQueues, queues }) => {

    return (
        <Box component="span" sx={{ p: 2, boxShadow: 5, background: '#fff' }} className="qb">
            <h3 className="text-center heading"><FollowTheSigns />&ensp;QUEUE DETAILS</h3>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center"><b>Vehicle Number</b></TableCell>
                            <TableCell align="center"><b>Token Number</b></TableCell>
                            <TableCell align="center"><b>Total Tokens</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {queues.map((row) => (
                            <TableRow
                                key={row.vehicle}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.vehicle}
                                </TableCell>
                                <TableCell align="center" style={{ color: 'rgb(14, 210, 46)' }}><b>{row.token}</b></TableCell>
                                <TableCell align="center">{row.ongoing}</TableCell>
                                <TableCell align="center"><Button variant="contained" onClick={handleClick}><InfoOutlined />&nbsp;Details</Button></TableCell>
                                <TableCell align="center"><Button variant="contained" color="error" onClick={handleWithdrawQueues}><Logout />Withdraw</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>

    );
}

export default QueueDetails;