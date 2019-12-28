import React from 'react';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import EventDetails from './components/EventDetails';

import axios from 'axios';

const App: React.FC = () => {
    axios.get('/api/hello').then(data => console.log(data));
    return (
        <div className="App">
            <BrowserRouter>
                <Header></Header>
                <main>
                    <div className="container">
                        <Switch>
                            <Route path="/event/:id" component={EventDetails} />
                            <Route exact path="/" component={Home} />
                        </Switch>
                    </div>
                </main>
                <Footer></Footer>
            </BrowserRouter>
        </div>
    );
};

export default App;
