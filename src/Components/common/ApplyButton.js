import React from "react";
import { Button, Typography } from '@mui/material';
import BoltIcon from '@mui/icons-material/Bolt';

/**
 * ApplyButton provides a visually appealing and easy-to-use application button for job applications.
 * It features a prominent Bolt icon to signify a quick or easy application process.
 */
const ApplyButton = () => {
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
