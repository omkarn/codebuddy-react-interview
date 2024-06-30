function FormActionButtons(props) {
  // eslint-disable-next-line react/prop-types
  const { currentForm, setCurrentForm, setClickedButton } = props;
  return (
    <div className="flex flex-row justify-center gap-3">
      <button
        disabled={currentForm === 1}
        onClick={() => {
          setCurrentForm(currentForm - 1);
        }}
        className="button prev"
      >
        Back
      </button>
      <button
        className="button save"
        onClick={() => {
          setClickedButton("save");
        }}
        type="submit"
      >
        Save
      </button>

      <button
        className="button next"
        onClick={() => {
          setClickedButton("next");
        }}
        type="submit"
        name="next"
      >
        Save and Next
      </button>
    </div>
  );
}

export default FormActionButtons;
