import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainNavbar from '../components/MainNavbar';
import Sidebar from '../components/Sidebar';

function WithSidebar({ children }) {
    return (
        <Container fluid className="">
            <Row>
                <Header />
            </Row>
            <Row>
                <MainNavbar />
            </Row>
            <Row className="pt-5">
                <div className="d-flex flex-row">
                    <Container className="p-0">
                        <Row>
                            <Col md={3} className="d-none d-lg-block">
                                <Sidebar />
                            </Col>
                            <Col xs={12} lg={9}>
                                {children}
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Row>
            <Row>
                <Footer />
            </Row>
        </Container>
    );
}

export default WithSidebar;