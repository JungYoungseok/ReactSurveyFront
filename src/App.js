import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import './App.css';
import TOC from "./components/TOC";
import Subject from "./components/Subject";
import Content from "./components/Content";
import Job from "./components/Job";
import Nickname from "./components/Nickname";
import DDMaturity from "./components/DDMaturity";
import { datadogRum } from '@datadog/browser-rum';
import { Redirect } from "react-router-dom";




function Home() {
  const navigate = useNavigate();

  const handleSubmit = event => {
    //event.preventDefault();
    navigate('/Submit_done.html');
  };

  return (  
    <form onSubmit={handleSubmit}>
      <p></p>
      <button type="submit">다른 페이지로 전환(Routing) 테스트</button>
    </form>
  );
}

function Submit_done() {
  const navigate = useNavigate();

  const handleClick = event => {
    //event.preventDefault();
    navigate('/index.html');
  };

  return (

    <html>
      <title>2023 Q2 Datadog RUM Webinar</title>
      <body>
          <h1 onClick={handleClick}>Thank you!</h1>        
      </body>
    </html>
  )
}

// function handleClick() {
    
//   // Send data to the backend via POST
//   fetch('https://0igxiahppc.execute-api.ap-northeast-2.amazonaws.com/v2/addMBTI', {  // Enter your IP address here
//     Content: '',
//     method: 'POST', 
//     mode: 'cors', 
//     body: JSON.stringify(jsonData) // body data type must match "Content-Type" header

//   })

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      size: '',
      datadog_user: '0',
      job: 'FrontDev',
      mode:'read',
      selected_content_id:2,
      subject:{title:'Datadog RUM Webinar 설문'},
      welcome:{title:'Welcome', desc:'Hello, React!!'},
      survey_data:{nickname:"a", job:"b", datadog_user:"0"},
      

      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'Javascript is for interactive'}
      ]
    }

    // this.handleJobChange = this.handleJobChange.bind(this);
    //this.handleDatadogUserChange = this.handleDatadogUserChange.bind(this);
    this.submit = this.submit.bind(this);
    
  }

  // handleJobChange(event) {
  //   this.setState({
  //     job: event.target.value
  //   });
  // }

  // handleDatadogUserChange(event) {
  //   this.setState({
  //     datadog_user: event.target.value
  //   });
  // }
  // handleSubmitForPopup(event) {
  //   event.preventDefault();
  //   alert(`You chose the ${this.state.size} pizza.`);
  // }


  // handleInputChange(event) {
  //   const target = event.target;
  //   var value = target.value;
  //   const name = target.name;
    
  //   this.setState({
  //       [name]: value
  //   });    
  //}

  submit(){
      let url = "https://jsonplaceholder.typicode.com/posts";
      let data = this.state.survey_data;
    
      fetch(url,{
          method:'POST',
          headers: {
              "Content-type": "application/json; charset=UTF-8"
          },
          body:JSON.stringify(data)
      }).then((result)=>{
          result.json().then((res)=>{
              console.warn('res',res)
          })
      })      
      
  }

  render() {
    console.log('App render');


    var _title, _desc = null;
    var _datadog_user = this.state.datadog_user;
    var _job = this.state.job;


    console.log('render', this);

    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title}
        >          
        </Subject>

        <DDMaturity
          onChangePage={function(value){
            this.setState({datadog_user:value});
          }.bind(this)}        
        ></DDMaturity>

        <Job
          onChangePage={function(value){
            this.setState({job:value});
          }.bind(this)}          
        ></Job>

        <Content job={_job} datadog_user={_datadog_user}></Content>

        <Nickname job={_job} datadog_user={_datadog_user}> </Nickname>

        <Routes>
          <Route path="/submit_done.html" element={<Submit_done />} />
          <Route path="/index.html" element={<Home />} />
        </Routes>
      </div>
    )
  }
}

export default App;

