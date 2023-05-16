import React, { Component } from 'react';

class Content extends Component{
    render(){
      console.log('Content render');

      var _job, _datadog_user = null;

      var i = 0;
      var _datadog_user=[
        {label:"Datadog을 사용하고 있지 않아요"},
        {label:"RUM은 사용해본적 없지만 다른 제품은 사용중이에요"},
        {label:"RUM+APM FullStack 분석에 사용중이에요"}
      ]

      return(
        <fieldset>
            <legend><h2>3. 상태 업데이트 패널</h2></legend>
            {this.props.job} 업무를 하고 있어요. <br/>
            {_datadog_user[this.props.datadog_user].label}
        </fieldset>

      );
    }
  }
  export default Content;