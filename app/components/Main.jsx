var React= require('react');
var Nav = require('Nav');




var Main = (props) => {
  return(
    <div>
      <Nav/>
      <div>
      <p>Main.jsx Rendered</p>
      <div>
        {props.children}
      </div>
      </div>
    </div>

  );

}


module.exports = Main;
