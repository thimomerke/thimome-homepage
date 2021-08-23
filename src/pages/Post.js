import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import '../styles/Post.css'

let folder = "https://thimome-homepage.s3.eu-central-1.amazonaws.com/blog/" //change this to your own folder / aws bucket. this one will only work from my domain (thimo.me)
//let folder = "/posts/"

let image = "";
let headline = "# This is odd...";
let date = "";
let content = "### I'm not sure how you got here, did you take a wrong turn somewhere?";


export default class Post extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
            image: "",
            headline: "",
            date: "",
            content: "Loading..."
        }
    }

    async componentDidMount() {
      const articleId = this.props.slug;
      const file = `${folder}${articleId}.md`;
      const response = await fetch(file);
      var text = "";
      if (response.ok === true){
        text = await response.text();
        text = text.split('\n');
        image = text[0];
        headline = text[1];
        date = text[2];
        text.splice(0,4);
        content = text.join('\n');
      }

      if (this.props.preview){
        content = content.split('\n').slice(0, 10).join('\n');
      }

      this.setState({
          image: image,
          headline: headline,
          content: content,
          date: date
      })
  }

    render() {
        console.log(this.state)
  return (

    <div className="blogpost">
      
      <main className="main">
      <section className="post">
      <Container>
        <Row className="post-image">
        {this.props.preview 
          ? <a href={'/posts/' + this.props.slug}><img src={this.state.image} alt="main header"/></a>
          : <div><img src={this.state.image} alt="main header"/></div>
        }
        </Row>
        <Row className="post-headline">
        {this.props.preview 
          ? <a href={'/posts/' + this.props.slug}>{this.state.headline}</a>
          : this.state.headline
        }
        </Row>
        <Row className="post-date">
        {this.state.date}
        </Row>
        <Row className="post-content">
          <div>
            <ReactMarkdown children={this.state.content} remarkPlugins={[remarkGfm]} />
            </div>
          </Row>
      </Container>
      </section>
      </main>
    </div>
  )
}
}