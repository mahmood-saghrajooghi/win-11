import React, { useMemo } from 'react';
import { Breadcrumbs, BreadcrumbProps, Icon } from "@blueprintjs/core";
import AraibcFlag from '../../assets/temp/kuwait.png'
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const pageNames = useMemo<Record<string, string>>(() => ({
    '/home': "Home",
    '/orders': "Orders",
    '/address': "Address",
    '/customers': "Customers",
    '/products': "Products",
  }), [])
  const BREADCRUMBS: BreadcrumbProps[] = [
    { href: "/", text: "Home" },
    { href: location.pathname, text: pageNames[location.pathname] },
  ];
  const breadcrumbRenderer = ({ text, href, ...restProps }: BreadcrumbProps) => {
    // customize rendering of last breadcrumb
    return <NavLink to={href ?? "/"}>{text}</NavLink>;
  }
  const renderCurrentBreadCrumb = ({ text, ...restProps }: BreadcrumbProps) => {
    // customize rendering of last breadcrumb
    return <div>{text}</div>;
  }
  return (
    <div className="navbar-container">
      <div className="breadcrubm-wrapper">
        <Breadcrumbs
          breadcrumbRenderer={breadcrumbRenderer}
          currentBreadcrumbRenderer={renderCurrentBreadCrumb}
          items={BREADCRUMBS}
        />
      </div>
      <button className="lang-btn ml-auto"><img src={AraibcFlag} alt="" /> Arabic</button>
    </div>
  )
}

export default Navbar;