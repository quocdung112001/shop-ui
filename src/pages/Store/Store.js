import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Outlet, useParams } from 'react-router-dom';
import ProductsContainer from '~/components/ProductsContainer';

function Store() {
    // const params = useParams();
    // console.log('check params: ', params);
    // const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     const allProducts = async () => {
    //         try {
    //             const res = await axios.get('https://jsonplaceholder.typicode.com/photos');
    //             setProducts(res.data);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //     allProducts();
    // }, []);

    return (
        <Container fluid className="shop__container">
            <Row className="shop-header">
                <h1>SẢN PHẨM</h1>
            </Row>
            <Row className="shop-products">
                {/* <ProductsContainer products={products} /> */}
                <Outlet />
            </Row>
        </Container>
    );
}

export default Store;
