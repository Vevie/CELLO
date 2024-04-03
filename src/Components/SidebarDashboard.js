import React from 'react';
import { Button } from "react-bootstrap";
import { FaSignOutAlt} from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {

    return (
             <div className="d-flex flex-column h-100 p-5 align-items-center justify-content-between sidebar">
              
                <div className="mt-3">
                    <Link to="/" className=" text-white text-decoration-none">
                        <h3 className="mb-3 fw-bold fs-2">CELLO</h3>
                    </Link>
                </div>
                <div className="mb-3">
                    <Link to="/" className="text-decoration-none custom-color">
                    <Button variant="light"><FaSignOutAlt  className="me-1"/>Logout</Button>
                    </Link>
                </div>
            
            </div>
    
    ); 
}

export default Sidebar;