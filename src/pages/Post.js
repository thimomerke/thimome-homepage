import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import '../styles/Post.css';

// Change this to your own folder / AWS bucket.
// This one will only work from my domain (thimo.me).
const folder = 'https://thimome-homepage.s3.eu-central-1.amazonaws.com/blog/';

const FALLBACK = {
  image: '',
  headline: 'This is odd...',
  date: '',
  content: `### I'm not sure how you got here, did you take a wrong turn somewhere?`,
};

export default class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: '',
      headline: '',
      date: '',
      content: 'Loading...',
    };
  }

  async componentDidMount() {
    const { slug, preview } = this.props;

    try {
      const response = await fetch(`${folder}${slug}.md`);
      if (!response.ok) {
        this.setState(FALLBACK);
        return;
      }

      // Post format: line 1 image URL, line 2 headline, line 3 date,
      // line 4 blank, everything after that is the body.
      const lines = (await response.text()).split('\n');
      const image = lines[0];
      const headline = lines[1];
      const date = lines[2];
      let content = lines.slice(4).join('\n');

      if (preview) {
        content = content.split('\n').slice(0, 10).join('\n');
      }

      this.setState({ image, headline, date, content });
    } catch (e) {
      this.setState(FALLBACK);
    }
  }

  render() {
    const { preview, slug } = this.props;
    const { image, headline, date, content } = this.state;
    const href = `/posts/${slug}`;

    return (
      <article className={`post ${preview ? 'is-preview' : ''}`}>
        <div className={preview ? '' : 'shell'} id={preview ? undefined : 'content'}>
          {image && (
            <div className="post-image">
              {preview ? (
                <a href={href}>
                  <img src={image} alt="" />
                </a>
              ) : (
                <img src={image} alt="" />
              )}
            </div>
          )}

          <h2 className="post-headline">
            {preview ? <a href={href}>{headline}</a> : headline}
          </h2>

          {date && <p className="post-date mono mono-sm">{date}</p>}

          <div className="post-content">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          </div>

          {preview && (
            <a className="post-more mono mono-sm" href={href}>
              Read more &rarr;
            </a>
          )}
        </div>
      </article>
    );
  }
}
