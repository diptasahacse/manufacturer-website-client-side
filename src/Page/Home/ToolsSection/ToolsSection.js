import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import CustomTitle from '../../Shared/CustomTitle/CustomTitle';
import Loading from '../../Shared/Loading/Loading';
import ProductsCard from './ProductsCard/ProductsCard';

const ToolsSection = () => {



    const { isLoading, error, data } = useQuery('allTools', () =>
        fetch('https://infinite-chamber-43931.herokuapp.com/products').then(res =>
            res.json()
        )
    )





    if (isLoading) {
        return <Loading></Loading>

    }


    return (
        <div className='py-10 bg-accent'>
            <div className='max-w-7xl mx-auto'>
                <div className='px-3'>
                    <CustomTitle iconColor='#FF5F14' titleColor='#333333' title='Tools'></CustomTitle>


                    <div className='mt-5 grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {
                            data.map(tool => <ProductsCard key={tool._id} tool={tool}></ProductsCard>)
                        }


                    </div>
                </div>



            </div>

        </div>
    );
};

export default ToolsSection;