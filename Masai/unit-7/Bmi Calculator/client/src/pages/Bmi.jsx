import { useEffect, useState } from "react";
import axios from "axios";

export const Bmi = () => {
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  // const [render, setRender] = useState(true);
  const [bmi, setBmi] = useState();
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(typeof height, weight);
    // setRender(!render);
    // getBmi({ height, weight })
    calculateBMI()
    setHeight(0);
    setWeight(0);
  };
  
  const calculateBMI=async()=>{
    if(!weight || !height || isNaN(height) || isNaN(weight)){
      setResult("")
      setBmi("")
      return
    }
    try {
      const res=await axios.post("http://localhost:8080/calculateBMI",{height,weight})
      const data =res.data
      setBmi(data)
    } catch (err) {
      console.log(err);
    }
  }
  // useEffect(() => {
    
  // }, [height, weight]);

  const getBmi = (obj) => {
    axios
      .post("http://localhost:8080/calculateBMI", obj)
      .then((res) => {
        setBmi(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  // if (bmi < 18.5) {
  //   setResult("Underweight");
  // } else if (bmi >= 18.5 && bmi < 24.9) {
  //   setResult("Normal weight");
  // } else if (bmi >= 24.9 && bmi < 29.9) {
  //   setResult("Overweight");
  // } else {
  //   setResult("Obese");
  // }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Height in meter"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          type="number"
          placeholder="Weight in kg"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <button type="submit">Calculate</button>
      </form>
      <div>BMI: {bmi}</div>
      <div>Result: {result}</div>
    </>
  );
};
