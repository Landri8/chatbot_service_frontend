import React from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../../components/NavBar';
import MiniModelComponent from './components/MiniModelComponent';
import VR6ModelComponent from './components/VR6ModelComponent';
import FooterComponent from '../../components/FooterComponent';

const ProductDetailsScreen = () => {

    const param = useParams();

    return (
        <section>
            <NavBar />
            {
            (param.id === "1")
            ?
            <MiniModelComponent />
            :
            <VR6ModelComponent />
            }
            <FooterComponent />
        </section>
    )
}

export default ProductDetailsScreen