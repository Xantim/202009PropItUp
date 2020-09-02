import React, { Component } from 'react';

class PersonCard extends Component{
    render(){
        return(
            
                <fieldset>
                <div>
                    <h1>My name is { this.props.firstName } { this.props.lastName }</h1>
                    <h1>My age is { this.props.age }</h1>
                    <h1>My hair color is { this.props.hairColor}</h1>
                </div>
                </fieldset>

        )
    }
}

export default PersonCard;
