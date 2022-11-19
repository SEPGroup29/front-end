import React from "react";
import { Button, Card, CardContent, CardHeader, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableContainer from "@mui/material/TableContainer";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import TableBody from "@mui/material/TableBody";
import { FollowTheSigns, InfoOutlined, LocalGasStation, Logout } from "@mui/icons-material";
import { Container, textAlign } from "@mui/system";

// function createData(number , tokenNumber , ongoingNumber){
//     return {number , tokenNumber , ongoingNumber};
// }

// const rows = [
//     createData('XQ-6792' , 205 , 125),
//     createData('XQ-6792' , 205 , 125),
//     createData('XQ-6792' , 205 , 125),
// ]

const QueueDetailComponent = ({ handleClick, handleWithdrawQueues, vehicles, maxTokens }) => {
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
                {vehicles.length > 0 ?
                    <TableContainer component={Paper} sx={{ boxShadow: 0 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell> Vehicle Number</TableCell>
                                <TableCell> Token Number</TableCell>
                                <TableCell> Maximum Tokens for Today</TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {vehicles.map((row, index) => (
                                <TableRow
                                    key={row.regNo}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell>
                                        {row.regNo}
                                    </TableCell>
                                    {row.queuePosition > 0 && <TableCell>{row.queuePosition} <span style={{ color: '#673ab7' }}>(Eligible)</span></TableCell>}
                                    {row.tempQueuePosition > 0 && <TableCell>{row.tempQueuePosition} <span style={{ color: '#673ab7' }}>(Waiting)</span></TableCell>}
                                    <TableCell sx={{textAlign: 'center'}}>{maxTokens[index]}</TableCell>
                                    {/* <TableCell align="right" sx={{ paddingLeft: 1, paddingRight: 1 }}> */}
                                    {/* <Button
                                        variant="contained"
                                        color = "primary"
                                    >
                                        <InfoOutlinedIcon />
                                    </Button> */}
                                    <TableCell align="center"><Button id={row.regNo} variant="contained" onClick={handleClick}><InfoOutlined />&nbsp;</Button></TableCell>
                                    {(row.queuePosition <= 0 || row.tempQueuePosition > 0) &&
                                        <TableCell align="center"><Button id={row.regNo} variant="contained" color="error" onClick={handleWithdrawQueues}><Logout /></Button></TableCell>
                                    }
                                    {/* </TableCell> */}
                                </TableRow>
                            ))}
                        </TableBody>
                    </TableContainer>
                    :
                    <Container>
                        <div className="content">
                            <h3 style={{ textAlign: 'center', marginBottom: '3px', marginTop: '10px', color: '#1F7A8C' }} class="notfound_header">No vehicles in queue right now</h3>
                            <p style={{ textAlign: 'center', color: '#022B3A' }}>
                                Queue details for each vehicle will be displayed here when you join a queue
                            </p>
                        </div>
                        <div className="image">
                            <FollowTheSigns
                                sx={{
                                    fontSize: {
                                        xs: "10rem",
                                        lg: "12rem"
                                    },
                                    color: '#1F7A8C',
                                    lineHeight: 1
                                }} />
                        </div>
                    </Container>
                }
            </CardContent>
        </Card>
    )
}

export default QueueDetailComponent;