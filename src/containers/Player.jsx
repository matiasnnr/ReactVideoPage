import React, { useEffect } from 'react';
import '../assets/styles/components/Player.scss';
import { connect } from 'react-redux';
import { getVideoSource } from '../actions/index';
import NotFound from './NotFound';

const Player = (props) => {

    //Esto nos lo está enviando Router en el momento en el que estamos generando esta ruta, que fue /player/:id
    //De esta forma hacemos un match con los parámetros que estamos recibiendo.
    //Podemos pasar una serie de parámetros y obtenerlos, de esta forma generar validaciones o buscar cierto elemento, etc.
    const { id } = props.match.params;

    const hasPlaying = Object.keys(props.playing).length > 0;

    useEffect(() => {
        //Va al reducer, filtra por medio de este id y obtenemos en el estado el array con el objeto relacionado a ese id,
        //entonces, ahora podemos usar desde el estado ese objeto, donde se encuentra la url del video
        props.getVideoSource(id);
    }, []);

    return hasPlaying ? (
        <div className="Player">
            <video controls autoPlay>
                <source src={ props.playing.source } type="video/mp4"/>
            </video>
            <div className="Player-back">
                <button type="button" onClick={ () => props.history.goBack() }>
                    Regresar
                </button>
            </div>
        </div>
    ) : <NotFound />; //En caso de no existir video, nos redirecciona a 404
}

const mapStateToProps = (state) => {
    return {
        playing: state.playing,
    }
}

const mapDispatchToProps = {
    getVideoSource,
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);