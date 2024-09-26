"use client"

import React, { useEffect, useState } from 'react'
import RowRender from './RowRender'
import GrafikRender from './GrafikRender'
import RowRenderType from './RowRenderType';

export default function ListRendersDT({ apiuri }) {
    console.log("CLIENT", apiuri + 'v-3/signage-services/type/DT');
    const [ data, setData ] = useState([])
    const [ countFetch, setCountFetch ] = useState(0)
    
    useEffect(() => {
        GETDATAFETCH()
        intervalFetchData()
    }, [countFetch])
    
    const GETDATAFETCH = async () => {
        try {
            const resp = await fetch(apiuri + 'v-3/signage-services/type/DT')
            const result = await resp.json()
            setData(result?.data)
        } catch (error) {
            console.log(error);
            // alert('Error get data....')
        }
    }

    const intervalFetchData = () => {
        setTimeout(() => {
            GETDATAFETCH()
            setCountFetch(countFetch + 1)
        }, 15 * (60 * 1000));
    }
    

    return (
        <div className='flex flex-1 flex-row justify-between space-x-2'>
            {
                data.length > 0 &&
                <>
                    <RowRenderType data={data}/>
                </>
            }
        </div>
    )
}