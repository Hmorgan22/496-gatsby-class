import { graphql } from "gatsby";
import React from "react";
import img from "gatsby-image"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CookingTime from "../components/cookTime";
import PrepTime from "../components/PrepTime";
import Servings from "../components/Servings";


const pageTemplate = props => {
    const data = {
        nodeFood: props.pageContext.data
    }

    console.log(data);
    console.log("just printed data for page")

    return (
        <Container>
            <h4>{data.nodeFood?.title}</h4>
            <Row>
                <Col sm={8}>
                    <img
                        src={data.nodeFood?.mediaImage.mediaImage.url}
                        alt="Photo"
                    />
                </Col>
                <Col sm={4}>
                    <PrepTime time={data.nodeFood?.preparationTime} />
                    <CookingTime time={data.nodeFood?.cookingTime} />
                    <Servings amount={data.nodeFood?.numberOfServings} />

                </Col>
            </Row>
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