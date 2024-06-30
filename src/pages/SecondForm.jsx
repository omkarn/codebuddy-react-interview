/* eslint-disable react/prop-types */
function SecondForm(props) {
  return (
    <div className="flex flex-col gap-3">
      <div className="input-container">
        <label htmlFor="firstName">First Name : </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          value={props.formData.firstName}
          onChange={props.handleChange}
          required
          minLength={2}
          maxLength={50}
          pattern="[A-Za-z]+"
        />
      </div>
      <div className="input-container">
        <label htmlFor="lastName">Last Name : </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          value={props.formData.lastName}
          onChange={props.handleChange}
          pattern="[A-Za-z]+"
        />
      </div>
      <div className="input-container">
        <label htmlFor="address">Address : </label>
        <input
          id="address"
          name="address"
          type="text"
          value={props.formData.address}
          required
          onChange={props.handleChange}
          minLength={10}
        />
      </div>
    </div>
  );
}

export default SecondForm;
