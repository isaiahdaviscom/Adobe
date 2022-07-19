const reactShim = require("../utils/react-shim");
const style = require("./styles.css");
const React = require("react");
const ReactDOM = require("react-dom");
const { createRoot } = require('react-dom/client');

const Header = require("./components/Header");

class HelloForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
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
        {/* <Header></Header> */}
        <h1>React lajsdlfkjaslfjsdfj </h1>
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

let dialog;
let root;
function getDialog() {
  if (dialog == null) {
    dialog = document.createElement("dialog");
    root = createRoot(dialog)
    root.render(<HelloForm dialog={dialog} />);
  }
  return dialog;
}

module.exports = {
  commands: {
    menuCommand: function () {
      document.body.appendChild(getDialog()).showModal();
    },
  },
};
