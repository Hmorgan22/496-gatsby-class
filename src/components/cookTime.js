import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const CookingTime = ({ time }) => {
    return (
        <div>
            <p>Cooking Time: {time}</p>

        </div>
    )
}

export default CookingTime