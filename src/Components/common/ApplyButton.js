import React from "react";
import { Button, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";

const ApplyButton = () => {
    // const navigate = useNavigate()
    // const handleApply = (event) => {
    //     event.preventDefault();
    //     navigate('/ApplyPage');
    //   }

    return (
        // Centered button container with bottom margin for spacing
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px'}}>
            {/* Button styled with a custom cyan background color and rounded corners */}
            <Button variant="contained" color="primary" 
                style={{ backgroundColor: '#13ebc3', width: '100%', borderRadius: '10px' }}>
                {/* Button text styled for contrast and emphasis without text transformation */}
                <Typography style={{ color: 'black', fontWeight: 'bold', textTransform: 'none' }}>
                ⚡ Easy Apply
                </Typography>
            </Button>
        </div>
    )
}

export default ApplyButton;
