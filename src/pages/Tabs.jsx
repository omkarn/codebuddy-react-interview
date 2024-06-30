/* eslint-disable react/prop-types */
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaRegCircleXmark } from "react-icons/fa6";

function Tabs(props) {
  const { completedForms, setCurrentForm } = props;
  return (
    <div className="flex w-full flex-row justify-between bg-white">
      <button
        style={completedForms["1"] ? { color: "green" } : { color: "red" }}
        className="button tab"
        onClick={() => setCurrentForm(1)}
      >
        {completedForms["1"] ? <FaRegCircleCheck /> : <FaRegCircleXmark />}
        <p>Form 1</p>
      </button>
      <button
        style={completedForms["2"] ? { color: "green" } : { color: "red" }}
        className="button tab"
        disabled={!completedForms["1"]}
        onClick={() => setCurrentForm(2)}
      >
        {completedForms["2"] ? <FaRegCircleCheck /> : <FaRegCircleXmark />}
        <p>Form 2</p>
      </button>
      <button
        style={completedForms["3"] ? { color: "green" } : { color: "red" }}
        className="button tab"
        disabled={!(completedForms["1"] && completedForms["2"])}
        onClick={() => setCurrentForm(3)}
      >
        {completedForms["3"] ? <FaRegCircleCheck /> : <FaRegCircleXmark />}
        <p>Form 3</p>
      </button>
    </div>
  );
}

export default Tabs;
