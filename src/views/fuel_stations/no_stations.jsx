import { LocalGasStation, SearchOutlined } from "@mui/icons-material";
import { Container } from "@mui/system";

const NoStations = ({search}) => {
    return ( 
        <div className="no_stations">
            <Container>
                <div className="content">
                    <h3 style={{ textAlign: 'center', marginBottom: '3px', marginTop: '10px', color:'#1F7A8C'}} class="notfound_header">No fuel stations found<SearchOutlined color="secondary" fontSize="large" /></h3>
                    <p style={{ textAlign: 'center', color:'#022B3A' }}>
                        Sorry, we couldn't find a fuel station for "{search}"
                        <li>Make sure all words are spelled correctly</li>
                        <li>Try a different name</li>
                        </p>
                </div>
                <div className="image">
                    <LocalGasStation
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
        </div >
     );
}
 
export default NoStations;