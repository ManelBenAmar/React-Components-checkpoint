import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
function ProfilPhoto() {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <Image
                            src="https://image.freepik.com/photos-gratuite/image-du-cerveau-humain_99433-298.jpg"
                            roundedCircle
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ProfilPhoto;
