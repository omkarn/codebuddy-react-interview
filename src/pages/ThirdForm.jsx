/* eslint-disable react/prop-types */
function ThirdForm(props) {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <label htmlFor="countryCode">Country code : </label>
        <select
          value={props.formData.countryCode}
          onChange={props.handleChange}
          id="countryCode"
          name="countryCode"
          required
        >
          <option value="+91">India (+91)</option>
          <option value="+1">America (+1)</option>
        </select>
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number : </label>
        <input
          id="phoneNumber"
          name="phoneNumber"
          value={props.formData.phoneNumber}
          onChange={props.handleChange}
          type="tel"
          required
          pattern="\d{10}"
          maxLength={10}
          minLength={10}
        />
      </div>
      <div>
        <input
          id="acceptTermsAndCondition"
          name="acceptTermsAndCondition"
          type="checkbox"
          required
        />
        <label htmlFor="acceptTermsAndCondition"> Do you accept terms and conditions? </label>
      </div>
    </div>
  );
}

export default ThirdForm;
