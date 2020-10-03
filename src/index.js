import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './routes/App';
import { composeWithDevTools } from 'redux-devtools-extension';

//data necesaria para inicializar nuestro estado en redux
const initialState = {
      "user": {},
      "playing": {},
      "mylist": [],
      "trends": [
        {
          "id": 2,
          "slug": "tvshow-2",
          "title": "In the Dark",
          "type": "Scripted",
          "language": "English",
          "year": 2009,
          "contentRating": "16+",
          "duration": 164,
          "cover": "http://dummyimage.com/800x600.png/99118E/ffffff",
          "description": "Vestibulum ac est lacinia nisi venenatis tristique",
          "source": "https://firebasestorage.googleapis.com/v0/b/matiasnnr-repository.appspot.com/o/Videos%2Fpruebaandroid.mp4?alt=media&token=f7ab5e68-9b54-4467-a653-1c7b77372539"
        },
        {
          "id": 3,
          "slug": "tvshow-3",
          "title": "Instinct",
          "type": "Adventure",
          "language": "English",
          "year": 2002,
          "contentRating": "16+",
          "duration": 137,
          "cover": "http://dummyimage.com/800x600.png/302140/ffffff",
          "description": "Vestibulum ac est lacinia nisi venenatis tristique",
          "source": "https://firebasestorage.googleapis.com/v0/b/matiasnnr-repository.appspot.com/o/Videos%2Fpruebaandroid.mp4?alt=media&token=f7ab5e68-9b54-4467-a653-1c7b77372539"
        },
        {
          "id": 4,
          "slug": "tvshow-4",
          "title": "Grand Hotel",
          "type": "Comedy",
          "language": "English",
          "year": 2014,
          "contentRating": "16+",
          "duration": 163,
          "cover": "http://dummyimage.com/800x600.png/5472FF/ffffff",
          "description": "Vestibulum ac est lacinia nisi venenatis tristique",
          "source": "https://firebasestorage.googleapis.com/v0/b/matiasnnr-repository.appspot.com/o/Videos%2Fpruebaandroid.mp4?alt=media&token=f7ab5e68-9b54-4467-a653-1c7b77372539"
        },
        {
          "id": 5,
          "slug": "tvshow-5",
          "title": "Stargate Atlantis",
          "type": "Scripted",
          "language": "English",
          "year": 2014,
          "contentRating": "16+",
          "duration": 194,
          "cover": "http://dummyimage.com/800x600.png/B36F20/ffffff",
          "description": "Vestibulum ac est lacinia nisi venenatis tristique",
          "source": "https://firebasestorage.googleapis.com/v0/b/matiasnnr-repository.appspot.com/o/Videos%2Fpruebaandroid.mp4?alt=media&token=f7ab5e68-9b54-4467-a653-1c7b77372539"
        },
        {
          "id": 6,
          "slug": "tvshow-6",
          "title": "Final Space",
          "type": "Scripted",
          "language": "English",
          "year": 2017,
          "contentRating": "16+",
          "duration": 124,
          "cover": "http://dummyimage.com/800x600.png/CCC539/ffffff",
          "description": "Vestibulum ac est lacinia nisi venenatis tristique",
          "source": "https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        },
        {
          "id": 7,
          "slug": "tvshow-7",
          "title": "The InBetween",
          "type": "Drama",
          "language": "English",
          "year": 2011,
          "contentRating": "16+",
          "duration": 179,
          "cover": "http://dummyimage.com/800x600.png/FF7A90/ffffff",
          "description": "Vestibulum ac est lacinia nisi venenatis tristique",
          "source": "https://firebasestorage.googleapis.com/v0/b/matiasnnr-repository.appspot.com/o/Videos%2Fpruebaandroid.mp4?alt=media&token=f7ab5e68-9b54-4467-a653-1c7b77372539"
        }
      ],
      "originals": [
        {
          "id": 8,
          "slug": "tvshow-8",
          "title": "Stargate Atlantis",
          "type": "Action",
          "language": "English",
          "year": 2012,
          "contentRating": "16+",
          "duration": 148,
          "cover": "http://dummyimage.com/800x600.png/306880/ffffff",
          "description": "Vestibulum ac est lacinia nisi venenatis tristique",
          "source": "https://firebasestorage.googleapis.com/v0/b/matiasnnr-repository.appspot.com/o/Videos%2Fpruebaandroid.mp4?alt=media&token=f7ab5e68-9b54-4467-a653-1c7b77372539"
        },
        {
          "id": 9,
          "slug": "tvshow-9",
          "title": "Alien Highway",
          "type": "Action",
          "language": "English",
          "year": 2019,
          "contentRating": "16+",
          "duration": 128,
          "cover": "http://dummyimage.com/800x600.png/604180/ffffff",
          "description": "Vestibulum ac est lacinia nisi venenatis tristique",
          "source": "https://firebasestorage.googleapis.com/v0/b/matiasnnr-repository.appspot.com/o/Videos%2Fpruebaandroid.mp4?alt=media&token=f7ab5e68-9b54-4467-a653-1c7b77372539"
        },
        {
          "id": 10,
          "slug": "tvshow-10",
          "title": "Elementary",
          "type": "Animation",
          "language": "English",
          "year": 2011,
          "contentRating": "16+",
          "duration": 346,
          "cover": "http://dummyimage.com/800x600.png/FF91BA/ffffff",
          "description": "Vestibulum ac est lacinia nisi venenatis tristique",
          "source": "https://firebasestorage.googleapis.com/v0/b/matiasnnr-repository.appspot.com/o/Videos%2Fpruebaandroid.mp4?alt=media&token=f7ab5e68-9b54-4467-a653-1c7b77372539"
        },
        {
          "id": 11,
          "slug": "tvshow-11",
          "title": "Strange Angel",
          "type": "War",
          "language": "English",
          "year": 2015,
          "contentRating": "16+",
          "duration": 226,
          "cover": "http://dummyimage.com/800x600.png/45807C/ffffff",
          "description": "Vestibulum ac est lacinia nisi venenatis tristique",
          "source": "https://firebasestorage.googleapis.com/v0/b/matiasnnr-repository.appspot.com/o/Videos%2Fpruebaandroid.mp4?alt=media&token=f7ab5e68-9b54-4467-a653-1c7b77372539"
        },
        {
          "id": 12,
          "slug": "tvshow-12",
          "title": "Private Eyes",
          "type": "Comedy",
          "language": "English",
          "year": 2018,
          "contentRating": "16+",
          "duration": 190,
          "cover": "http://dummyimage.com/800x600.png/577380/ffffff",
          "description": "Vestibulum ac est lacinia nisi venenatis tristique",
          "source": "https://firebasestorage.googleapis.com/v0/b/matiasnnr-repository.appspot.com/o/Videos%2Fpruebaandroid.mp4?alt=media&token=f7ab5e68-9b54-4467-a653-1c7b77372539"
        },
        {
          "id": 13,
          "slug": "tvshow-13",
          "title": "NCIS: Los Angeles",
          "type": "Drama",
          "language": "English",
          "year": 2010,
          "contentRating": "16+",
          "duration": 160,
          "cover": "http://dummyimage.com/800x600.png/5472FF/ffffff",
          "description": "Vestibulum ac est lacinia nisi venenatis tristique",
          "source": "https://firebasestorage.googleapis.com/v0/b/matiasnnr-repository.appspot.com/o/Videos%2Fpruebaandroid.mp4?alt=media&token=f7ab5e68-9b54-4467-a653-1c7b77372539"
        }
      ]
  }

//utilizamos el createStore que importamos y creamos un nuevo store para pasarselo a nuestro Provider
// el primer param sería el reducer y el segundo el estado inicial
const store = createStore(reducer, initialState, composeWithDevTools());

ReactDOM.render(
    <Provider store={ store } >
        <App />
    </Provider>,
    document.getElementById('app'));


/*createStore(reducer, [initialState], [enhancer])*/