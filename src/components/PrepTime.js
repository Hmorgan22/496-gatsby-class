import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const PrepTime = ({ time }) => {
    return (
        <div>
            <p>Preperation Time: {time}</p>

        </div>
    )
}

export default PrepTime