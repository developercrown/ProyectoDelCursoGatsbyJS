import React from 'react'
import {Link} from 'gatsby'
import priceFormat from "../utils/priceFormat"
import {StyledProducts} from '../styles/components'

export default function Products({products}) {
    // console.log('====================================');
    // console.log(products);
    // console.log('====================================');
    if (products) {
        return (
          <StyledProducts>
            <h2>Productos</h2>
            <section>
              {
                products.map(({ node }) => {
                    const price = priceFormat(node.price)
                    const product = node.product
                    const id = node.id

                    const {name, metadata} = product

                    return (
                    <article key={id}>
                        <img
                        src={metadata.img}
                        alt={name}
                        />
                        <p>{name}</p>
                        <p>USD {price}</p>
                        <Link to={`${id}`}>Comprar Ahora</Link>
                    </article>
                    )
                })
              }
            </section>
          </StyledProducts>
        )
    }
    return <p>No hay productos disponibles</p>
}
