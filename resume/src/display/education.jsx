const EducationDisplay = ({ education }) => (
  <div>
    <div className="university">{education.university}</div>
    <div className="grade">{education.grade}</div>
    <div className="start">{education.start}</div>
    <div className="end">{education.end}</div>
  </div>
);

export default EducationDisplay;
