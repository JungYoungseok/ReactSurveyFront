import React, { Component } from "react";

class DDMaturity extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      datadog_user: '0',
    }
    this.handleDatadogUserChange = this.handleDatadogUserChange.bind(this);
  }
  handleDatadogUserChange(event) {
    this.setState({
      datadog_user: event.target.value
    });
  }

  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value
    });
  }

  render() {
    return (
        <fieldset name="datadog_user">
        <legend>
          <h2>1.Datadog 사용 수준</h2>
        </legend>
        <label>
          <input
            type="radio"
            value="0"
            name="datadog_user"
            checked={this.state.datadog_user === "0"}
            onChange={this.handleDatadogUserChange}
            onClick={function(e){
                this.props.onChangePage(e.target.value);
              }.bind(this)}                
          />
          Datadog을 사용하고 있지 않아요
        </label>
        <label>
          <input
            type="radio"
            value="1"
            name="datadog_user"
            checked={this.state.datadog_user === "1"}
            onChange={this.handleDatadogUserChange}
            onClick={function(e){
                this.props.onChangePage(e.target.value);                
              }.bind(this)}                
          />
          RUM은 사용해본적 없지만 다른 제품은 사용중이에요
        </label>
        <label>
          <input
            type="radio"
            value="2"
            name="datadog_user"
            checked={this.state.datadog_user === "2"}
            onChange={this.handleDatadogUserChange}
            onClick={function(e){
                this.props.onChangePage(e.target.value);
              }.bind(this)}                
          />
          RUM+APM FullStack 분석에 사용중이에요
        </label>            
      </fieldset>

    );
  }
}

export default DDMaturity;