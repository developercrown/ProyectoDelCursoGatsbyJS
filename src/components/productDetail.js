import React, {useState, useContext} from 'react'
import priceFormat from '../utils/priceFormat'

import { CartContext } from '../context'

import {
    Tag,
    SizeButton,
    SizeSelect,
    StyledProductDetail,
    QtySelect,
    Button
} from '../styles/components'

import {SEO, Stars} from './'

export default function ProductDetail({price, id, product }) {
    const quantity = 6
    const {name, metadata} = product
    const formatPrice = priceFormat(price);
    const [size, setSize] = useState(2);
    const [qty, setQty] = useState(1);
    const {addToCart} = useContext(CartContext);

    const handleSubmit = () => {
        const sku = id
        addToCart({ price, sku, name, metadata, quantity: qty })
    }
    
    return (
        <StyledProductDetail>
            <SEO title={name} />
            <img src={metadata.img} alt={name}/>
            <div>
                <Tag>Popular</Tag>
                <h2> { name } </h2>
                <b>USD {formatPrice}</b>
                <Stars />
                {
                    metadata.wear && <h4>Color: Dark Green</h4>
                }
                <small>
                    {
                        metadata.descripcion
                    }
                </small>
                {
                    metadata.wear && (<SizeSelect selected={size}>
                        <SizeButton onClick={()=>{setSize(1)}}>XS</SizeButton>
                        <SizeButton onClick={()=>{setSize(2)}}>S</SizeButton>
                        <SizeButton onClick={()=>{setSize(3)}}>M</SizeButton>
                        <SizeButton onClick={()=>{setSize(4)}}>L</SizeButton>
                    </SizeSelect>)
                }
                <p>Cantidad: </p>
                <QtySelect>
                    <button onClick={() => (qty > 1 ? setQty(qty-1) : null)}>-</button>
                    <input type="text" disabled value={qty}/>
                    <button onClick={() => (qty < quantity ? setQty(qty+1) : null)}>+</button>
                </QtySelect>
                <Button onClick={handleSubmit}>Agregar al carrito</Button>
            </div>
        </StyledProductDetail>
    )
}
