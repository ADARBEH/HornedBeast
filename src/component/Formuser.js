import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';


class Formuser extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    
    render(){
        return(
        <Form >
        <Form.Group className="mb-3">
        <Form.Label htmlFor="typeOfhorns">What is number of horns ? </Form.Label>
        <Form.Select id="typeOfhorns" style={{ margin: "auto", width: "35%"}}>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="100">One hundred</option>
        </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit" style={{ marginBottom: "rem"}} onClick = {this.props.handlesearch }>
        Submit
        </Button>
        </Form>
        )
    }
}

export default Formuser;