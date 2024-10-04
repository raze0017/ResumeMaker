import { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/education";
import Experience from "./components/workExperience";
import "./App.css";
import Projects from "./components/projects";
import PersonalDisplay from "./display/personal";
import EducationDisplay from "./display/education";
import ProjectDisplay from "./display/project";
import WorkDisplay from "./display/work";
function App() {
  const [formData, setFormData] = useState({
    PersonalInfo: { name: "", email: "", phone: "", place: "" },
    education: { university: "", grade: "", start: "", end: "" }, // Single education object
    workExperience: { Company: "", job: "", functions: "", start: "", end: "" }, // Single experience object
    projects: { name: "", functions: "", start: "", end: "" }, // Single project object
    skills: { languages: "", tech: "", tools: "" },
  });

  const [savedState, setSavedData] = useState({
    PersonalInfo: { name: "", email: "", phone: "", place: "" },
    education: { university: "", grade: "", start: "", end: "" }, // Single education object
    workExperience: { Company: "", job: "", functions: "", start: "", end: "" }, // Single experience object
    projects: { name: "", functions: "", start: "", end: "" }, // Single project object
    skills: { languages: "", tech: "", tools: "" },
  });

  const handleSave = () => {
    if (formData) {
      setSavedData(formData);
    } else {
      console.error("formData is null or undefined!");
    }
  };

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
          {/* Personal Info Section */}
          <div className="items per">
            <h2>Personal Info</h2>
            <PersonalInfo
              formData={formData.PersonalInfo}
              handleChange={handleChange}
            />
            <button onClick={handleSave}>Save</button>
          </div>

          {/* Education Section */}
          <div className="items edu">
            <h2>Education</h2>
            <Education
              formData={formData.education}
              handleChange={handleChange}
            />
            <button onClick={handleSave}>Save</button>
          </div>

          {/* Experience Section */}
          <div className="items exp">
            <h2>Experience</h2>
            <Experience
              formData={formData.workExperience}
              handleChange={handleChange}
            />
            <button onClick={handleSave}>Save</button>
          </div>

          {/* Projects Section */}
          <div className="items proj">
            <h2>Projects</h2>
            <Projects
              formData={formData.projects}
              handleChange={handleChange}
            />
            <button onClick={handleSave}>Save</button>
          </div>
        </div>

        {/* Display Section */}
        <div className="output">
          <div className="personalInfo">
            <PersonalDisplay personalInfo={savedState.PersonalInfo} />
          </div>
          <div className="Education">
            <EducationDisplay education={savedState.education} />
          </div>
          <div className="Work">
            <WorkDisplay workExperience={savedState.workExperience} />
          </div>
          <div className="Projects">
            <ProjectDisplay projects={savedState.projects} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
