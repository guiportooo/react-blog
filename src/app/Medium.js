import React, { Component } from "react";
import PageHeader from "./components/PageHeader";
import PageContent from "./components/PageContent";
import MediumItem from "./medium/MediumItem";
import axios from "axios";

class Medium extends Component {
  state = {
    posts: []
  };

  componentDidMount = () => this.fetchPosts().then(this.setPosts);

  fetchPosts = () =>
    axios.get(
      `https://cors.now.sh/https://us-central1-aaronklaser-1.cloudfunctions.net/medium?username=@aaron.klaser`
    );

  shouldShowPost = post =>
    post.content.subtitle.startsWith("The React Blog Series");

  mapPost = post => {
    const { id, title, createdAt, virtuals, uniqueSlug } = post;

    return Object.assign(
      {},
      {
        title,
        createdAt,
        subtitle: virtuals.subtitle,
        image: virtuals.previewImage.imageId
          ? `https://cdn-images-1.medium.com/max/800/${
              virtuals.previewImage.imageId
            }`
          : null,
        url: `https://medium.com/@aaron.klaser/${uniqueSlug}`
      }
    );
  };

  setPosts = ({ data }) => {
    const { Post } = data.payload.references;

    const posts = Object.values(Post).reduce((acc, curr) => {
      return this.shouldShowPost(curr) ? [...acc, this.mapPost(curr)] : acc;
    }, []);

    this.setState({
      posts
    });
  };

  render() {
    return (
      <div>
        <PageHeader color="is-dark" title="Medium">
          This page shows the posts of "The React Blog Series" by Aaron Klaser
          on Medium. To view the entire post, click on the links and you will be
          redirected to Medium. Or click on the button bellow to go to Aaron
          Klaser's Medium page.
          <br />
          <br />
          <a
            className="button is-inverted is-outlined"
            href="https://medium.com/@aaron.klaser"
            target="_blank"
          >
            View Aaron's Medium
            <span className="icon" style={{ marginLeft: 5 }}>
              <i className="fab fa-lg fa-medium" />
            </span>
          </a>
        </PageHeader>
        <PageContent>
          {this.state.posts.map((post, i) => <MediumItem key={i} {...post} />)}
        </PageContent>
      </div>
    );
  }
}

export default Medium;
