import React from "react";
import {
    Row,
    Col,
    Card,
    Button
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faEnvelope, faPhone, faTrash, faHome } from "@fortawesome/free-solid-svg-icons";
import formattedAddress from "../../utils/formattedAddress";

library.add(faUser, faEnvelope, faPhone, faTrash, faHome);

const Index = (props) => {
    return (
        <Card className="mb-2">
            <Card.Body>
                <Row className="justify-content-md-center">
                    <Col md="10">
                    <Row>
                    <Col md="6"><Card.Text><FontAwesomeIcon icon="user" color="#0877ee" /> : {props.item.name}</Card.Text></Col>
                    <Col md="6"><Card.Text><FontAwesomeIcon icon="envelope" color="#dc3545" /> : {props.item.email}</Card.Text></Col>
                    <Col md="6"><Card.Text><FontAwesomeIcon icon="phone" color="#20c997" /> : {props.item.phone}</Card.Text></Col>
                    <Col md="6"><Card.Text><FontAwesomeIcon icon="home" color="#343a40" /> : <small>{formattedAddress(props.item.address)}</small></Card.Text></Col>
                    </Row>
                    </Col>
                    <Col md="2"><Button variant="outline-danger" onClick={() => props.handleDelete(props.item.id)}><FontAwesomeIcon icon="trash" /></Button></Col>

                </Row>
            </Card.Body>
        </Card>
    );
};

export default Index;