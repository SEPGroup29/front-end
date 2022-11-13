import { LocalGasStation } from "@mui/icons-material";
import { Container } from "@mui/system";

const Empty = (props) => {
    return (
        <Container>
            <div className="content">
                <h3 style={{ textAlign: 'center', marginBottom: '3px', marginTop: '10px', color: '#1F7A8C' }} class="notfound_header">{props.subject}</h3>
                <p style={{ textAlign: 'center', color: '#022B3A' }}>
                    {props.description}
                </p>
            </div>
            <div className="image">
                <LocalGasStation
                    sx={{
                        fontSize: {
                            xs: "8rem",
                            lg: "10rem"
                        },
                        color: '#1F7A8C',
                        lineHeight: 1
                    }} />
            </div>
        </Container>
    );
}

export default Empty;