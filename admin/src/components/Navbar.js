
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { faBell, faCog, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Dropdown, Image, ListGroup, Nav, Navbar, Row } from '@themesberg/react-bootstrap';
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { SERVER } from "../apis/API";
import Profile3 from "../assets/img/team/profile-picture-3.jpg";
import NOTIFICATIONS_DATA from "../data/notifications";
import { Routes } from "../routes";



export default (props) => {
  const [notifications, setNotifications] = useState(NOTIFICATIONS_DATA);
  const areNotificationsRead = notifications.reduce((acc, notif) => acc && notif.read, true);
  let user = JSON.parse(localStorage.getItem("user"));
  const markNotificationsAsRead = () => {
    setTimeout(() => {
      setNotifications(notifications.map(n => ({ ...n, read: true })));
    }, 300);
  };
  const history = useHistory();

  const Notification = (props) => {
    const { link, sender, image, time, message, read = false } = props;
    const readClassName = read ? "" : "text-danger";

    return (
      <ListGroup.Item action href={link} className="border-bottom border-light">
        <Row className="align-items-center">
          <Col className="col-auto">
            <Image src={image} className="user-avatar lg-avatar rounded-circle" />
          </Col>
          <Col className="ps-0 ms--2">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h4 className="h6 mb-0 text-small">{sender}</h4>
              </div>
              <div className="text-end">
                <small className={readClassName}>{time}</small>
              </div>
            </div>
            <p className="font-small mt-1 mb-0">{message}</p>
          </Col>
        </Row>
      </ListGroup.Item>
    );
  };
  return (
    <Navbar variant="dark" expanded className="ps-0 pe-2 pb-0">
      <Container fluid className="px-0">
        <div className="d-flex justify-content-between w-100">
          <div className="d-flex align-items-center">
            {/* <Form className="navbar-search">
              <Form.Group id="topbarSearch">
                <InputGroup className="input-group-merge search-bar">
                  <InputGroup.Text><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                  <Form.Control type="text" placeholder="Search" />
                </InputGroup>
              </Form.Group>
            </Form> */}
          </div>
          <Nav className="align-items-center">
            

            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle as={Nav.Link} className="pt-1 px-0">
                <div className="media d-flex align-items-center">
                  {user?.photoURL ? <Image src={`${SERVER.URL_IMAGE}${user.photoURL}`} className="user-avatar md-avatar rounded-circle" />
                    : <Image src={Profile3} className="user-avatar md-avatar rounded-circle" />
                  }
                  <div className="media-body ms-2 text-dark align-items-center d-none d-lg-block">
                    <span className="mb-0 font-small fw-bold">{user?.fullName}</span>
                  </div>
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu className="user-dropdown dropdown-menu-right mt-2">
                <Dropdown.Item className="fw-bold">
                  <div onClick={() => {
                    history.push(Routes.Settings.path)
                  }}>
                    <FontAwesomeIcon icon={faUserCircle} className="me-2" /> Cá nhân
                  </div>
                </Dropdown.Item>
                <Dropdown.Item className="fw-bold">
                  <div onClick={() => {
                    history.push(Routes.ChangePassword.path)
                  }} >
                    <FontAwesomeIcon icon={faCog} className="me-2" /> Thay đổi mật khẩu
                  </div>
                </Dropdown.Item>
                <Dropdown.Divider />

                <Dropdown.Item className="fw-bold" >
                  <div onClick={() => {
                    localStorage.clear();
                    history.push(Routes.Signin.path)
                  }} >
                    <FontAwesomeIcon icon={faSignOutAlt} className="text-danger me-2" /> Đăng xuất
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
};
