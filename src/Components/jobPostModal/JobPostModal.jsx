import React, { useEffect, useState } from "react";
import { db, serverStamp } from "../../firebase/FirebaseConfige";
import { addDoc, collection } from "firebase/firestore";

const JobPostModal = ({ open }) => {
  const skills = ["javaScript", "React", "Next", "Tailwind", "Mongodb", "Java"];

  const [jobDetails, setJobDetails] = useState({
    title: "",
    type: "full time",
    location: "remote",
    companyName: "",
    companyUrl: "",
    skills: [],
    link: "",
    description: "",
  });
  const handleChange = (e) => {
    setJobDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const addRemoveSkill = (skill) => {
    jobDetails.skills.includes(skill)
      ? setJobDetails((prev) => ({
          ...prev,
          skills: prev.skills.filter((s) => s != skill),
        }))
      : setJobDetails((prev) => ({
          ...prev,
          skills: prev.skills.concat(skill),
        }));
  };

  const postJob = async (jobDetails) => {
    try {
      console.log(jobDetails);
      await addDoc(collection(db, "jobs"), {
        ...jobDetails,

        postedOn: serverStamp.now(),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await postJob(jobDetails);
    setJobDetails("");
  };

  return (
    <div
      className={`${
        open.open == true
          ? "bg-gray-50  bg-opacity-30 absolute w-[100vw] h-[100vh] z-30"
          : "hidden"
      }`}
    >
      <form
        onSubmit={handleSubmit}
        id="dailog-box "
        className="bg-white w-[45%]  h-[85%]  absolute top-11 z-10 left-[28vw] m-auto shadow-lg p-4 rounded-md"
      >
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-medium">Post Job</h1>
          <button
            className="text-2xl font-medium"
            onClick={() => open.setOpen(false)}
          >
            x
          </button>
        </div>
        <div className="flex flex-wrap gap-3 justify-between items-center py-4">
          <input
            className="bg-gray-100 outline-none h-[60px] border-none px-4 py-2 text-xl  text-gray-900 rounded-md"
            type="text"
            name="title"
            value={jobDetails.title}
            placeholder="Job title *"
            onChange={handleChange}
            required
          />

          <select
            name="type"
            value={jobDetails.type}
            onChange={handleChange}
            defaultValue="full time"
            className="bg-gray-100 w-[19vw] text-gray-900 rounded-md
            px-4 py-2 text-xl border-none h-[60px] outline-none "
          >
            <option value="full time">Full time</option>
            <option value="part time">Part time</option>
          </select>
          <input
            name="companyName"
            value={jobDetails.companyName}
            type="text"
            required
            placeholder="Company name *"
            onChange={handleChange}
            className="bg-gray-100 h-[60px]  outline-none border-none px-4 py-2 text-xl  text-gray-900 rounded-md"
          />
          <input
            name="companyUrl"
            value={jobDetails.companyUrl}
            type="text"
            required
            placeholder="Company Url *"
            onChange={handleChange}
            className="bg-gray-100 h-[60px] outline-none  border-none px-4 py-2 text-xl  text-gray-900 rounded-md"
          />

          <select
            name="location"
            value={jobDetails.location}
            defaultValue="remote"
            onChange={handleChange}
            className="bg-gray-100 outline-none w-[19vw] text-gray-900 rounded-md
            px-4 py-2 text-xl border-none h-[60px] "
          >
            <option value="remote">Remote</option>
            <option value="in-office">In Office</option>
          </select>
          <input
            name="link"
            value={jobDetails.link}
            type="text"
            required
            onChange={handleChange}
            placeholder="Job Link *"
            className="bg-gray-100 h-[60px]  outline-none border-none px-4 py-2 text-xl  text-gray-900 rounded-md"
          />
          <textarea
            onChange={handleChange}
            name="description"
            required
            value={jobDetails.description}
            placeholder="Job descriptions *"
            className="bg-gray-100 h-[80px] outline-none  w-full border-none px-4 py-2 text-xl  text-gray-900 rounded-md"
          ></textarea>
        </div>
        <h1 className="inline">Skills</h1>

        <div className="flex items-center gap-3">
          {skills.map((skill) => (
            <div
              className={`border border-black px-2 py-1 rounded-md  cursor-pointer
                ${
                 jobDetails && jobDetails.skills.includes(skill)
                    ? "bg-black text-white"
                    : "hover:bg-black hover:text-white "
                }`}
              key={skill}
              onClick={() => addRemoveSkill(skill)}
            >
              {skill}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between p-4">
          <h1 className="text-red-500 ">*Required fields</h1>
          <button className="px-6 py-2 bg-cyan-500 font-medium rounded-md cursor-pointer">
            Post job
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobPostModal;
