/* eslint-disable react/prop-types */
function FirstForm(props) {
  return (
    <div className="flex flex-col gap-3">
      <div className="input-container">
        <label htmlFor="emailId">Email Id : </label>
        <input
          id="emailId"
          value={props.formData.emailId}
          onChange={props.handleChange}
          name="emailId"
          type="email"
          required
        />
      </div>
      <div className="input-container">
        <label htmlFor="password">Password : </label>
        <input
          id="password"
          onChange={props.handleChange}
          value={props.formData.password}
          name="password"
          type="password"
          pattern="(?=.*[a-z].*[a-z])(?=.*[A-Z].*[A-Z])(?=.*\d.*\d)(?=.*[@$!%*?&].*[@$!%*?&]).{8,}"
          required
        />
      </div>
    </div>
  );
}

export default FirstForm;
