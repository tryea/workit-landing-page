import React from 'react'
import SectionInfoProductItem from '../components/SectionInfoProductItem'

const ProductDescriptionSection = () => {
    return (
        <>
            <SectionInfoProductItem
                title='Actionable insights'
                description='Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.'
                number='1'
            />
            <SectionInfoProductItem
                title='Data-driven decisions'
                description='Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.'
                number='2'
            />
            <SectionInfoProductItem
                title='Always affordable'
                description='Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.'
                number='3'
            />
        </>
    )
}

export default ProductDescriptionSection