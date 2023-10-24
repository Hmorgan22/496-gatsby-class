import { graphql } from "gatsby";
import React from "react";
import img from "gatsby-image"


const pageTemplate = props => {
    const data = {
        nodeFood: props.pageContext.data
    }
    
    console.log(data);
    console.log("just printed data for page" )

    return (
        <div>
            <h4>{data.nodeFood?.title}</h4>
            <img 
                src = {data.nodeFood?.mediaImage.mediaImage.url}
                alt = "Photo"
            />
            <div dangerouslySetInnerHTML={{ __html: data.nodeFood?.recipeInstruction.processed}} />
        </div>
    )
}

export default pageTemplate