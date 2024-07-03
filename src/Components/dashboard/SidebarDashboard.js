import React from 'react';
import { Button } from "react-bootstrap";
import { FaSignOutAlt} from "react-icons/fa";
import { Link } from "react-router-dom";


const Sidebar = ({ handleLogout }) => {


    return (
            <div className="d-flex flex-column h-100 py-5 align-items-center justify-content-between sidebar">
              
                <div className="mt-3">
                    <h3 className="mb-3 text-white fw-bold fs-2" onClick={handleLogout}>CELLO</h3>


                    <div className="pt-5">
                        <Link to="/dashboard" className="text-white text-decoration-none " >
                            <h6 className="p-3 rounded-3 text-center sidebar-item-bg mb-4">Dashboard</h6>
                        </Link>

                        <Link  to="/dashboard/adoption-request" className="text-white text-decoration-none">
                            <h6 className="p-3 rounded-3 text-center sidebar-item-bg">Applicants</h6>
                        </Link>
                        
                    </div>

                </div>


                <div className="mb-3">
                    <Button variant="light" onClick={handleLogout}><FaSignOutAlt  className="me-1 custom-color"/>Logout</Button>
                </div>
            
            </div>
    
    ); 
}

export default Sidebar;



