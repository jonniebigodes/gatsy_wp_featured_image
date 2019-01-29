import React from 'react'
import { graphql,Link } from 'gatsby'
import Img from 'gatsby-image'
const BlogPost = ({ data }) => {
  const {wordpressPost}= data
  return (
    <div>
      <div>
        <h1>{wordpressPost.title}</h1>
      </div>
      <div>
        
        {
          wordpressPost.featured_media===null?<h1>No featured media</h1>:<Img fluid={wordpressPost.featured_media.localFile.childImageSharp.fluid}/>
        }
        Content:
        <br/>
        <div>
          <div dangerouslySetInnerHTML={{ __html: wordpressPost.content }} />
        </div>
        <div>
          <Link to="/blog">Go back</Link>
        </div>
      </div>
    </div>
  )
}
export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    wordpressPost(id: { eq: $id }) {
      id
      title
      slug
      content
      date(formatString: "/YYYY/MM/DD/")
      featured_media {
        localFile {
          childImageSharp {
            fluid(maxWidth: 5000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
