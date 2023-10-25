import React from "react";
import HtmlTable from "../src/HTMLtable/index";
import LineChartData from "../src/LineChart/index";
import "./App.css";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyA1DHgrrpvGE_6UooS6hBEfwRXtPcNFg78",
  authDomain: "arthashastra-web.firebaseapp.com",
  databaseURL: "https://arthashastra-web-default-rtdb.firebaseio.com",
  projectId: "arthashastra-web",
  storageBucket: "arthashastra-web.appspot.com",
  messagingSenderId: "506878000195",
  appId: "1:506878000195:web:24fb814c59d769276c28f6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

class App extends React.Component {
  state = {
    tab: <HtmlTable />,
    classname: "addColor",
    classname2: "removeClass",
  };

  displayTable = () => {
    const { tab, classname } = this.state;
    this.setState({
      tab: <HtmlTable />,
      classname: "addColor",
      classname2: "removeClass",
    });
  };

  displayLineChart = () => {
    const { tab, classname, classname2 } = this.state;
    this.setState({
      tab: <LineChartData />,
      classname2: "addColor",
      classname: "removeClass",
    });
  };

  render() {
    const { tab, classname, classname2 } = this.state;
    return (
      <div>
        <div className="large-device">
          <h1 className="name-field">
            Name : <span className="my-name">Gangadhara</span>
          </h1>
          <h1 className="email-field">
            Email :{""}
            <span className="my-email">gangadharalothula7702@gmail.com</span>
          </h1>
          <h1 className="contact-field">
            Contact No :{""}
            <span className="my-contact">7702441016</span>
          </h1>
        </div>
        <div className="set-tabs">
          <h1 onClick={this.displayTable} className={classname}>
            Table
          </h1>
          <h1 onClick={this.displayLineChart} className={classname2}>
            Line Chart
          </h1>
        </div>
        {tab}
      </div>
    );
  }
}

export default App;
