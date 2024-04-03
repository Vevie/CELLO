import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Sidebar from './SidebarDashboard';
import Content from './DashboardContent';
import EditPage from './EditPage';
import AddPage from './AddPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const Dashboard = () => {

    return (
      <div className="vh-100 overflow-x-hidden">
            <Row className="h-100">

                 
                <Col sm={12} md={10} className="order-md-2">

                <Router>
                  <Switch>
                    <Route path="/dashboard" exact component={Content} />
                    <Route path="/dashboard/add" component={AddPage} /> 
                    <Route path="/dashboard/edit/:userId" component={EditPage} />
                  </Switch>
                </Router>

                </Col>

                <Col sm={12} md={2} className="order-md-1">
                <Sidebar />
                </Col>
            </Row>
            
        
      </div>
    ); 
}

export default Dashboard;