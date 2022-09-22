import { Download } from "@mui/icons-material";
import { Box, Button } from "@mui/material";

const FuelQUota = () => {
    return (
        <Box component="span" sx={{ p:2, boxShadow: 5 }}>
            <div className="row">
                <div className="col-md-8 qr">
                    <Box component="span" sx={{ p: 2 }}>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png' alt="" height="300px" width="300px" />
                    </Box>
                </div>
                <div className="col-md-4">
                    <p><b>Remaining Petrol Quota</b></p>
                    <p className="quota" style={{ color: 'rgb(14, 210, 46)' }}><span className="magnify">6.50</span>&nbsp;L</p>
                    <p><b>Eligible Petrol Quota</b></p>
                    <p className="quota"><span className="magnify">10.00</span>&nbsp;L</p>
                    <p><b>Remaining Diesel Quota</b></p>
                    <p className="quota" style={{ color: 'rgb(14, 210, 46)' }}><span className="magnify">16.20</span>&nbsp;L</p>
                    <p><b>Eligible Diesel Quota</b></p>
                    <p className="quota"><span className="magnify">20.00</span>&nbsp;L</p>
                </div>

            </div>
            <div className="row mt-3">
                <Button className="add_vehicle_btn" variant="contained" color="warning"><Download />&ensp;Download QR</Button>
            </div>
        </Box>
    );
}

export default FuelQUota;