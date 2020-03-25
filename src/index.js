//import custom sass
import './styles/main.scss';
// Import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

// Import React & Redux
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from "react-redux";
import configureStore from './store/configure_store';
import { meep_service } from './services/meep_service';
import { addLocations } from './actions/locations';
import './firebase/firebase';

// config redux store
const store = configureStore();

meep_service.getLocations().then(data => {
    store.dispatch(addLocations(data));
});

const app = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(app, document.getElementById('app'));