"use client"

import React, { useEffect, useMemo, useState } from 'react'
import RowRender from './RowRender'
import GrafikRender from './GrafikRender'

export default function ListRenders({ apiuri }) {
    console.log("CLIENT", apiuri);
    const [ hitApi, setHitApi ] = useState(0)
    const [ data, setData ] = useState([])
    
    useEffect(() => {
        GETDATAFETCH()
    }, [])

    useEffect(() => {
        INTERVALNEWDATA()
    }, [hitApi])
    
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

    const INTERVALNEWDATA = () => {
        setTimeout( async() => {
            GETDATAFETCH()
            setHitApi(hitApi + 1)
            console.log("UPDATE API-----");
        }, (10 * 60) * 1000);
    }

    console.log("hitApi", hitApi);

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