import { useState } from "react";

import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/education";
import Experience from "./components/workExperience";
import "./App.css";
import Projects from "./components/projects";

function App() {
  const [formData, setFormData] = useState({
    PersonalInfo: { name: "", email: "", phone: "", place: "" },
    education: [{ university: "", grade: "", start: "", end: "" }],
    workExperience: [
      { Company: "", job: "", functions: "", start: "", end: "" },
    ],
    projects: [{ name: "", functions: "", start: "", end: "" }],
    skills: { languages: "", tech: "", tools: "" },
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
      <header>
        <h1>Resume-Make</h1>
      </header>
      <div className="cont">
        <div className="forms">
          <div className="items per">
            <h2>Personal Info</h2>
            <PersonalInfo
              className="PersonalInfo"
              formData={formData.PersonalInfo}
              handleChange={handleChange}
            />
          </div>
          <div className="items edu">
            <h2>Education</h2>
            <Education
              formData={formData.education}
              handleChange={handleChange}
            />
          </div>
          <div className="items exp">
            <h2>Experience</h2>
            <Experience
              formData={formData.workExperience}
              handleChange={handleChange}
            />
          </div>
          <div className="items proj">
            <h2>Projects</h2>
            <Projects
              formData={formData.projects}
              handleChange={handleChange}
            />
          </div>
        </div>
        <div className="output">Hlo</div>
      </div>
    </>
  );
}

export default App;
