import BottomCurveSVG from '../../components/BottomCurveSVG'
import SectionInfoProductItem from './slice/SectionInfoProductItem'
import './ProductDescriptionSection.css'

const ProductDescriptionSection = () => {
    return (
        <div className='productDescriptionSection'>
            <div className='descriptionWrapper'>
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
            </div>
            <div className='descriptionBottomCurve'>
                <BottomCurveSVG color='#FFFFFF' />
            </div>
        </div>
    )
}

export default ProductDescriptionSection