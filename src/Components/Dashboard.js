import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Sidebar from './dashboard/SidebarDashboard';
import Content from './dashboard/DashboardContent';
import AdoptionRequest from './adopt-pet/AdoptionRequest';
import { BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom';



const Dashboard = () => {

  const history = useHistory();

  const handleLogout = async () => {
      history.push("/");
  };

    return (

      <Router>
        <div className="vh-100 overflow-x-hidden">
          <Row className="h-100">

          <Col sm={12} md={10} className="order-md-2">
              <Switch>
                <Route path="/dashboard" exact component={Content} />
                <Route path="/dashboard/adoption-request" exact component={AdoptionRequest} />
              </Switch>
            </Col>

            <Col sm={2} md={2} className="order-md-1">
            <Sidebar handleLogout={handleLogout} />
            </Col>


          </Row>
        </div>
      </Router>
      
    );
}

export default Dashboard;