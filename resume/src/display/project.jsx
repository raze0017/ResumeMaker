import "./display.css";

const ProjectDisplay = ({ projects }) => (
  <div className="section">
    <div className="section-title">Projects</div>
    <div className="title">{projects.name}</div>
    <div className="functions">{projects.functions}</div>
    <div className="dates">
      <div className="start">{projects.start}</div>
      <div className="end">{projects.end}</div>
    </div>
  </div>
);

export default ProjectDisplay;
