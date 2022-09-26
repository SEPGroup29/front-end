import React from "react";
import {Button} from "@mui/material";

const RoundedButton = (props) => {
    const {color = null , text } = props;
    console.log(color)

    return(
        <Button
            variant="contained"
            color="success"
            sx={{
                marginTop : 2,
                borderRadius : 10 ,
                fontSize : 20,
                backgroundColor : color,
                color : (color === null) ? null : "black",
                '&:hover' : {
                    backgroundColor : (color === null) ? null : "#cccccc",
                }
            }}
            fullWidth>
            {text}
        </Button>
    )
}

export default RoundedButton