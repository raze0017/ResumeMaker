const WorkDisplay = ({ workExperience }) => (
  <div>
    <div className="Company">{workExperience.Company}</div>
    <div className="job">{workExperience.job}</div>
    <div className="functions">{workExperience.functions}</div>
    <div className="start">{workExperience.start}</div>
    <div className="end">{workExperience.end}</div>
  </div>
);

export default WorkDisplay;
