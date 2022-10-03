import React from "react";
import { Button, Card, CardContent, CardHeader, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableContainer from "@mui/material/TableContainer";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import TableBody from "@mui/material/TableBody";
import { InfoOutlined, Logout } from "@mui/icons-material";

// function createData(number , tokenNumber , ongoingNumber){
//     return {number , tokenNumber , ongoingNumber};
// }

// const rows = [
//     createData('XQ-6792' , 205 , 125),
//     createData('XQ-6792' , 205 , 125),
//     createData('XQ-6792' , 205 , 125),
// ]

const QueueDetailComponent = ({ handleClick, handleWithdrawQueues, queues }) => {
    return (
        <Card
            sx={{
                alignSelf: 'center',
                borderRadius: 5,
                height: { xs: 'none', md: '430px' },
                overflow: "auto",
            }}
            variant={"outlined"}
        >
            <CardHeader
                sx={{ backgroundColor: '#E1E5F2' }}
                title={
                    <Typography
                        variant="h5"
                        sx={{
                            textAlign: "center",
                            fontWeight: "medium"
                        }}
                    >
                        Queue Details
                    </Typography>
                }
            />

            <CardContent sx={{ alignContent: 'center' }}>
                <TableContainer component={Paper} sx={{ boxShadow: 0 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell> Vehicle Number</TableCell>
                            <TableCell> Token Number</TableCell>
                            <TableCell> On Going Number </TableCell>
                            {/* <TableCell></TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {queues.map((row) => (
                            <TableRow
                                key={row.vehicle}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>
                                    {row.vehicle}
                                </TableCell>
                                <TableCell>{row.token}</TableCell>
                                <TableCell>{row.ongoing}</TableCell>
                                {/* <TableCell align="right" sx={{ paddingLeft: 1, paddingRight: 1 }}> */}
                                {/* <Button
                                        variant="contained"
                                        color = "primary"
                                    >
                                        <InfoOutlinedIcon />
                                    </Button> */}
                                <TableCell align="center"><Button variant="contained" onClick={handleClick}><InfoOutlined />&nbsp;</Button></TableCell>
                                <TableCell align="center"><Button variant="contained" color="error" onClick={handleWithdrawQueues}><Logout /></Button></TableCell>
                                {/* </TableCell> */}
                            </TableRow>
                        ))}
                    </TableBody>
                </TableContainer>
            </CardContent>
        </Card>
    )
}

export default QueueDetailComponent;