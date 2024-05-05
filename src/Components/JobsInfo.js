import React from "react";
import { Typography, Box } from "@mui/material";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";

const JobsInfo = ({ companyName, jobRole, location, imageUrl }) => {
  return (
    // Container box for layout, margin top is set for spacing from the previous elements.
    <Box sx={{ mt: 2 }} display={"flex"} flexDirection={"row"}>
      <Box sx={{ width: "25%", height: "60%" }}>
        <img
          src={imageUrl}
          alt="Company Logo"
          style={{ width: "90%", height: "90%", borderRadius: 3 }}
        />
      </Box>
      <Box sx={{ width: "80%", marginLeft: 1 }}>
        <Typography
          variant="h5"
          component="div"
          sx={{ fontSize: "1.2rem", color: "#7f8280", fontWeight: "700" }}
        >
          {companyName}
        </Typography>
        <Typography
          component="div"
          sx={{ fontSize: "1rem", color: "#393b39", fontWeight: "500" }}
        >
          {jobRole.charAt(0).toUpperCase() + jobRole.slice(1).toLowerCase()}{" "}
          {jobRole.toLowerCase() !== "tech lead" ? "Developer" : ""}
        </Typography>

        <Box
          display={"flex"}
          flexDirection={"row"}
          sx={{ alignItems: "center", fontSize: "0.8rem", marginLeft: "-2px" }}
        >
          <RoomOutlinedIcon />
          <Typography
            variant="body1"
            color="#5e615f"
            fontWeight={600}
            sx={{ marginRight: "10px", fontSize: "0.9rem", marginLeft: "2px" }} // Correct margin to align text properly with the icon.
          >
            {location.charAt(0).toUpperCase() + location.slice(1).toLowerCase()}{" "}
            {/* Capitalizes the first letter of the location. */}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default JobsInfo;
