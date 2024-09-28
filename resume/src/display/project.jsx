const ProjectDisplay = ({ projects }) => (
  <div>
    <div className="title">{projects.name}</div>
    <div className="functions">{projects.functions}</div>
    <div className="start">{projects.start}</div>
    <div className="end">{projects.end}</div>
  </div>
);

export default ProjectDisplay;
