import React from 'react'
import {StyledJumbo} from '../styles/components'
import {Image} from '../components'

export default function Jumbo({description}) {
    return (
      <StyledJumbo>
        <div>
          <h2>Consigue el mejor Swag y exclusivo de platzi</h2>
          <small>{description}</small>
        </div>
        <Image name="icon"/>
      </StyledJumbo>
    )
}
