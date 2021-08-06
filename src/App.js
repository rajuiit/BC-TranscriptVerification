import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import web3 from "./web3.js";
import "./App.css";
import Navhead from "./components/navbar";
import Forms from "./components/form";
import Getcert from "./components/getcert";
import certcontract from "./config.js";
import Certificate from "./components/certificate";

class App extends Component {
  state = {
    account: "",
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

    gpa: "",
    txh: "",
    id: "",
    output: [],
    tofound: false
  };
  componentDidMount() {
    console.log('mounted')
    this.loadBlockchainData();
  }

  async loadBlockchainData() {
    //added line 30
    await window.ethereum.enable()
    const accounts = await web3.eth.getAccounts();
    //console.log(accounts);
    web3.eth.defaultAccount = accounts[0];
    //console.log(certcontract);
    console.log(accounts);
    console.log("acc", accounts[0]);
    this.setState({ account: accounts[0] });
  }

  add = data => {
    
    certcontract.methods.addcert(data.uniname, data.sname, data.dept, data.course, data.session, data.registration,data.sid, data.credit, data.cgpa, data.sem,data.ccode, data.ctitle, data.chour,data.lgrade,data.gpoint, data.ccode1, data.ctitle1, data.chour1,data.lgrade1,data.gpoint1, data.ccode2, data.ctitle2, data.chour2,data.lgrade2,data.gpoint2,data.gpa).send(
      {
        from: this.state.account,
        gas: 500000
      },
      (error, result) => {
        if (error) console.log("error " + error);
        else {
          this.setState({ uniname: data.uniname});
          this.setState({ sname: data.sname});
          this.setState({ dept: data.dept});
          this.setState({ course: data.course});
          this.setState({ session: data.session});
          this.setState({ registration: data.registration });
          this.setState({ sid: data.sid });
          this.setState({ credit: data.credit});
          this.setState({ cgpa: data.cgpa });
          this.setState({ sem: data.sem });
          this.setState({ ccode: data.ccode });
          this.setState({ ctitle: data.ctitle });
          this.setState({ chour: data.chour });
          this.setState({ lgrade: data.lgrade });
          this.setState({ gpoint: data.gpoint });

          this.setState({ ccode1: data.ccode1 });
          this.setState({ ctitle1: data.ctitle1 });
          this.setState({ chour1: data.chour1 });
          this.setState({ lgrade1: data.lgrade1 });
          this.setState({ gpoint1: data.gpoint1 });

          this.setState({ ccode2: data.ccode2 });
          this.setState({ ctitle2: data.ctitle2 });
          this.setState({ chour2: data.chour2 });
          this.setState({ lgrade2: data.lgrade2 });
          this.setState({ gpoint2: data.gpoint2 });

          this.setState({ gpa: data.gpa });
          this.setState({ txh: result });
          console.log(result);
          certcontract.methods.getid().call({from: this.state.account }, function(error, result){
            console.log(result)
          });
          certcontract.methods.getid().call({ from: this.state.account }, (error, result) => {
              this.setState({ id: result });
              if (!error) console.log(result);
              else console.log(error);
            }); 
        }
      }
    );
  };
  get = data => {
    console.log(data.id);
    certcontract.methods.getcert(data.id).call({ from: this.state.account }, (error, result) => {
        if (!error) {
          console.log(result);
          const v = Object.values(result);
          this.setState({ output: v });
          this.setState({ tofound: true });
          //this.history.pushState("certfound");
          console.log(this.state.output);
        } else alert("Certificate not found");
      });
  };
  render() {
    return (
      <div className="App">
        <Router>
          <Navhead />
          <Route
            path="/"
            exact
            render={() => <Forms addcertificate={this.add} />}
          />
          <Route
            path="/verify"
            render={() => (
              <Getcert
                getcertificate={this.get}
                yes={this.state.tofound}
                details={this.state.output}
              />
            )}
          />
          <Route
            path="/view"
            component={() => (
              <Certificate
                uniname={this.state.uniname}
                sname={this.state.sname}
                dept= {this.state.dept}
                course={this.state.course}
                session={this.state.session}
                registration= {this.state.registration}
                sid={this.state.sid}
                credit={this.state.credit}
                cgpa= {this.state.cgpa}
                ccode ={this.state.ccode}
                ctitle={this.state.ctitle}
                chour={this.state.ctitle}
                lgrade ={this.state.lgrade}
                gpoint ={this.state.gpoint}

                ccode1 ={this.state.ccode1}
                ctitle1={this.state.ctitle1}
                chour1={this.state.ctitle1}
                lgrade1 ={this.state.lgrade1}
                gpoint1 ={this.state.gpoint1}

                ccode2 ={this.state.ccode2}
                ctitle2={this.state.ctitle2}
                chour2={this.state.ctitle2}
                lgrade2 ={this.state.lgrade2}
                gpoint2 ={this.state.gpoint2}

                gpa ={this.state.gpa}
                txh={this.state.txh}
                id={this.state.id}
              />
            )}
          />
     
          
        </Router>
      </div>
    );
  }
}

export default App;
