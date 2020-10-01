import React, { useState, useEffect } from 'react';
import '../assets/styles/App.scss';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

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

//nos trae los elementos desde el estado
const mapStateToProps = state => {
    return{
        mylist: state.mylist,
        trends: state.trends,
        originals: state.originals
    }
}

//export default Home;
//connect conectará redux con un componente de nuestra aplicación
//export default connect(props, actions)(Home);
export default connect(mapStateToProps, null)(Home);