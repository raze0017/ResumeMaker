import FormComponent from "./FormComponent";

const Projects = ({ formData, handleChange }) => {
  const fields = ["Title", "functions", "start", "end"];
  return (
    <FormComponent
      formData={formData}
      handleChange={handleChange}
      fields={fields}
      section="Projects"
    />
  );
};
export default Projects;
