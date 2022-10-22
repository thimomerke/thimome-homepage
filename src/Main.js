import React from 'react';
import { Switch, Route, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';

import TopNavbar from './components/TopNavbar.js'
import Home from './pages/Home';
import Legal from './pages/Legal';
import Posts from './pages/Posts';
import Post from './pages/Post';
import Footer from './components/Footer'

function BlogPost() {
  let { slug } = useParams()
  return(
    <Post slug = {slug} />
  );
}

const Main = () => {
  return (
    <div className="app">
      <Helmet>
        <title>Thimo Merke</title>
      </Helmet>
      <TopNavbar></TopNavbar>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/legal/' component={Legal}></Route>
        <Route exact path='/posts' component={Posts}></Route>
        <Route path="/posts/:slug">
          <BlogPost/>
        </Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default Main;