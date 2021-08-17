import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import '../styles/Post.css'

let folder = "https://thimome-homepage.s3.eu-central-1.amazonaws.com/blog/" //change this to your own folder / aws bucket. this one will only work from my domain (thimo.me)
//let folder = "/posts/"

export default class Post extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
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
      } else {
        text = `# This is odd...  \n ### I'm not sure how you got here, did you take a wrong turn somewhere?`
      }
      this.setState({
          content: text
      })
  }

    render() {
        console.log(this.state)
  return (

    <div className="blogpost">
      
      <main className="main">
      <section className="post">
      <Container>
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