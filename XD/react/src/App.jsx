const React = require('react');
const style = require("./styles.css");
const Header = require("./components/Header")
const Footer = require("./components/Footer")

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: props.name || "" };
    this.onInputChange = (e) => {
      this.setState({ name: e.target.value });
    };
    this.onDoneClick = (e) => {
      this.props.dialog.close();
    };
  }

  render() {
    return (
      <form style={{ width: 600 }}>
        <h1>React Template</h1>
        <Header />
        <label>
          <span>What is your name?</span>
          <input onChange={this.onInputChange} />
        </label>
        <p>{"Hello " + this.state.name}</p>
        <Footer />
      </form>
    );
  }
}

module.exports = App;