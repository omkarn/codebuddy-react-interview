import { useState } from "react";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";
import ThirdForm from "./ThirdForm";
import { useNavigate } from "react-router-dom";
import Tabs from "./Tabs";
import FormActionButtons from "./FormActionButtons";

const Home = () => {
  const navigate = useNavigate();
  const initialFormData = {
    emailId: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
    countryCode: "+91",
    phoneNumber: "",
  };

  const [currentForm, setCurrentForm] = useState(1);
  const [formData, setFormData] = useState(initialFormData);
  const [clickedButton, setClickedButton] = useState("");
  const [completedForms, setCompletedForms] = useState({
    1: false,
    2: false,
    3: false,
  });

  const submitForm = async () => {
    try {
      const data = await fetch("https://codebuddy.review/submit", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      const json = await data.json();
      alert(json.message);
      navigate("/posts");
    } catch (err) {
      alert(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCompletedForms((prevCompletedForms) => {
      return { ...prevCompletedForms, [currentForm]: true };
    });
    if (currentForm === 3 && clickedButton === "next") {
      submitForm();
      setFormData(initialFormData);
      setCurrentForm(1);
    }
    if (clickedButton === "next" && currentForm !== 3) {
      setCurrentForm(currentForm + 1);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompletedForms((prevCompletedForms) => {
      return { ...prevCompletedForms, [currentForm]: false };
    });
    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: value };
    });
  };

  const handleCheckChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: checked };
    });
  };

  function getForm(currentForm) {
    switch (currentForm) {
      case 1:
        return <FirstForm formData={formData} handleChange={handleChange} />;
      case 2:
        return <SecondForm formData={formData} handleChange={handleChange} />;
      case 3:
        return (
          <ThirdForm
            formData={formData}
            handleChange={handleChange}
            handleCheckChange={handleCheckChange}
          />
        );
      default:
        return <FirstForm formData={formData} handleChange={handleChange} />;
    }
  }

  return (
    <div className="flex h-[400px] w-[600px] flex-col items-center justify-between bg-white p-10">
      <Tabs completedForms={completedForms} setCurrentForm={setCurrentForm} />
      <form method="POST" onSubmit={handleSubmit} className="flex flex-col gap-10">
        {getForm(currentForm)}
        <FormActionButtons
          currentForm={currentForm}
          setCurrentForm={setCurrentForm}
          setClickedButton={setClickedButton}
        />
      </form>
    </div>
  );
};

export default Home;
