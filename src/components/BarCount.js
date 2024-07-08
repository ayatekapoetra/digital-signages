"use client"

import React, { useEffect, useState } from 'react'
import { assets } from '../../public/assets/images'
import Image from 'next/image'

export default function BarCount( { apiuri } ) {
    const [ data, setData ] = useState({
        breakdown: 0,

    })

    useEffect(() => {
        GETDATAFETCH()
    }, [])

    const GETDATAFETCH = async () => {
        try {
            const resp = await fetch(apiuri + 'v-3/signage-services/barcount')
            const result = await resp.json()
            setData(result)
        } catch (error) {
            alert('Error get data....')
        }
    }

    return (
        <div className="flex flex-row min-w-full space-x-4">
            <div className="flex flex-1 flex-row justify-between p-2 bg-red-600 shadow">
                <div className="">
                    <Image src={require('../../public/assets/images/IMG-DOZER.png')} alt='Equipment' width="200" height="200"/>
                </div>
                <div>
                    <p className="flex flex-1 text-white font-semibold">Breakdown</p>
                    <div className="flex float-end">
                        <p className="flex flex-1 text-white font-black text-8xl">{data?.breakdown}</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-1 flex-row justify-between p-2 bg-yellow-500 shadow">
                <div className="">
                    <Image src={require('../../public/assets/images/IMG-DOZER.png')} alt='Equipment' width="200" height="200"/>
                </div>
                <div>
                    <p className="flex flex-1 text-white font-semibold">Menunggu Teknisi</p>
                    <div className="flex float-end">
                        <p className="flex flex-1 text-white font-black text-8xl">{data?.waitteknisi}</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-1 flex-row justify-between p-2 bg-blue-400 shadow">
                <div className="">
                    <Image src={require('../../public/assets/images/IMG-DOZER.png')} alt='Equipment' width="200" height="200"/>
                </div>
                <div>
                    <p className="flex flex-1 text-white font-semibold">Menunggu Part</p>
                    <div className="flex float-end">
                        <p className="flex flex-1 text-white font-black text-8xl">{data?.waitpart}</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-1 flex-row justify-between p-2 bg-green-600 shadow">
                <div className="">
                    <Image src={require('../../public/assets/images/IMG-DOZER.png')} alt='Equipment' width="200" height="200"/>
                </div>
                <div>
                    <p className="flex flex-1 text-white font-semibold">Dalam Pengerjaan</p>
                    <div className="flex float-end">
                        <p className="flex flex-1 text-white font-black text-8xl">{data?.ditangani}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
