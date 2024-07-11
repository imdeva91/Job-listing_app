import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import JobCard from "./Components/jobCard/JobCard";
import JobPostModal from "./Components/jobPostModal/JobPostModal";
import {refColl} from "./firebase/FirebaseConfige"
import { getDocs } from "firebase/firestore";
import { HashLoader } from "react-spinners";

function App() {
  const [open, setOpen] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [loading,setLoading] = useState(true)

  const fetchJobs = async () => {
    const req = await getDocs(refColl)
    const tempJobs = req.docs.map((doc)=>({...doc.data(),id: doc.id, postedOn : doc.data().postedOn.toDate()}))
    setJobs(tempJobs)
    setLoading(false)
  };
  useEffect(()=>{
  fetchJobs()

  },[])
  return (
    <div>
      <JobPostModal open={{ open, setOpen }} />

      <Header setOpen={setOpen} />
      <div className="absolute top-[165px] z-10 sm:left-[20vw] flex flex-col sm:gap-5 gap-2">
        <SearchBar />
        {
          loading ? <HashLoader className="text-center m-auto"/> : jobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        
        
      </div>
    </div>
  );
}

export default App;
