import React from 'react' // import react module
import Screen from './screen'; //import our screen component from this directory
import Button from './button'; //import our button component from this directory

//create a class which extends react compoenent

class Frame extends React.Component {

    //Render function to create component ot be rendered on the dom
    //this method must return a single parent element as you can see here
    //the component is wrapped around () to make it a single expression
    constructor (){
        super();
        //set our default state
        this.state = {
            question: '',
            answer: ''
        }

        //bind our handleClick method (sets 'this' explicitly to refer to this component)
        //we did this because 'this' would refer to the source of the click events
        this.handleClick = this.handleClick.bind(this)
    }
    render() {
        return (
            <div className="frame">
                <div className="calculator-title">
                    R_N Calculator
                </div>
                <Screen question={this.state.question} answer={this.state.answer}/>
                <div className="button-row">
                    <Button label={'1'} handleClick={this.handleClick} type='input' />
                    <Button label={'2'} handleClick={this.handleClick} type='input' />
                    <Button label={'3'} handleClick={this.handleClick} type='input' />
                    <Button label={'4'} handleClick={this.handleClick} type='input' />
                    <Button label={'-'} handleClick={this.handleClick} type='input' />
                    <Button label={'+'} handleClick={this.handleClick} type='input' />
            </div>
                <div className="button-row">
                    <Button label={'5'} handleClick={this.handleClick} type='input' />
                    <Button label={'6'} handleClick={this.handleClick} type='input' />
                    <Button label={'7'} handleClick={this.handleClick} type='input' />
                    <Button label={'8'} handleClick={this.handleClick} type='input' />
                    <Button label={'*'} handleClick={this.handleClick} type='input' />
                    <Button label={'/'} handleClick={this.handleClick} type='input' />
                </div>
            </div>
        );
    }


    //our method to handle all click events from our buttons
    handleClick(event){
        const value = event.target.value; //get the value from the target element (button)
        switch(value){
            case '=': { // if it's an equal sign, use the eval module to evaluate the question
                //conver the answer (in number) to string
                const answer = eval(this.state.question).toString();
                //update answer in our state
                this.setState({answer});
                break;
            }

            case 'Cls': {
                //if it's the Cls sign, just clean our question and answer in the state
                this.setState({ question: '', answer: ''});
                break;
            }
            default: {
                //for every other command, update th eanswer in the state
                this.setState({ question: this.state.question += value})
                break;
            }
        }
    }
}

//export our frame component. to be used in our client/index.js file
export default Frame;