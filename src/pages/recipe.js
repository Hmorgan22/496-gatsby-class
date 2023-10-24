import { graphql } from "gatsby";
import React from "react";
import img from "gatsby-image"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const pageTemplate = props => {
    const data = {
        nodeFood: props.pageContext.data
    }

    console.log(data);
    console.log("just printed data for page")

    return (
        <Container>
            <h4>{data.nodeFood?.title}</h4>
            <img
                src={data.nodeFood?.mediaImage.mediaImage.url}
                alt="Photo"
            />
            <Row>
                <Col sm={4}>
                    <h2>Ingredients</h2>
                    <div dangerouslySetInnerHTML={{ __html: data.nodeFood?.ingredients }} />
                </Col>
                <Col sm={8}>
                    <h2>Recipe Instruction</h2>
                    <div dangerouslySetInnerHTML={{ __html: data.nodeFood?.recipeInstruction.processed }} /></Col>
            </Row>
        </Container>

    )
}

export default pageTemplate