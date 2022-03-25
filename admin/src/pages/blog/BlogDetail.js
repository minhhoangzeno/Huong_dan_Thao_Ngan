import { Button, Container, Form, Row } from '@themesberg/react-bootstrap';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { SERVER } from '../../apis/API';

export default () => {
    let history = useHistory()
    let location = useLocation();
    let blog = location.state;
    return (
        <Container>
            <Row>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>
                            {blog.title}
                        </Form.Label>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>
                            {blog.metaDescription}
                        </Form.Label>
                    </Form.Group>
                    <div dangerouslySetInnerHTML={{ __html: blog.content }} >

                    </div>

                    <Form.Group className="mt-4" >
                        <div className="d-xl-flex align-items-center">
                            <div className="user-avatar xl-avatar">
                                <img src={`${SERVER.URL_IMAGE}${blog.photoURL}`} alt="" />
                            </div>
                        </div>
                    </Form.Group>

                    <div style={{ marginTop: 20 }} >
                        Tác giả: {blog?.createdBy}
                    </div>
                    <Button variant="secondary" type="button" className="m-3"
                        onClick={() => history.goBack()}
                    >
                        Cancel
                    </Button>
                </Form>
            </Row>
        </Container>
    )
}