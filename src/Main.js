import React from 'react';
import { Switch, Route, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './styles/global.css';

import TopNavbar from './components/TopNavbar';
import Home from './pages/Home';
import Legal from './pages/Legal';
import Posts from './pages/Posts';
import Post from './pages/Post';
import Footer from './components/Footer';

function BlogPost() {
  const { slug } = useParams();
  return <Post slug={slug} />;
}

const Main = () => (
  <div className="app">
    <Helmet>
      <title>Thimo Merke</title>
    </Helmet>

    <a className="skip-link" href="#content">
      Skip to content
    </a>

    <TopNavbar />

    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/legal/" component={Legal} />
      <Route exact path="/posts" component={Posts} />
      <Route path="/posts/:slug">
        <BlogPost />
      </Route>
    </Switch>

    <Footer />
  </div>
);

export default Main;
