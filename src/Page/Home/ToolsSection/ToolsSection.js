import React, { useEffect, useState } from 'react';
import CustomTitle from '../../Shared/CustomTitle/CustomTitle';
import Loading from '../../Shared/Loading/Loading';
import ProductsCard from './ProductsCard/ProductsCard';

const ToolsSection = () => {
    const [allTools, setAllTools] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true)
        fetch('https://infinite-chamber-43931.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {

                setAllTools(data)
                setIsLoading(false)
            })

    }, [])
    if(isLoading){
        return <Loading></Loading>

    }


    return (
        <div className='py-10 bg-accent'>
            <div className='max-w-7xl mx-auto'>
                <div className='px-3'>
                    <CustomTitle iconColor='#FF5F14' titleColor='#333333' title='Tools'></CustomTitle>


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