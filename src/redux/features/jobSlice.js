import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    jobs : [],
    loading: false,
    errors: null,
}

const fetchJobs = createAsyncThunk("fetchJob", async (offset,limit) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
        "limit": 10,
        "offset": offset
       });
       
       const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body
       };
       
       const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
        const data = await response.json();
        console.log(data) 
        return data.jdList;
});

const jobsSlice = createSlice(
    {
        name: "jobs",
        initialState,  
        reducers:{},  // Reducers are used to modify the state in response to actions. They specify how the state should change based on actions.
        extraReducers: (builder) => {
            builder.addCase(fetchJobs.fulfilled, (state, actions) => {
              return { ...state, loading: false, jobs: actions.payload };
            });
            builder.addCase(fetchJobs.pending, (state, actions) => {
              return { ...state, loading: true };
            });
            builder.addCase(fetchJobs.rejected, (state, actions) => {
              return { ...state, loading: true, errors: actions.payload };
            });
          },
    }
)

export default jobsSlice.reducer;