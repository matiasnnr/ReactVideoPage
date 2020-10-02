import React, { useState, useEffect } from 'react';
import '../assets/styles/App.scss';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

//Ahora que ya está conectado con connect, podemos recibir las propiedades o props en nuestro componente
const Home = ({ mylist, trends, originals }) => {

    return (
        <>

            <Search />

            {
                mylist.length > 0 &&
                <Categories title="Mi lista">
                    <Carousel>
                        {
                            mylist.map(item => <CarouselItem key={item.id} {...item} />)
                        }
                    </Carousel>
                </Categories>
            }

            <Categories title="Tendencias">
                <Carousel>
                    {
                        trends.map(item => <CarouselItem key={item.id} {...item} />)
                    }
                </Carousel>
            </Categories>

            <Categories title="Agregados recientemente">
                <Carousel>
                    {
                        originals.map(item => <CarouselItem key={item.id} {...item} />)
                    }
                </Carousel>
            </Categories>

        </>
    )
}

//nos trae los elementos desde el estado y los mappea a un objeto con las propiedades o props
const mapStateToProps = state => {
    return{
        mylist: state.mylist,
        trends: state.trends,
        originals: state.originals
    }
}

//export default Home;
//connect conectará un componente con el store
//export default connect(props, actions)(Home);
export default connect(mapStateToProps, null)(Home);