import { Button, Card, Col, Container, Row } from '@themesberg/react-bootstrap';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { SERVER } from '../../apis/API';
import { getBlogThunk } from '../../redux/blogSlice';
import { Routes } from "../../routes";

export default () => {
    let history = useHistory();
    let blog = useSelector(state => state.blog.data);
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBlogThunk()) // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    let routerDetailBlog = (data) => {
        history.push({
            pathname: Routes.BlogDetail.path,
            state: data
        })
    }

    return (
        <Container>
            <Row>
                {blog && blog.map((blogItem, index) => {
                    return (
                        <BlogItem blog={blogItem} key={index}
                            routerDetailBlog={routerDetailBlog} />
                    )
                })}
            </Row>
        </Container>
    )
}

function BlogItem({ blog, routerDetailBlog }) {
    return (
        <Col>
            <Card style={{ width: '18rem' }} className="mt-4" >
                <Card.Img variant="top" src={`${SERVER.URL_IMAGE}${blog.photoURL}`} />
                <Card.Body>
                    <Card.Title className="custom-title" >{blog?.title}</Card.Title>
                    <Card.Text className="custom-description" >
                        {blog?.metaDescription}
                    </Card.Text>
                    <Card.Subtitle className="d-flex justify-content-between" >
                        <Button variant="primary" onClick={() => routerDetailBlog(blog)} >Chi tiết</Button>
                    </Card.Subtitle>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{blog?.createdBy}</small>
                </Card.Footer>
            </Card>
        </Col>
    )
}