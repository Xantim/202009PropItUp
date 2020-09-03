import React, { Component } from 'react';

class PersonCard extends Component{
    constructor(props) {  ///pure js stuff
        super(props);
        this.state = {
            age: this.props.age
        };
    }
    
    render(){ //this is where the html stuff goes

        //props doesn't change, state changes
        return(            
                <fieldset>
                <div> 
                    <h1>My name is { this.props.firstName } { this.props.lastName }</h1> 
                    <h1>My age is { this.state.age }</h1>
                    <h1>My hair color is { this.props.hairColor}</h1>

                    <button onClick={ () => { this.setState({ age: this.state.age +1 }) }}>Increment Age</button>

                </div>
                </fieldset>

        )
    }
}

export default PersonCard;

