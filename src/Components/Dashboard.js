import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Sidebar from './SidebarDashboard';
import Content from './DashboardContent';


const Dashboard = () => {

    return (
      <div className="vh-100">
            <Row className="h-100">
                <Col sm={2}>
                <Sidebar />
                </Col>
                 
                <Col sm={10}>
                  <Content />
                </Col>
            </Row>
            
        
      </div>
    ); 
}

export default Dashboard;