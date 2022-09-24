import {TextField} from "@mui/material";
import React from "react";
import "./formInput.css"

const FormInput = (props) => {

    const {name , label , onChange , value} = props;
    return(
        <div className="form_input">
            <TextField
                name = {name}
                label={label}
                variant="outlined"
                value={value}
                onChange = {onChange}
                fullWidth
            />
        </div>
    )
}

export default FormInput