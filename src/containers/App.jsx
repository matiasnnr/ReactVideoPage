import React, { useState, useEffect } from 'react';
import '../assets/styles/App.scss';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

const App = () => {

    const [ videos, setVideos ] = useState([]);

    return (
        <div className="App">
            <Header />
            <Search />

            <Categories title="Mi lista">
                <Carousel>
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                </Carousel>
            </Categories>

            <Categories title="Tendencias">
                <Carousel>
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                </Carousel>
            </Categories>

            <Categories title="Agregados recientemente">
                <Carousel>
                    <CarouselItem />
                    <CarouselItem />
                </Carousel>
            </Categories>

            <Footer />
        </div>
    )
}

export default App;