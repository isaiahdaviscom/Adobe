const React = require('react');
const style = require("./styles.css");

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
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
        <Header></Header>
        <h1>React Template</h1>
        <label>
          <span>What is your name?</span>
          <input onChange={this.onInputChange} />
        </label>
        <p>{"Hello " + this.state.name}</p>
        {/* <Footer></Footer> */}
      </form>
    );
  }
}
module.exports = App;