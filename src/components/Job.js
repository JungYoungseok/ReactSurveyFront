import React, { Component } from "react";

class Job extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      job: "FrontDev"
    };
    this.handleJobChange = this.handleJobChange.bind(this);
  }
  handleJobChange(event) {
    this.setState({
      job: event.target.value
    });
  }

  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value
    });
  }

  formSubmit(event) {
    event.preventDefault();
    console.log(this.state.selectedOption)
  }

  render() {
    return (
      <fieldset name="job">
            <legend>
              <h2>2.어떤 업무를 하시나요?</h2>
            </legend>

            <label>
            <input
              type="radio"
              value="FrontDev"
              name="job"
              checked={this.state.job === "FrontDev"}
              onChange={this.handleJobChange}
              onClick={function(e){
                this.props.onChangePage(e.target.value);
              }.bind(this)}                
            />
            프론트 개발
          </label>
          <label>
              <input
                type="radio"
                value="BackendDev"
                name="job"
                checked={this.state.job === "BackendDev"}
                onChange={this.handleJobChange}          
                onClick={function(e){
                  this.props.onChangePage(e.target.value);
                }.bind(this)}                
              />
              백엔드 개발
            </label>
            <label>
              <input
                type="radio"
                value="DevOps"
                name="job"
                checked={this.state.job === "DevOps"}
                onClick={function(e){
                  this.props.onChangePage(e.target.value);
                }.bind(this)}                

                onChange={this.handleJobChange}
              />
              데브옵스
            </label>
            <label>
              <input
                type="radio"
                value="Others"
                name="job"
                checked={this.state.job === "Others"}
                onClick={function(e){
                  this.props.onChangePage(e.target.value);
                }.bind(this)}                

                onChange={this.handleJobChange}
              />
              Others
            </label>            
          </fieldset>
    );
  }
}

export default Job;