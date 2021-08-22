import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Post from './Post';
import AWS from 'aws-sdk';
import '../styles/Posts.css';

let articleIDs = [];

console.log(process.env);

AWS.config.update({ accessKeyId: process.env.ACCESS_KEY_ID, secretAccessKey: process.env.SECRET_ACCESS_KEY, region: process.env.REGION });
const s3 = new AWS.S3();
const params = {
 Bucket: 'thimome-homepage',
 Delimiter: '',
 Prefix: 'blog',
};

export default class Posts extends Component {

  constructor(props) {
    super(props);
 
    this.state = {
        articleIDs: [],
        loaded: false
    }
  }

  async componentDidMount() {

    s3.listObjectsV2(params, (err, data) => {
      if (err) throw err;
      let objects = data.Contents;
      for (let i = 1; i < objects.length; i++){
       articleIDs.push(objects[i].Key.slice(5, -3).toString())
     }
     this.setState({
      articleIDs: articleIDs,
      loaded: true
    })
     })

  }
    
    render() {
        console.log(this.state.articleIDs);
        if (this.state.loaded) {
        return (
          <Container className = "postlist">
            {
              this.state.articleIDs.map(function(articleID){
                return (
                  <Post slug={articleID} preview={true} />
                 
                )
              })
            }
      </Container>
      )
      } else {
        return (
          <Container className = "postlist">
          Loading...
    </Container>
        )
      }
}
}