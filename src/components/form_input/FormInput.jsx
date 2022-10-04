import {TextField} from "@mui/material";
import React from "react";

const FormInput = (props) => {

    const {name , label ,  value , isValid , helperText , onBlur } = props;
    return(
        <div className="form_input">
            <TextField sx={{marginTop:1}}
                name = {name}
                label={label}
                variant="outlined"
                value={value}
                fullWidth
                error = {props.isValid}
                helperText={helperText}
                onBlur={onBlur}
                onChange={(e)=>props.setValue(e.target.value)}
            />
        </div>
    )
}

export default FormInput