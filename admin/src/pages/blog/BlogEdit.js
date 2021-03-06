import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Container, Form, InputGroup, Row } from '@themesberg/react-bootstrap';
import React, { useState } from 'react';
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { SERVER } from '../../apis/API';
import { editBlogThunk } from '../../redux/blogSlice';
import { Routes } from '../../routes';

export default () => {
    let location = useLocation();
    let blog = location.state;
    const [file, setFile] = useState();
    const { control, handleSubmit, formState: { errors } } = useForm();
    let { addToast } = useToasts();
    let history = useHistory()
    let dispatch = useDispatch();
    let addData = async (form) => {
        let data = new FormData();
        data.append("title", form.title);
        data.append("metaDescription", form.metaDescription);
        data.append("content", form.content);
        if (file) {
            data.append("file", file);
        }
        dispatch(editBlogThunk(blog._id,data))
        addToast("Success", { appearance: 'success', autoDismiss: 1000 });
        history.push(Routes.Blog.path)
    }
    return (
        <Container>
            <Row>
                <h3 className="mb-3">Sửa bài viết</h3>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Tiêu đề</Form.Label>
                        <Controller
                            control={control}
                            name="title"
                            render={({
                                field: { onChange, onBlur, value }
                            }) => (
                                <InputGroup style={{ border: errors.title?.type === "required" && '1px solid red' }}>
                                    <Form.Control autoFocus required type="text" onChange={e => onChange(e.target.value)}
                                        onBlur={onBlur}
                                        value={value}
                                    />
                                </InputGroup>
                            )}
                            rules={{
                                required: true
                            }}
                            defaultValue={blog.title}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Mô tả ngắn gọn</Form.Label>
                        <Controller
                            control={control}
                            name="metaDescription"
                            render={({
                                field: { onChange, onBlur, value }
                            }) => (
                                <InputGroup style={{ border: errors.metaDescription?.type === "required" && '1px solid red' }}>
                                    <Form.Control as="textarea" rows={3} autoFocus required type="text" onChange={e => onChange(e.target.value)}
                                        onBlur={onBlur}
                                        value={value}
                                    />
                                </InputGroup>
                            )}
                            rules={{
                                required: true
                            }}
                            defaultValue={blog.metaDescription}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Nội dung</Form.Label>
                        <Controller
                            control={control}
                            name="content"
                            render={({
                                field: { onChange, onBlur, value }
                            }) => (
                                <InputGroup style={{ border: errors.content?.type === "required" && '1px solid red' }}>
                                    <Form.Control as="textarea" rows={10} autoFocus required type="text" onChange={e => onChange(e.target.value)}
                                        onBlur={onBlur}
                                        value={value}
                                    />
                                </InputGroup>
                            )}
                            rules={{
                                required: true
                            }}
                            defaultValue={blog.content}
                        />
                    </Form.Group>

                    <Form.Group className="mt-4" >
                        <Form.Label>Ảnh</Form.Label>
                        <div className="d-xl-flex align-items-center">
                            <div className="user-avatar xl-avatar">

                                {file ? <img id="target" src={URL.createObjectURL(file)} alt="" /> :
                                    <img src={`${SERVER.URL_IMAGE}${blog.photoURL}`} alt="" />
                                }
                            </div>
                            <div className="file-field">
                                <div className="d-flex justify-content-xl-center ms-xl-3">
                                    <div className="d-flex">
                                        <span className="icon icon-md">
                                            <FontAwesomeIcon icon={faPaperclip} className="me-3" />
                                        </span>
                                        <input type="file"
                                            onChange={e => setFile(e.target.files[0])}
                                        />
                                        <div className="d-md-block text-start">
                                            <div className="fw-normal text-dark mb-1">Chọn ảnh</div>
                                            <div className="text-gray small">JPG, GIF hoặc PNG.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form.Group>

                    <Button variant="primary" type="button" onClick={handleSubmit(addData)} >
                        Xác nhận
                    </Button>
                    <Button variant="secondary" type="button" className="m-3"
                        onClick={() => history.push(Routes.Blog.path)}
                    >
                        Quay lại
                    </Button>
                </Form>
            </Row>
        </Container>
    )
}