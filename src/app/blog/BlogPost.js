import React from "react";
import PageContent from "./../components/PageContent";
import BlogNav from "./shared/BlogNav";
import BlogContent from "./shared/BlogContent";

const BlogPost = ({ location: { state: { props } } }) => {
  return (
    <PageContent>
      <BlogNav
        date={props.date}
        status={props.status}
        linkName="Back to Blog"
        to="/blog"
      />
      <BlogContent {...props} />
    </PageContent>
  );
};
export default BlogPost;
