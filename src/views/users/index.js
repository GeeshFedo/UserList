import React, { useState, useEffect } from "react";
import {
    Container,
    Row,
    Col,
    Card,
    Spinner,
    Alert,
    Form
} from 'react-bootstrap';
import isEmpty from '../../utils/isEmpty';
import filterByValue from "../../utils/filterByValue";
import Swal from 'sweetalert2';
import UserCard from '../../components/UserCard';
import { useFetchUsersQuery, useDeleteUsersMutation } from "../../store";

const Index = () => {
    const { data, error, isFetching } = useFetchUsersQuery();
    const [deleteUsers, results] = useDeleteUsersMutation();
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        if(!isEmpty(data)) {
            setUserList(data);
        }
    },[data])

    let content;
    if (isFetching) {
      content = <Spinner animation="grow" role="status"  variant="primary" style={{position: 'absolute', top: '50%', left: '50%'}}><span className="visually-hidden">Loading...</span></Spinner>;
    } else if (error) {
      content = <Alert variant="danger">{error}</Alert>;
    } else {
      content = userList.map((user, key) => {
        return <UserCard item={user} key={key} handleDelete={(id) => handleDelete(id)}></UserCard>
      });
    }

    const handleChange = e => {
        setUserList(filterByValue(data, e.target.value))
    }

    const handleDelete = (id) => {
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
                deleteUsers(id);
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

                            <Card.Body>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control type="search" placeholder="Search" onChange={handleChange}/>
                                    </Form.Group>
                                </Form>
                                {content}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
      );
};

export default Index;