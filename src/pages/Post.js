import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Parser from 'html-react-parser';
import Row from 'react-bootstrap/Row';
import '../styles/Post.css'
//import posts from '../posts/posts.json'

export default class Post extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
            data: {
                "slug":"",
                "image":"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/282/thinking-face_1f914.png",
                "image_size":"200px",
                "title":"How did you get here?",
                "content":"Maybe you took a wrong turn? Anyways, there is nothing to see here"
            }
        }
    }

    async getData(){
        const res = await fetch(`/posts/${this.props.slug}.json`);
        const data = await res.json();
        return this.setState({data});
     }

    componentDidMount() {
        this.getData();
        console.log(this.state)
    }

    render() {
        console.log(this.state)
  return (

    <div className="blogpost">
      
      <main className="main">
      <section className="post">
      <Container>
          <Row className="post-image">
            <img alt="Post" style={{ width: this.state.data.image_size }} src={this.state.data.image} />
          </Row>
        <Row className="post-heading">
          <div>
            {this.state.data.title}

            </div>
          </Row>
          <Row className="post-content">
          <div>
          {Parser(this.state.data.content)}
            </div>
          </Row>
      </Container>
      </section>
      </main>
    </div>
  )
}
}