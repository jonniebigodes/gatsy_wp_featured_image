import React from 'react';
import Layout from '../components/layout'
import {Link} from 'gatsby'
const AllPosts =props=>{
    const {pageContext} = props
    const {allData}= pageContext

    return (
        <Layout>
            {
                allData.map(item=>{
                    return(
                        <div key={`container_${item.node.slug}`}>
                            <Link to={`/blog/${item.node.slug}`}>Go to {item.node.slug}</Link>
                        </div>
                    )
                })
            }
        </Layout>
        
    )
}
export default AllPosts