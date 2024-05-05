import JobCard from "./JobCard";
import { Container, Grid, Box } from "@mui/material";
import React, { useEffect, useState,useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from '../redux/features/jobSlice';
import InfiniteScroll from 'react-infinite-scroll-component';


const JobList = ({ jobs, filterRole, filterLocation, filterMinBasesalary,filterExperience, filterCompanyName }) => {
  
    const scrollRef = useRef(null);
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.jobs.loading);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
      dispatch(fetchJobs({offset :0}));
      return;
    }, [dispatch]);

  

    const fetchMoreData = () => {
        if (hasMore && !isLoading) {
            dispatch(fetchJobs({ offset: jobs.length })); // Fetch additional jobs.
        }
        jobs.length > 0 ? setHasMore(true) : setHasMore(false);
      };

    const filterJobs = (job) => {
    return (
      job.jobRole.toLowerCase().includes(filterRole.toLowerCase()) &&
      job.location.toLowerCase().includes(filterLocation.toLowerCase()) &&
      (job.minJdSalary?.toString() || '').includes(filterMinBasesalary) &&
      job.minExp?.toString().includes(filterExperience) &&
      job.companyName.toLowerCase().includes(filterCompanyName.toLowerCase())
    );
  };

  return (
    <div  ref={scrollRef} >
        {isLoading && jobs.length === 0 ? ( // Display loading message when fetching initial jobs.
                <Box display="flex" justifyContent="center" alignItems="center" height="100vh" color = "#7f7f7f" >
                    <h4>Loading...</h4>
                </Box>
            ) : (
      <InfiniteScroll  
          dataLength={jobs.length} // Number of items currently loaded.
          next={fetchMoreData} // Function to load more items.
          hasMore={hasMore} // Boolean to indicate if there are more items to load.
          loader={<Box textAlign="center" color = "#7f7f7f"><h4>Loading more...</h4></Box>} // Loader to show while loading more items.
          scrollableTarget={scrollRef} // Reference to the scrollable container.
          endMessage={ // Message to display when all items have been loaded.
              <p style={{ textAlign: 'center' }}>
                  <b>You have seen it all</b>
              </p>
          }
      >
      <Grid container spacing={12}>
        {jobs.filter(filterJobs).map((job, index) => (
          <Grid
            item
            key={`${job.jdUid}-${job.location}-${index}`}
            xs={12}
            sm={6}
            md={4}
          >
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>
      </InfiniteScroll>
      )}
    </div>
  );
};

export default JobList;
