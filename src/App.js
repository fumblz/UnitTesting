import React from "react";
import Banner from "./Components/Banner";

const tempArr = [
  {
    fname: "Brian",
    lname: "Elden",
    email: "Brian@gmail.com",
    age: 24,
    onlineStatus: false
  }
];

const App = () => {
  return (
    <div data-test="App">
      <Banner title="Hello, World!" users={tempArr} />
    </div>
  );
};

export default App;
