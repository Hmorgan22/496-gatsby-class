import { graphql } from "gatsby";
import React from "react";
import img from "gatsby-image"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const pageTemplate = props => {
    const data = {
        nodeArticle: props.pageContext.data
    }

    console.log(data);
    console.log("just printed data for page")

    return (
        <Container>
            <div>
                <h4>{data.nodeArticle?.title}</h4>
                <p>
                    <div dangerouslySetInnerHTML={{ __html: data.nodeArticle?.author.displayName }} />
                    <div dangerouslySetInnerHTML={{ __html: data.nodeArticle?.author.created }} />
                </p>
                <img
                    src={data.nodeArticle?.mediaImage.mediaImage.url}
                    atl="Photo"
                />
                <div dangerouslySetInnerHTML={{ __html: data.nodeArticle?.body.processed }} />
            </div>

        </Container>


    )
}

export default pageTemplate