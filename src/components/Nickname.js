import React, { Component } from 'react';
import names from  'random-names-generator';
import { datadogRum } from '@datadog/browser-rum';


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

        
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function () {
            // if (xhr.readyState === 4 && xhr.status === 200) {
            //     var json = JSON.parse(xhr.responseText);
            //     console.log(json.email + ", " + json.password);
            // }
        };
        
        xhr.send(data);        


        // fetch(url,{
        //     method:'POST',
        //     headers: {
        //         "Content-type": "application/json; charset=UTF-8",
        //         dataType: 'json'
        //     },
        //     body:JSON.stringify(data)
        // }).then((result)=>{
        //     result.json().then((res)=>{
        //         //console.warn('res',res)
        //     })
        // })      

        console.log(this.state.survey_data.nickname + " "+ this.state.survey_data.job + " " + this.state.survey_data.datadog_user);
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
      var _rand_name = names.random();
    
      return (
        <fieldset>
            <legend>
            <h2>4.닉네임</h2>
            </legend>
            
            <form target="_self" action="Submit_done.html" onSubmit={this.submit}>
                <input name="nickname_box" defaultValue={_rand_name} onChange={this.handleChange} /> 
                <button type="submit" >설문 제출</button>                        
            </form>
        </fieldset>
            
      );

      }

}
  export default Nickname;