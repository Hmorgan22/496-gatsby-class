import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Difficulty = ({ task }) => {
    return (
        <div>
            <p>Difficulty: {task}</p>

        </div>
    )
}

export default Difficulty