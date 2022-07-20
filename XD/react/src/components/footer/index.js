const React = require('react');
const style = require('./style.css');

class Footer extends React.Component {
  render() {
      return (
          <p className={style.clock}>Footer</p>
      )
  }
}

module.exports =  Footer;