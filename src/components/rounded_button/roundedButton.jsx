import React from "react";
import {Button} from "@mui/material";

const RoundedButton = (props) => {
    const {color = null , text } = props;

    return(
        <Button
            variant="contained"
            color="success"
            sx={{
                marginTop : 2,
                borderRadius : 10 ,
                fontSize : "1.2rem",
                backgroundColor : color,
                color : (color === null) ? null : "black",
                '&:hover' : {
                    backgroundColor : (color === null) ? null : "#cccccc",
                },

            }}
            fullWidth>
            {text}
        </Button>
    )
}

export default RoundedButton