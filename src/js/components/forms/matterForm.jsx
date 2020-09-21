import React, {Component} from 'react'

class Form extends Component {
    constructor(){
        super(props)

        this.state = {
            username: '',
            last_name:'',
            dob:'',
            telephone:'',
            celphone:''
        }
    }
    handleChange = (event) =>{
        this.set this.state({
            username: event.target.value
        })
    }
    render(){
        return();
    }
}