import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import FooterItems from "./FooterItems";
import "./Footer.css"

const Footer = () => {
    return (
        <div className={"footer"}>
            <Container fluid>
                <Row>
                    <Col className={"footer-body"}>
                        <FooterItems/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
