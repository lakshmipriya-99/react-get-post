import React, { useState } from "react";
import axios from "axios";
//states are used to manage data in rwact
const App = () => {
  //get request - string
  const getDataFromBackEnd = async () => {
    const response = await axios.get("http://localhost:8080/call");
    console.log(response.data);
    document.getElementById("para").innerHTML = response.data;
  };

  //post request - string
  const data = "Hello";
  const postDataFromFrontEnd = async () => {
    const response = await axios.post("http://localhost:8080/testpost", {
      data,
    });
    console.log(response.data);
    document.getElementById("para").innerHTML = response.data;
  };
  //post request - form
  const [formData, setFormData] = useState("");
  const postFormFromFrontEnd = async () => {
    const response = await axios.post("http://localhost:8080/testform", {
      formData,
    });
    console.log(response.data);
    document.getElementById("para").innerHTML = response.data;
  };

  return (
    <div className="App">
      <button onClick={postDataFromFrontEnd}>Post Data</button>
      <p id="para"></p>
      <br />
      <button onClick={getDataFromBackEnd}>Get Data</button>
      <p id="para"></p>
      <br />
      <form onSubmit={postFormFromFrontEnd}>
        <input
          type="text"
          name="formData"
          value={formData}
          onChange={(e) => setFormData(e.target.value)}
        ></input>
        <input type="submit" value="Test Form"></input>
        <p id="para"></p>
      </form>
    </div>
  );
};

export default App;
