import React, { useEffect, useState } from 'react';
import CustomTitle from '../../Shared/CustomTitle/CustomTitle';
import ProductsCard from './ProductsCard/ProductsCard';

const ToolsSection = () => {
    const [allTools, setAllTools] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setAllTools(data))

    }, [])

    console.log(allTools)
    return (
        <div className='py-10 bg-accent'>
            <div className='max-w-7xl mx-auto'>
                <div className='px-3'>
                    <CustomTitle title='Tools'></CustomTitle>


                    <div className='mt-5 grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {
                            allTools.map(tool => <ProductsCard key={tool._id} tool={tool}></ProductsCard>)
                        }


                    </div>
                </div>



            </div>

        </div>
    );
};

export default ToolsSection;