import React, { Component } from 'react';
import names from  'random-names-generator';
import { datadogRum } from '@datadog/browser-rum';




function postData(url, body) {
  var http = new XMLHttpRequest;
  http.responseType = 'json';
  http.open("POST", url, true);
  http.setRequestHeader('Content-Type', 'application/json');
  //http.withCredentials = 'true';
  http.onload = function(e) {
    if (this.status == 200) {
      var result = this.response
      console.log('response', result); // JSON response  
      var parsedJSONresult = JSON.parse(result);
      console.log("nickname: " + parsedJSONresult["nickname"]);
    } else {
      console.log("here2");
      console.log("state " + http.readyState);
    }
  };
  // http.onreadystatechange = function() {
  //     if(http.readyState == 4) {
  //       console.log("here1");
  //         console.log("response 4: ");
  //         var result = http.responseText;
  //         console.log(result);
  //         var parsedJSONresult = JSON.parse(result);
  //         console.log(result);

  //         console.log(result);
  //         console.log(parsedJSONresponse["nickname"] + ", " + parsedJSONresponse["job"]);
  //         alert(parsedJSONresponse["nickname"] + "님, " + parsedJSONresponse["job"]);
  //     } else {
  //         console.log("here2");
  //         console.log("state " + http.readyState);
  //     }
  // }
  http.send(body);
}



// async function postData(url = "", data = {}) {
//     // Default options are marked with *
//     const response = await fetch(url, {
//       method: "POST", // *GET, POST, PUT, DELETE, etc.
//       mode: "cors", // no-cors, *cors, same-origin
//       cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//       credentials: "same-origin", // include, *same-origin, omit
//       headers: {
//         "Content-Type": "application/json",
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       redirect: "follow", // manual, *follow, error
//       referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//       body: JSON.stringify(data), // body data type must match "Content-Type" header
//     });

//     var resText = response.json();
//     console.log(resText);
//     return resText; // parses JSON response into native JavaScript objects
//   }

class Nickname extends Component{

    constructor() {
        super();
        this.state = {
            survey_data:{nickname:"noname", job:"b", datadog_user:"0"},  
        };
        this.submit = this.submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }

    

    submit(){
        let url = "https://0igxiahppc.execute-api.ap-northeast-2.amazonaws.com/v2/addSurvey";
        let data = this.state.survey_data;
        console.log("submit!!!")
        var body = JSON.stringify({"nickname": this.state.survey_data.nickname,
                 "job": this.state.survey_data.job,
                 "datadog_user": this.state.survey_data.datadog_user });
        postData('https://0igxiahppc.execute-api.ap-northeast-2.amazonaws.com/v2/addSurvey', body);

        // window.DD_RUM && window.DD_RUM.setUser({
        //     mbti: answer.toString(),
        //     team: selectedTeam,
        //   })
                    


        // fetch('https://0igxiahppc.execute-api.ap-northeast-2.amazonaws.com/v2/addSurvey', {
        //     method: 'POST',
        //     body: JSON.stringify({
        //       nickname: this.state.survey_data.nickname,
        //       job: this.state.survey_data.job,
        //       datadog_user: this.state.survey_data.datadog_user
        //     }),
        //     headers: {
        //       'Content-type': 'application/json; charset=UTF-8',
        //       'dataType': 'json'
        //     }
        //   })
        //   .then(res => res.json())
        //   .then(console.log)
        //   .then(console.context())
        // postData(url, data).then((res) => {
        //     console.log('This is res: ' + res); // JSON data parsed by `data.json()` call
        // });

        // var data = '{\"nickname\" : "' + this.state.survey_data.nickname 
        //             + '\", "job" : \"' + this.state.survey_data.job 
        //             + '\", "datadog_user\" : "' + this.state.survey_data.datadog_user + '"}';

        
        // var xhr = new XMLHttpRequest();
        // xhr.open("POST", url, true);
        // xhr.setRequestHeader("Content-Type", "application/json");
        // xhr.onreadystatechange = function () {
        //     // if (xhr.readyState === 4 && xhr.status === 200) {
        //     //     var json = JSON.parse(xhr.responseText);
        //     //     console.log(json.email + ", " + json.password);
        //     // }
        // };
        
        // xhr.send(JSON.stringify(data));        


        // fetch(url,{
        //     method:'POST',
        //     headers: {
        //         "Content-type": "application/json; charset=UTF-8",
        //         'Accept': 'application/json'
        //     },
            
        //     body:JSON.stringify(data)
            
        // }).then((result)=>{
        //     result.json().then((res)=>{
        //         //console.warn('res',res)
        //     })
        // })      

        console.log("request sent! " + this.state.survey_data.nickname + " "+ this.state.survey_data.job + " " + this.state.survey_data.datadog_user);
        datadogRum.setUser({
            job: this.state.survey_data.job,
            name: this.state.survey_data.nickname,
            datadog_user: this.state.survey_data.datadog_user,
            coupon_prize: "yes",            
        })
    }
    
    // handleChange(event){
    //     this.state.survey_data.nickname=event.target.value;

    // }


    handleChange = (e) => {  // <- input값으로 text 변경 함수
        e.preventDefault();

        this.state.survey_data.nickname=e.target.value;
      };
      
    render(){      
      console.log('Nickname render');
      this.state.survey_data.datadog_user=this.props.datadog_user;
      this.state.survey_data.job=this.props.job;
      var _rand_name = ""; //names.random();
    
      return (
        <fieldset>
            <legend>
            <h2>4.닉네임</h2>
            </legend>
            
            <form target="_self" action="Submit_done.html" onSubmit={this.submit}>
                <input name="nickname_box" onChange={this.handleChange} /> 
                <button type="submit" >설문 제출</button>                        
            </form>
        </fieldset>
            
      );

      }

}
  export default Nickname;