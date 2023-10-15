import { graphql } from "gatsby";
import React from "react";

const pageTemplate = props => {
    const data = {
        nodeArticle: props.pageContext.data
    }
    
    console.log(data);
    console.log("just printed data for page" )

    return (
        <div>
        <h4>{data.nodeArticle?.title}</h4>
        <p>{data.nodeArticle?.body.value}</p>
        </div>
        
    )
}

export default pageTemplate