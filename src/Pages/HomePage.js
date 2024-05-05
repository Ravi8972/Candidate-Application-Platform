import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from '../redux/features/jobSlice';
import Filters from '../Components/Filters';

const HomePage = () => {

    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.loading);
  
    useEffect(() => {
      dispatch(fetchJobs());
      return;
    }, [dispatch]);

  return (
    <div>Jobs
      <Filters/>
    </div>
  )
}

export default HomePage;