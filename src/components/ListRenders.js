"use client"

import React, { useEffect, useMemo, useState } from 'react'
import RowRender from './RowRender'
import GrafikRender from './GrafikRender'

export default function ListRenders({ apiuri }) {
    console.log("CLIENT", apiuri);
    const [ data, setData ] = useState([])
    const [ countFetch, setCountFetch ] = useState(0)
    
    useEffect(() => {
        GETDATAFETCH()
        intervalFetchData()
    }, [countFetch])
    
    const GETDATAFETCH = async () => {
        try {
            const resp = await fetch(apiuri + 'v-3/signage-services')
            const result = await resp.json()
            setData(result?.data)
        } catch (error) {
            console.log(error);
            alert('Error get data....')
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
                    <RowRender data={data}/>
                    <GrafikRender/>
                </>
            }
        </div>
    )
}