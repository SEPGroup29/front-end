import {TextField} from "@mui/material";
import React from "react";

const FormInput = (props) => {



    const {name, label, setValue, helperText, onBlur, type, isUpper = false } = props;
    return (
        <div className="form_input">
            <TextField sx={{marginTop: 1}}
               name={name}
               label={label}
               variant="outlined"
               value={props.value}
               fullWidth
               error={props.isValid}
               helperText={helperText}
               onBlur={onBlur}
               onChange={(e) => setValue(e.target.value)}
               type={type ? type : ""}
               inputProps={{
                   style: {textTransform: isUpper ? 'uppercase' : 'none'},
                   maxLength: props.maxLength ? props.maxLength : 100,
               }}

            />
        </div>
    )
}

export default FormInput