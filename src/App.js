import React, { Component } from "react";

class App extends Component {
  state = {
    person: {
      fullName: "John Cena",
      bio: "I'm a boxer",
      imgSrc:
        "https://i.pinimg.com/236x/f5/ab/4a/f5ab4a369604411dc3f6bb5a678f7e2f.jpg",
      profession: "Boxer",
    },
    show: true,
    timeElapsed: 0,
  };

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState((prevState) => ({
        timeElapsed: prevState.timeElapsed + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, timeElapsed } = this.state;

    return (
      <div className="App">
        <h1>Person Details</h1>
        {show && (
          <div>
            <p>Full Name: {fullName}</p>
            <p>Bio: {bio}</p>
            <img src={imgSrc} alt="Person" />
            <p>Profession: {profession}</p>
            <p>Time Elapsed: {timeElapsed} ..seconds</p>
          </div>
        )}

        <button onClick={this.toggleShow}>{show ? "Hide" : "Show"}</button>
      </div>
    );
  }
}

export default App;
