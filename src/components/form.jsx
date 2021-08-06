import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import b1 from "../b3.jpg";
class Forms extends Component {
  canBeSubmitted() {
    const {
    uniname,
    sname,
    dept,
    course,
    session,
    registration,
    sid,
    credit,
    cgpa,
    sem,
    ccode,
    ctitle,
    chour,
    lgrade,
    gpoint,
    ccode1,
    ctitle1,
    chour1,
    lgrade1,
    gpoint1,
    ccode2,
    ctitle2,
    chour2,
    lgrade2,
    gpoint2,
    gpa} = this.state;
    return (
      uniname.length > 0 &&
      sname.length > 0 &&
      dept.length > 0 &&
      course.length > 0 &&
      session.length > 0 &&
      registration.length > 0 &&
      sid.length > 0 &&
      credit.length > 0 &&
      cgpa.length > 0 &&
      sem.length > 0 &&
      ccode.length > 0 &&
      ctitle.length > 0 &&
      chour.length > 0 &&
      lgrade.length > 0 &&
      gpoint.length > 0 &&

      ccode1.length > 0 &&
      ctitle1.length > 0 &&
      chour1.length > 0 &&
      lgrade1.length > 0 &&
      gpoint1.length > 0 &&

      ccode2.length > 0 &&
      ctitle2.length > 0 &&
      chour2.length > 0 &&
      lgrade2.length > 0 &&
      gpoint2.length > 0 &&
      gpa.length > 0 

    );
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addcertificate = event => {
    event.preventDefault();
    this.props.addcertificate(this.state);
    //console.log(this);
  };

  state = {
    uniname: "",
    sname: "",
    dept: "",
    course: "",
    session: "",
    registration: "",
    sid: "",
    credit: "",
    cgpa: "",
    sem: "",
    ccode: "",
    ctitle: "",
    chour: "",
    lgrade: "",
    gpoint: "",

    ccode1: "",
    ctitle1: "",
    chour1: "",
    lgrade1: "",
    gpoint1: "",

    ccode2: "",
    ctitle2: "",
    chour2: "",
    lgrade2: "",
    gpoint2: "",

    gpa: ""
  };
  render() {
    const isEnabled = this.canBeSubmitted();
    return (
      <div>
        {/* <h1
          style={{
            fontFamily: "Montserrat",
            fontWeight: "bold",
            fontSize: "40px",
            color: "#0394fc"
          }}
          className="mb-5 pt-3"
        >
          Create Transcript on Blockchain
        </h1> */}
        <div
          style={{ marginBottom: "117px", marginTop: "30px", background: "rgba(255,255,255,0.5)" }}
        >
  
          <Container>
          <h2>Create Transcript on Blockchain</h2>
          <Form onSubmit={this.addcertificate}>
          <Row>
          <Col>
          <Jumbotron>
          
            <Form.Group>
              <Form.Control
                type="text"
                name="uniname"
                value={this.state.uniname}
                onChange={this.handleChange}
                placeholder="Name of the University:"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="sname"
                value={this.state.sname}
                onChange={this.handleChange}
                placeholder="Name of Student:"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="dept"
                value={this.state.dept}
                onChange={this.handleChange}
                placeholder="Name of Department:"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="course"
                value={this.state.course}
                onChange={this.handleChange}
                placeholder="Name of Program:"
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                type="text"
                name="session"
                value={this.state.session}
                onChange={this.handleChange}
                placeholder="Admission Session:"
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                type="text"
                name="registration"
                value={this.state.registration}
                onChange={this.handleChange}
                placeholder="Registration No.:"
              />
            </Form.Group>


            <Form.Group>
              <Form.Control
                type="text"
                name="sid"
                value={this.state.sid}
                onChange={this.handleChange}
                placeholder="Student ID:"
              />
            </Form.Group>


            <Form.Group>
              <Form.Control
                type="text"
                name="credit"
                value={this.state.credit}
                onChange={this.handleChange}
                placeholder="Total Credit Hours Studied:"
              />
            </Form.Group>


            <Form.Group>
              <Form.Control
                type="text"
                name="cgpa"
                value={this.state.cgpa}
                onChange={this.handleChange}
                placeholder="Secured Final CGPA:"
              />
            </Form.Group>
            <Form.Group>
                    <Form.Control
                      type="text"
                      name="sem"
                      value={this.state.sem}
                      onChange={this.handleChange}
                      placeholder="Name and
                      Year of the
                      Examination:"
                    />
                </Form.Group>
          </Jumbotron>

          <Jumbotron>
               <h2> Course Information-1</h2>
                <Form.Group>
                    <Form.Control
                      type="text"
                      name="ccode"
                      value={this.state.ccode}
                      onChange={this.handleChange}
                      placeholder="Course
                      Code:"
                    />
                </Form.Group>


                <Form.Group>
                    <Form.Control
                      type="text"
                      name="ctitle"
                      value={this.state.ctitle}
                      onChange={this.handleChange}
                      placeholder="Course Title:"
                    />
                </Form.Group>


                <Form.Group>
                    <Form.Control
                      type="text"
                      name="chour"
                      value={this.state.chour}
                      onChange={this.handleChange}
                      placeholder="Credit
                      Hour:"
                    />
                </Form.Group>


                <Form.Group>
                    <Form.Control
                      type="text"
                      name="lgrade"
                      value={this.state.lgrade}
                      onChange={this.handleChange}
                      placeholder="Letter
                      Grade:"
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Control
                      type="text"
                      name="gpoint"
                      value={this.state.gpoint}
                      onChange={this.handleChange}
                      placeholder="Grade
                      Point:"
                    />
                </Form.Group>
          </Jumbotron>      
          </Col>
            <Col>
              <Jumbotron>
               <h2> Course Information-2</h2>
                <Form.Group>
                    <Form.Control
                      type="text"
                      name="ccode1"
                      value={this.state.ccode1}
                      onChange={this.handleChange}
                      placeholder="Course
                      Code:"
                    />
                </Form.Group>


                <Form.Group>
                    <Form.Control
                      type="text"
                      name="ctitle1"
                      value={this.state.ctitle1}
                      onChange={this.handleChange}
                      placeholder="Course Title:"
                    />
                </Form.Group>


                <Form.Group>
                    <Form.Control
                      type="text"
                      name="chour1"
                      value={this.state.chour1}
                      onChange={this.handleChange}
                      placeholder="Credit
                      Hour:"
                    />
                </Form.Group>


                <Form.Group>
                    <Form.Control
                      type="text"
                      name="lgrade1"
                      value={this.state.lgrade1}
                      onChange={this.handleChange}
                      placeholder="Letter
                      Grade:"
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Control
                      type="text"
                      name="gpoint1"
                      value={this.state.gpoin1}
                      onChange={this.handleChange}
                      placeholder="Grade
                      Point:"
                    />
                </Form.Group>

                <h2> Course Information-3</h2>
                <Form.Group>
                    <Form.Control
                      type="text"
                      name="ccode2"
                      value={this.state.ccode2}
                      onChange={this.handleChange}
                      placeholder="Course
                      Code:"
                    />
                </Form.Group>


                <Form.Group>
                    <Form.Control
                      type="text"
                      name="ctitle2"
                      value={this.state.ctitle2}
                      onChange={this.handleChange}
                      placeholder="Course Title:"
                    />
                </Form.Group>


                <Form.Group>
                    <Form.Control
                      type="text"
                      name="chour2"
                      value={this.state.chour2}
                      onChange={this.handleChange}
                      placeholder="Credit
                      Hour:"
                    />
                </Form.Group>


                <Form.Group>
                    <Form.Control
                      type="text"
                      name="lgrade2"
                      value={this.state.lgrade2}
                      onChange={this.handleChange}
                      placeholder="Letter
                      Grade:"
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Control
                      type="text"
                      name="gpoint2"
                      value={this.state.gpoint2}
                      onChange={this.handleChange}
                      placeholder="Grade
                      Point:"
                    />
                </Form.Group>

              </Jumbotron>
              <Jumbotron>
              <Form.Group>
                    <Form.Control
                      type="text"
                      name="gpa"
                      value={this.state.gpa}
                      onChange={this.handleChange}
                      placeholder="GPA:"
                    />
                </Form.Group>

              </Jumbotron>
              <Button
              disabled={!isEnabled}
              className="mt-3"
              variant="primary"
              type="submit"
            >
              Create Transcript
            </Button>
            </Col>
          </Row>
            
          </Form>
          
          </Container>
        </div>
      </div>
    );
  }
}

export default Forms;
