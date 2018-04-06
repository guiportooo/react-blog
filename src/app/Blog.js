import React, { Component } from "react";
import * as contentful from "contentful";
import BlogItem from "./blog/BlogItem";
import PageHeader from "./components/PageHeader";
import PageContent from "./components/PageContent";

class Blog extends Component {
  state = {
    posts: []
  };

  client = contentful.createClient({
    space: "kdzs2ew5ufg3",
    accessToken:
      "9248045d8b54b9b80eb5d6e4a91714e9f89f40cce894d26fe37b8d3f40039620"
  });

  fetchPosts = () => this.client.getEntries();

  setPosts = response => {
    this.setState({
      posts: response.items
    });
  };

  componentDidMount = () => this.fetchPosts().then(this.setPosts);

  render() {
    return (
      <div>
        <PageHeader color="is-info" title="Code Blog">
          Your standard <strong>JavaScript</strong> programming blog, albeit,
          probably not very good, but I will at least try to keep it
          entertaining. This blog is a chronological mix of random posts on
          ASP.NET, React, Functional Programming, and my{" "}
          <strong>project walkthroughs</strong>.
        </PageHeader>
        <br />
        <PageContent>
          {this.state.posts.map(({ fields }, i) => (
            <BlogItem key={i} {...fields} />
          ))}
        </PageContent>
      </div>
    );
  }
}

export default Blog;
