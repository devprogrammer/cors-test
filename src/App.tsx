import React from "react";
import logo from "./logo.svg";
import "./App.css";

import axios from "axios";
axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json",
  },
});

const headers = (AR_Token?: any) => {
  let Authorization = localStorage.getItem("jwtToken");
  let axiosConfigHeaders = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Credentials": "true",
      "AR-Token": AR_Token ? "Fe0OAttwjE" : `${Authorization}`,
    },
  };
  return axiosConfigHeaders;
};

const get = () => {
  axios
    .get(`https://api.assetreality.org/api/v1/h`, headers())
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const auth = () => {
  axios
    .post(
      `https://api.assetreality.org/api/v1/user/authenticate`,
      { email: "meid@test.io", password: "test" },
      headers(false)
    )
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const createUser = () => {
  axios
    .post(`https://api.assetreality.org/api/v1/admin/init`, headers())
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={get}>Get Request</button>
        <button onClick={auth}>Auth</button>
        <button onClick={createUser}>Create User</button>
      </header>
    </div>
  );
}

export default App;
