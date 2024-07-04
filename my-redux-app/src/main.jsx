import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; //pour le store access
import { PersistGate } from 'redux-persist/integration/react'; //for wait
import reportWebVitals from './reportWebVitals';  
import './assets/main.css';
import App from './App';
import store, { persistor } from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
