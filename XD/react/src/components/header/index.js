const React = require('react');
const style = require('./style.css');

class Header extends React.Component {
  render() {
      return (
          <p className={style.clock}>HELLO WORLD</p>
      )
  }
}

module.exports =  Header;