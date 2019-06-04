import React, { Component } from 'react';
import './App.css';
import Container from "./playground/components/Container";
import Test from "./workout/checkboxLable";
import {COLORS} from "./playground/constant/theme";

class App extends Component {

  render(){
    return(
        <Container>
          <Test themeColor={ COLORS.PRIMARY_STUDENT_BG } onClick={this.onClick}/>
        </Container>
    );
  }
}

export default App;
