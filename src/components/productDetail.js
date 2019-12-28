import React, {useState} from 'react'
import priceFormat from '../utils/priceFormat'
import {
    Tag,
    SizeButton,
    SizeSelect,
    StyledProductDetail,
    QtySelect,
    Button
} from '../styles/components'

import {SEO, Stars} from './'

export default function ProductDetail({price, sku: id, product }) {
    const quantity = 6
    const {name, metadata} = product
    const formatPrice = priceFormat(price);
    const [size, setSize] = useState(2);
    const [qty, setQty] = useState(1);
    
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
                <Button>Agregar al carrito</Button>
            </div>
        </StyledProductDetail>
    )
}
