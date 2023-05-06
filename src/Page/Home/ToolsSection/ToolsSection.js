import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import CustomTitle from '../../Shared/CustomTitle/CustomTitle';
import Loading from '../../Shared/Loading/Loading';
import ProductsCard from './ProductsCard/ProductsCard';

const ToolsSection = () => {



    // const { error, data } = useQuery('allTools', () =>

    //     fetch(`${process.env.REACT_APP_SERVER_API_KEY}/products`).then(res =>
    //         res.json()
    //     console.log(data)

    //     )
    // )
    const [data, setData] = useState(null)
    fetch(`${process.env.REACT_APP_SERVER_API_KEY}/products`)
    .then((response) => response.json())
    .then((d) => setData(d));


    // console.log(data)
    // const { isLoading, error, data } = useQuery('repoData', () =>
    //  fetch(`${process.env.REACT_APP_SERVER_API_KEY}/products`).then(res =>
    //    res.json()
    //  ))

    // console.log(data)
    
    // async function funcName(url){
    //     const response = await fetch(url);
    //     var data = await response.json();
    //     console.log(data)
    //     }

    //     funcName(`${process.env.REACT_APP_SERVER_API_KEY}/products`)

if(data == null){
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