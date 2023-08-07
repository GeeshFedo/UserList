import React, { useState, useEffect } from "react";
import {
    Container,
    Row,
    Col,
    Card
} from 'react-bootstrap';
import UserCard from '../../components/UserCard';
import Swal from 'sweetalert2';
import {
    getUserList, deleteUser
} from "../../store/thunks";

//redux
import { useSelector, useDispatch } from "react-redux";
import isEmpty from '../../utils/isEmpty';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';

const Index = () => {
    const dispatch = useDispatch();
    const {
        userList,
        isLoader,
        error
    } = useSelector(state => ({
        userList: state.User.userList,
        isLoader: state.User.isLoader,
        error: state.User.error
    }));

    useEffect(() => {
        if (isEmpty(userList)) {
            dispatch(getUserList());
        }
    }, [userList, dispatch]);

    const handleDelete = (id) => {
        let data = {
            id,
            userList
        }
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteUser(data));
                Swal.fire(
                    'Deleted!',
                    'Record has been deleted.',
                    'success'
                )
            }
        })

    }
    return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="10">
                        <Card>
                            <Card.Header as="h5">Users List</Card.Header>
                            {isLoader &&
                            <Spinner animation="grow" role="status"  variant="primary" style={{position: 'absolute', top: '50%', left: '50%'}}>
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                            }
                            <Card.Body>
                                {!isEmpty(userList) && userList.map((item, key) => (
                                    <UserCard item={item} key={key} handleDelete={(id) => handleDelete(id)}></UserCard>
                                ))}
                                {!isEmpty(error) &&
                                    <Alert variant="danger">
                                        {error}
                                    </Alert>
                                }
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
      );
};

export default Index;