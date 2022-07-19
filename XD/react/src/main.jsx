const reactShim = require("../utils/react-shim");
const React = require("react");
const ReactDOM = require("react-dom");
const { createRoot } = require('react-dom/client');

const App = require("./App");

let dialog;
let root;
function getDialog() {
  if (dialog == null) {
    dialog = document.createElement("dialog");
    root = createRoot(dialog)
    root.render(<App dialog={dialog} />);
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
