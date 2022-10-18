import React from "react";

import { useState } from "react";



const CheckboxComponent = ({label, setCheckedValues, checkedValues }) => {
    const [checked, setChecked] = useState(false)
    
    
    const handleChange = () => {
        if (checked == true) {
            setCheckedValues(checkedValues.filter(value => value != label))
            setChecked(false)
        }
        if (checked == false) {
            if (checkedValues == undefined) {
                setCheckedValues([label])
                setChecked(true)
            } else {
                setCheckedValues([...checkedValues, label])
                setChecked(true)
            }
        }
    }
    return(
        
        <div>
            <label>
                <input onChange={handleChange} type="checkbox" style={{
                            margin: '15px',
                        }}/>
                <span>{label}</span>
            </label>
        </div>
    )
}

export default CheckboxComponent