import React, { Component } from 'react';
import {connect} from 'react-redux';
class PostForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const message = this.getMessage.value;
        const data = {
            id: new Date(),
            title,
            message
        }
        this.props.dispatch({//passing in the data object with a type of ‘ADD_POST’.
            type: 'ADD_POST',data
        });
        this.getTitle.value = '';
        this.getMessage.value = '';
        console.log(data); // dispatch an action to send this data to reducer via connect() to tell reducer all sorts of events happening
    }
    //connect() return a function which takes in your current component as an argument and returns a new component with dispatch method as it’s prop.
              //it gives access to state  of store object using mapstatetoprops  
    render() {
        return (
            <div>
                <h1>Create Post</h1>
                <form onSubmit={this.handleSubmit}>
                    <input required type="text" ref={(input) => this.getTitle = input} placeholder="Enter Post Title" /><br /><br />
                    <textarea required rows="5" ref={(input) => this.getMessage = input} cols="28"
                        placeholder="Enter Post" />
                    <br /><br />
                    <button>Post</button>
                </form>
            </div>
        );
    }
}


export default connect() (PostForm);
//So in here the form element now accepts an onSubmit event.
// Whenever this event takes place the handleSubmit function will execute.
//The handleSubmit function takes one argument which is the event. 
//Calling e.preventDefault() will prevent the page from refreshing. 
//Next we grab the value of the title and the message from the inputs using refs and then put them inside an object called data.
// We also have an id property whose value is set to whatever new Date() returns.
// We will use this id property to perform update and delete operations.
