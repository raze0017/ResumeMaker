import "./display.css";

const EducationDisplay = ({ education }) => (
  <div className="section">
    <div className="section-title">Education</div>
    <div className="edu1 flex">
      <div className="university">{education.university}</div>
      <div className="dates">
        <div className="start">{education.start}</div>
        <div className="end">{education.end}</div>
      </div>
    </div>
    <div className="edu2 flex">
      <div className="grade">CGPA: {education.grade}</div>
    </div>
  </div>
);

export default EducationDisplay;
