import { useState } from "react";

import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/education";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    PersonalInfo: { name: "", email: "", phone: "", place: "" },
    education: [{ university: "", grade: "", start: "", end: "" }],
    workExperience: [
      { name: "", job: "", functions: [""], start: "", end: "" },
    ],
    projects: [{ name: "", job: "", functions: [""], start: "", end: "" }],
    skills: { languages: [""], tech: [""], tools: [""] },
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    const [section, field] = name.split(".");

    setFormData((prevState) => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        [field]: value,
      },
    }));
  };

  return (
    <>
      <div className="forms">
        <PersonalInfo
          formData={formData.PersonalInfo}
          handleChange={handleChange}
        />
        <Education formData={formData.education} handleChange={handleChange} />
      </div>
      <div className="output"></div>
    </>
  );
}

export default App;
