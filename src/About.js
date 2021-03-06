import React from 'react';
import data from './data.js';

var About = React.createClass({
  getInitialState: function(){
  	return({storeProps:{}})
  },
  componentWillMount:function(){
  	var info = data.getAbout()
  	this.setState({storeProps:info})
  },
  render: function() {
    return (
      <div id = "about-page" className ="text-center">
    	<div id ="blackbox">
        <h1><strong><u>About Us</u></strong></h1><br/>
        <p>
        {this.state.storeProps.trinitea_slogan}<br/>
        {this.state.storeProps.trinitea_philosophy_intro}<br/>
        {this.state.storeProps.trinitea_philosophy_think}<br/>
        {this.state.storeProps.trinitea_philosophy_drink}<br/>
        {this.state.storeProps.trinitea_philosophy_live}
        </p>
        <h1><strong><u>Contact</u></strong></h1><br/>
     	 <p>{this.state.storeProps.trinitea_address}<br/>
      	 {this.state.storeProps.trinitea_email}<br/>
     	 {this.state.storeProps.trinitea_phone}
     	 </p>
      </div>
      </div>
    )
  }
});

export default About