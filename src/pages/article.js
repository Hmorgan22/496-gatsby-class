import { graphql } from "gatsby";
import React from "react";
import img from "gatsby-image"

const pageTemplate = props => {
    const data = {
        nodeArticle: props.pageContext.data
    }
    
    console.log(data);
    console.log("just printed data for page" )

    return (
        <div>
        <h4>{data.nodeArticle?.title}</h4>
        <img 
        src = {data.nodeArticle?.mediaImage.mediaImage.url}
        atl = "Photo"
        />
        <div dangerouslySetInnerHTML={{ __html: data.nodeArticle?.body.processed}} />
        </div>
        
    )
}

export default pageTemplate