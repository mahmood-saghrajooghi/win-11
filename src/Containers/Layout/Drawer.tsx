import { Classes, Menu, MenuDivider, MenuItem, PopoverPosition } from "@blueprintjs/core";
import { Popover2 } from "@blueprintjs/popover2";
import React from 'react';
import { BiCube } from 'react-icons/bi';
import { FaAddressCard, FaCog, FaHome, FaList, FaUserAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import ProfileImage from '../../assets/temp/account.png';


const Drawer: React.FC = () => {
  return (
    <div className="drawer-container">
      <Popover2 position={PopoverPosition.RIGHT_BOTTOM} content={
        <Menu className={Classes.ELEVATION_1}>
          <MenuDivider title="Account" />
          <MenuItem icon="user" text={<NavLink to="/account">Preferences</NavLink>} label="" />
          <MenuItem icon="log-out" text={<NavLink to="/logout">Logout</NavLink>} label="" />
        </Menu>
      }>
        <div className="account-container active">
          <div className="image-container">
            <img src={ProfileImage} alt="" />
          </div>
        </div>
      </Popover2>
      {/* <div className="account-link"> Logout </div> */}
      <ul className="drawer-list">
        <li className="drawer-list-item active">

          <NavLink
            exact
            to="/"
            className="drawer-link">
            <div className="drawer-link-content">
              <div className="drawer-icon-container">
                <FaHome className="drawer-item-icon" />
              </div>
              <div className="title">Home</div>
            </div>
          </NavLink>
        </li>
        <li className="drawer-list-item">
          <NavLink
            exact
            to="/products"
            className="drawer-link">
            <div className="drawer-link-content">
              <BiCube className="drawer-item-icon" />
              <div className="title">Products</div>
            </div>
          </NavLink>
        </li>
        <li className="drawer-list-item">
          <NavLink
            exact
            to="/orders"
            className="drawer-link">
            <div className="drawer-link-content">
              <FaList className="drawer-item-icon" />
              <div className="title">Orders</div>
            </div>
          </NavLink>
        </li>
        <li className="drawer-list-item">
          <NavLink
            exact
            to="/address"
            className="drawer-link">
            <div className="drawer-link-content">
              <FaAddressCard className="drawer-item-icon" />
              <div className="title">Address</div>
            </div>
          </NavLink>
        </li>
        <li className="drawer-list-item">
          <NavLink
            exact
            to="/customers"
            className="drawer-link">
            <div className="drawer-link-content">
              <FaUserAlt className="drawer-item-icon" />
              <div className="title">Customers</div>
            </div>
          </NavLink>
        </li>
        <li className="drawer-list-item mt-md-auto mb-0">
          <NavLink
            exact
            to="/settings"
            className="drawer-link">
            <div className="drawer-link-content">
              <FaCog className="drawer-item-icon" />
              <div className="title">Settings</div>
            </div>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Drawer;