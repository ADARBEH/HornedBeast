import React from "react";
import Form from 'react-bootstrap/Form'


class Formuser extends React.Component{
    
    
    render(){
        return(
        <Form >
        <Form.Group className="mb-3">
        <Form.Label htmlFor="typeOfhorns">What is number of horns ? </Form.Label>
        <Form.Select id="typeOfhorns" onChange={(e) => this.props.handlesearch(e)} style={{ margin: "auto", width: "35%"}}>
            <option value="">ALL</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="100">One hundred</option>
        </Form.Select>
        </Form.Group>
        </Form>
        )
    }
}

export default Formuser;