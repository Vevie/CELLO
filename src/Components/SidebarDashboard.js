import React from 'react';
import {faHouse, FaSignOutAlt} from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {

    return (
             <div className="h-100 d-flex flex-column p-5 align-items-center justify-content-between sidebar">

                <div>
                    <Link to="/" className=" text-white text-decoration-none">
                        <h3 className="mb-3 fw-bold fs-2">CELLO</h3>
                    </Link>


                </div>
                <div>
                    <Link to="/" className="text-decoration-none custom-color">
                    <div className="d-flex align-items-center py-1 px-4 rounded bg-white">
                        <FaSignOutAlt />
                    <h6 className="ps-2 pt-2">Logout</h6>
                    </div>
                    </Link>
                </div>
            </div>
    ); 
}

export default Sidebar;