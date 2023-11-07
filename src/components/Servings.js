import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Servings = ({ amount }) => {
    return (
        <div>
            <p>Number of servings: {amount}</p>
        </div>
    )
}

export default Servings