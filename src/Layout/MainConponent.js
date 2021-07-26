import React from 'react';
import Header from '../components/Header/index';
import Home from '../modules/Menu1/index'
import About from '../modules/Menu2/index';
import Trades from '../modules/Menu3/index';
import Schemes from '../modules/Menu4/index';
import Pvt from '../modules/Menu5/SubMenu1/index';
import Gvt from '../modules/Menu5/SubMenu2/index';
import ContactUs from '../modules/Menu6/index';
import StudentLogin from '../modules/Menu7/index';
import EmployeeLogin from '../modules/Menu8/index';
import Footer from '../components/Footer/index';
import './layout.css';
import { Route, Switch, Redirect,withRouter } from 'react-router-dom';


function Main (){
    return (
        <React.Fragment>
            <div className="d-flex flex-column min-vh-100">
        <Header />
        <Switch>
	    <Route path="/home" component={Home} />        
	    <Route path="/about" component={About} />
        <Route path="/trades" component={Trades} />
        <Route path="/schemes" component={Schemes} />
        <Route path="/pvt" component={Pvt} />
        <Route path="/gvt" component={Gvt} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/studentLogin" component={StudentLogin} />
        <Route path="/employeeLogin" component={EmployeeLogin} />
        <Route path="/" component={Home}></Route> 
        <Redirect to="/home" />  
        </Switch>
        <div className="mt-auto ">
        <Footer />  
        </div>
        </div>         
        </React.Fragment>
    )
};

export default withRouter(Main);
