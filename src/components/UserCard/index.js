import React from "react";
import {
    Row,
    Col,
    Card,
    Button
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faEnvelope, faPhone, faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faUser, faEnvelope, faPhone, faTrash);

const Index = (props) => {
    return (
        <Card className="mb-2">
            <Card.Body>
                <Row className="justify-content-md-center">
                    <Col md="3"><Card.Text><FontAwesomeIcon icon="user" color="#0877ee" /> : {props.item.name}</Card.Text></Col>
                    <Col md="4"><Card.Text><FontAwesomeIcon icon="envelope" color="#df0303" /> : {props.item.email}</Card.Text></Col>
                    <Col md="4"><Card.Text><FontAwesomeIcon icon="phone" color="#03df30" /> : {props.item.phone}</Card.Text></Col>
                    <Col md="1"><Button variant="outline-danger" onClick={() => props.handleDelete(props.item.id)}><FontAwesomeIcon icon="trash" /></Button></Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default Index;