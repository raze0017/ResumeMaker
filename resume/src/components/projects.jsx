import FormComponent from "./FormComponent";

const Projects = ({ formData, handleChange }) => {
  const fields = ["name", "functions", "start", "end"];
  return (
    <FormComponent
      formData={formData}
      handleChange={handleChange}
      fields={fields}
      section="projects"
    />
  );
};
export default Projects;
