import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "../certstyle.css";
import printJs from "print-js";
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
class Certificate extends Component {
  state = {};
  onclickprint = event => {
    event.preventDefault();
    window.print();
    //printJs("printcertificate", "html");
  };
  render() {
    return (
      <Container>
      <div>
        <div id="printcertificate">
          <h2 align="center" style={{ marginBottom: "30px", marginTop: "30px", background: "rgba(255,255,255,0.5)" }}>Academic Transcript</h2>
          <div>
          Name of the University: <span>{this.props.uniname}</span>
          </div>

          <div>
          Name of Student: <span>{this.props.sname} </span>
          </div>

          <div>
          Name of Department: <span>{this.props.dept}</span>
          </div>

          <div>
          Name of Program: <span>{this.props.course}</span>
          </div>

          <div>
          Admission Session: <span>{this.props.session}</span>
          </div>

          <div>
          Registration No. : <span>{this.props.registration}</span>
          </div>

          <div>
          Student ID: <span>{this.props.sid}</span>
          </div>

          <div>
          Total Credit Hours Studied: <span>{this.props.credit}</span>
          </div>

          <div>
          Secured Final CGPA: <span>{this.props.cgpa}</span>
          </div>
          <div>
          Transcript Issue No. / Verification Code: <span>{this.props.txh}</span>
          </div>
          {/* <div id="id">
            <span>{this.props.id}</span>
          </div> */}
          
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th width="15%">Name and Year of the Examination</th>
                  <th width="5%">Course Code</th>
                  <th width="20%">Course Title</th>
                  <th width="5%">Credit Hour</th>
                  <th width="5%">Letter Grade</th>
                  <th width="5%">Grade Point</th>
                  <th width="5%">GPA</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowspan="5">Semester-1 B.Sc.(Hons) in IOT, Exam 2020</td>
                  <td>{this.props.ccode}</td>
                  <td>{this.props.ctitle}</td>
                  <td>{this.props.chour}</td>
                  <td>{this.props.lgrade}</td>
                  <td>{this.props.gpoint}</td>
                  <td rowspan="5">{this.props.gpa}</td>
              
                </tr>
                <tr>
                
                <td>{this.props.ccode1}</td>
                <td>{this.props.ctitle1}</td>
                <td>{this.props.chour1}</td>
                <td>{this.props.lgrade1}</td>
                <td>{this.props.gpoint1}</td>
                 
                </tr>
                <tr>
                
                <td>{this.props.ccode2}</td>
                <td>{this.props.ctitle2}</td>
                <td>{this.props.chour2}</td>
                <td>{this.props.lgrade2}</td>
                <td>{this.props.gpoint2}</td>
                  
                </tr>
              </tbody>
            </Table>
            
        </div>

             <Button
                className="btn"
                onClick={this.onclickprint}
                variant="success"
                type="submit"
              >
                Print
            </Button>
        
      </div>
      </Container>
    );
  }
}

export default Certificate;
