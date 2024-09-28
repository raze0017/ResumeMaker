import FormComponent from "./FormComponent";

const Experience = ({ formData, handleChange }) => {
  const fields = ["Company", "job", "functions", "start", "end"];
  return (
    <FormComponent
      formData={formData}
      handleChange={handleChange}
      fields={fields}
      section="workExperience"
    />
  );
};
export default Experience;
