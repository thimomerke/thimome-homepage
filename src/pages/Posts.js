import React, { Component } from 'react';
import AWS from 'aws-sdk';
import Post from './Post';
import '../styles/Posts.css';

const articleIDs = [];

AWS.config.update({
  accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
  region: process.env.REACT_APP_REGION,
});
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
      loaded: false,
    };
  }

  async componentDidMount() {
    s3.listObjectsV2(params, (err, data) => {
      if (err) throw err;
      const objects = data.Contents;
      for (let i = 1; i < objects.length; i += 1) {
        articleIDs.push(objects[i].Key.slice(5, -3).toString());
      }
      this.setState({
        articleIDs,
        loaded: true,
      });
    });
  }

  render() {
    const { loaded, articleIDs: ids } = this.state;

    return (
      <main className="postlist" id="content">
        <div className="shell">
          <div className="section-head">
            <span className="section-index">&#9670; / </span>
            <h1 className="section-title">Writing</h1>
            <span className="section-rule" />
          </div>

          {loaded ? (
            ids.map((articleID) => (
              <Post key={articleID} slug={articleID} preview />
            ))
          ) : (
            <p className="mono">Loading&hellip;</p>
          )}
        </div>
      </main>
    );
  }
}
