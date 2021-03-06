
import { faChartPie, faHandHoldingUsd, faSignOutAlt, faSimCard, faTimes, faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Badge, Button, Dropdown, Image, Nav, Navbar } from '@themesberg/react-bootstrap';
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import SimpleBar from 'simplebar-react';
import ProfilePicture from "../assets/img/team/profile-picture-3.jpg";
import ReactHero from "../assets/img/technologies/react-hero-logo.svg";
import { Routes } from "../routes";
import logo from '../assets/logo1.png';
import { faBarcode } from "@fortawesome/free-solid-svg-icons";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import { faBlogger } from "@fortawesome/free-brands-svg-icons";
import { faJediOrder } from "@fortawesome/free-brands-svg-icons";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

export default (props = {}) => {
  const location = useLocation();
  const { pathname } = location;
  const [show, setShow] = useState(false);
  const showClass = show ? "show" : "";
  const user = JSON.parse(localStorage.getItem("user"));

  const onCollapse = () => setShow(!show);

  const NavItem = (props) => {
    const { title, link, external, target, icon, image, badgeText, badgeBg = "secondary", badgeColor = "primary" } = props;
    const classNames = badgeText ? "d-flex justify-content-start align-items-center justify-content-between" : "";
    const navItemClassName = link === pathname ? "active" : "";
    const linkProps = external ? { href: link } : { as: Link, to: link };

    return (
      <Nav.Item className={navItemClassName} onClick={() => setShow(false)}>
        <Nav.Link {...linkProps} target={target} className={classNames}>
          <span>
            {icon ? <span className="sidebar-icon"><FontAwesomeIcon icon={icon} /> </span> : null}
            {image ? <Image src={image} width={20} height={20} className="sidebar-icon svg-icon" /> : null}

            <span className="sidebar-text">{title}</span>
          </span>
          {badgeText ? (
            <Badge pill bg={badgeBg} text={badgeColor} className="badge-md notification-count ms-2">{badgeText}</Badge>
          ) : null}
        </Nav.Link>
      </Nav.Item>
    );
  };

  return (
    <>
      <Navbar expand={false} collapseOnSelect variant="dark" className="navbar-theme-primary px-4 d-md-none">
        <Navbar.Brand className="me-lg-5" as={Link} to={Routes.DashboardOverview.path}>
          <Image src={ReactHero} className="navbar-brand-light" />
        </Navbar.Brand>
        <Navbar.Toggle as={Button} aria-controls="main-navbar" onClick={onCollapse}>
          <span className="navbar-toggler-icon" />
        </Navbar.Toggle>
      </Navbar>
      <CSSTransition timeout={300} in={show} classNames="sidebar-transition">
        <SimpleBar className={`collapse ${showClass} sidebar d-md-block bg-primary text-white`}>
          <div className="sidebar-inner px-4 pt-3">
            <div className="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
              <div className="d-flex align-items-center">
                <div className="user-avatar lg-avatar me-4">
                  <Image src={ProfilePicture} className="card-img-top rounded-circle border-white" />
                </div>
                <div className="d-block">
                  <h6>Hi, Jane</h6>
                  <Button as={Link} variant="secondary" size="xs" to={Routes.Signin.path} className="text-dark">
                    <FontAwesomeIcon icon={faSignOutAlt} className="me-2" /> Sign Out
                  </Button>
                </div>
              </div>
              <Nav.Link className="collapse-close d-md-none" onClick={onCollapse}>
                <FontAwesomeIcon icon={faTimes} />
              </Nav.Link>
            </div>
            <Nav className="flex-column pt-3 pt-md-0">
              {/* <NavItem title="Taekwondo" link={Routes} image={ReactHero} /> */}

              <NavItem title="T???ng quan" link={Routes.DashboardOverview.path} icon={faChartPie} />
              <NavItem title="Th???ng k?? c???a t??i" link={Routes.DashboardUserOverview.path} icon={faBarcode} />

              {(user.roles === "superadmin") && <NavItem title="C???p quy???n ng?????i d??ng" icon={faUserAstronaut} link={Routes.User.path} />}
              {(user.roles === "admin" || user.roles === "superadmin") && <NavItem title="Thay ?????i c?????c ph??" icon={faUserAstronaut} link={Routes.Fee.path} />}

              {(user.roles === "admin" || user.roles === "superadmin") && <NavItem title="B??i vi???t" link={Routes.Blog.path} icon={faBlog} />}
              <NavItem title="Tin t???c" icon={faBlogger} link={Routes.BlogUser.path} />

              <Dropdown.Divider className="my-3 border-indigo" />

              {(user.roles === "admin" || user.roles === "superadmin") && <NavItem title="????n h??ng" icon={faJediOrder} link={Routes.Order.path} />}

              {(user.roles === "admin" || user.roles === "superadmin") && <NavItem title="Ph???n h???i ng?????i d??ng" icon={faFacebookMessenger} link={Routes.FeedbackUser.path} />}

              <NavItem title="????n h??ng c???a t??i" icon={faUserCircle} link={Routes.OrderUser.path} />
              <NavItem title="Ph???n h???i" icon={faSimCard} link={Routes.Feedback.path} />

            </Nav>
            <div style={{display:'flex',justifyContent:'center',marginTop:150}} >
              <img src={logo} width={'50%'} />
            </div>
          </div>
        </SimpleBar>

      </CSSTransition>
    </>
  );
};
