import  { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaRegChartBar,
    FaFileContract,
    FaChartArea,
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import './sidebar.css'
import logo from './taiyoai.png'



const Sidebar = ({children}) => {


    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/dash",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/crud",
            name:"Dashboard",
            icon:<FaFileContract/>
        },
        {
            path:"/linegraph",
            name:"Line Graph",
            icon:<FaChartArea/>
        },
        {
            path:"/maps",
            name:"maps",
            icon:<FaRegChartBar/>
        },
    ]
    return (
        <div className="containe">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <img style={{display: isOpen ? "block" : "none",width:"100px",height:"70px"}} className="logo" src={logo}/>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;