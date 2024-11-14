import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="footer-section">
              <h4>Contact</h4>
              <ul>
                <li><a href="#">Email</a></li>
                <li><a href="#">Téléphone</a></li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="text-center">
            <div className="copyright">
              &copy; 2024 PFE. Tous Droits Réservés.
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
