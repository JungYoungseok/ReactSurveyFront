import React, { Component } from 'react';



class Nickname extends Component{

    render(){
      console.log('Nickname render');
    
      return (
        <fieldset>
            <legend>
            <h2>4.닉네임</h2>
            </legend>
            <form onSubmit={this.submit}>
          
        </form>
            <input name="nickname_box" defaultValue={this.props.nickname} onChange={()=>{}} /> 
            <button type="submit" >설문 제출</button>            
        </fieldset>
            
      );

      }

}
  export default Nickname;