import { Box, TextField } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import React, { useState } from "react";
import { useSelector } from "react-redux";
import JobList from "./JobList";

const Filters = () => {
  const jobs = useSelector((state) => state.jobs.jobs);
  const [filterRole, setFilterRole] = useState("");
  const [filterLocation, setFilterLocation] = useState("");
  const [filterExperience, setFilterExperience] = useState("");
  const [filterLocationType,setFilterLocationType]=useState("")

  // console.log(jobs);
  const locationType = ["Remote","On-Site"]

  const handleRoleChange = (e) => {
    setFilterRole(e.target.value);
  };

  const handleLocationChange = (e) => {
    setFilterLocation(e.target.value);
  };
  const handleExperienceChange = (e) => {
    setFilterExperience(e.target.value);
  };
  const handlefilterLocationType = (e) => {
    setFilterLocationType(e.target.value);
  };
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: "60px",
          paddingBottom: "40px",
          gap: "50px",
        }}
      >
        <TextField
          type="text"
          name="role"
          label="Roles"
          variant="outlined"
          value={filterRole}
          onChange={handleRoleChange}
        />
        <TextField
          type="text"
          name="location"
          label="Job Location"
          variant="outlined"
          value={filterLocation}
          onChange={handleLocationChange}
        />
        <TextField
          type="number"
          name="experience"
          label="Min Experience"
          variant="outlined"
          value={filterExperience}
          onChange={handleExperienceChange}
        />

         <TextField
          id="outlined-select-Location"
          select
          label="Select"
          defaultValue=""
          helperText="Remote/On-site"
          value={filterLocationType}
          onChange={handlefilterLocationType}
        >
          {locationType.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <JobList
        jobs={jobs}
        filterRole={filterRole}
        filterLocation={filterLocation}
        filterExperience={filterExperience}
      />
    </div>
  );
};

export default Filters;
