import "./display.css";

const WorkDisplay = ({ workExperience }) => (
  <div className="section">
    <div className="section-title">Work Experience</div>
    <div className="Company">{workExperience.Company}</div>
    <div className="job">{workExperience.job}</div>
    <div className="functions">{workExperience.functions}</div>
    <div className="dates">
      <div className="start">{workExperience.start}</div>
      <div className="end">{workExperience.end}</div>
    </div>
  </div>
);

export default WorkDisplay;
