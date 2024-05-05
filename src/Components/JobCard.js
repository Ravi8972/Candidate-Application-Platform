import React, { useState } from "react";
import {
  Card,
  Box,
  CardContent,
  Button,
  Typography,
  Collapse,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import HourglassFullTwoToneIcon from "@mui/icons-material/HourglassFullTwoTone";
import ApplyButton from "./common/ApplyButton";
import ReferralButton from "./common/ReferralButton";
import JobsInfo from "./JobsInfo";

const JobCard = ({ job }) => {
  const JobPosted = job.maxExp % 30;
  const [showMore, setShowMore] = useState(false);
  const maxDescriptionLength = 120;
  return (
    <Card
      sx={{
        margin: 2,
        boxShadow: 2,
        border: "1px solid #d7dbd8",
        borderRadius: 5,
        transition: "all 0.4s ease-in-out", //  transition for smoother effect
        "&:hover": {
          transform: "scale(1.05)", // Change the box size on hover
        },
      }}
    >
      {" "}
      {/* Styling for the card with shadow, margin, and border. */}
      <CardContent>
        <Box
          sx={{
            border: "2.5px solid #d7dbd8",
            borderRadius: 3.5,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "25%",
            pl: 1,
          }}
          md={{ width: "40%" }}
          xs={{ width: "33%" }}
        >
          <HourglassFullTwoToneIcon sx={{ fontSize: 14 }} />
          <Typography sx={{ fontSize: 13 }}>
            Posted {JobPosted} days ago
          </Typography>
        </Box>
        <JobsInfo
          companyName={job.companyName}
          location={job.location}
          jobRole={job.jobRole}
          imageUrl={job.logoUrl}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            marginBottom: 1,
            alignItems: "center",
          }}
        >
          <Typography
            variant="body1"
            fontWeight={600}
            color="#5e615f"
            sx={{ backgroundColor: "#fff", fontSize: "1rem" }}
          >
            Estimated Salary: $
            {job.minJdSalary ? `${job.minJdSalary}000` : "NA"} - $
            {job.maxJdSalary ? job.maxJdSalary : "NA"}0000✅
          </Typography>
        </Box>

        <Typography variant="body2" sx={{ fontWeight: "650" }}>
          About Company:
        </Typography>
        <Collapse in={showMore} timeout="auto" unmountOnExit>
          <Typography variant="body2" paragraph>
            {job.jobDetailsFromCompany}
          </Typography>
        </Collapse>
        <Typography variant="body2" paragraph>
          {job.jobDetailsFromCompany.substring(0, maxDescriptionLength)}
          {job.jobDetailsFromCompany.length > maxDescriptionLength && (
            <span
              onClick={() => setShowMore(!showMore)}
              style={{ color: "blue", cursor: "pointer" }}
            >
              {showMore ? " Read Less..." : " Read More..."}
            </span>
          )}
        </Typography>
        <Typography
          variant="body2"
          fontWeight={600}
          style={{ marginBottom: "7px" }}
        >
          Experience: {job.minExp ? job.minExp : "NA"} years
        </Typography>
        <ApplyButton href={job.jdLink} />
        <ReferralButton />
      </CardContent>
    </Card>
  );
};

export default JobCard;
