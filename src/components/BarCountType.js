"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

export default function BarCountType( { apiuri, kategori } ) {
    const [ countFetch, setCountFetch ] = useState(0)
    const [ data, setData ] = useState({
        breakdown: 0,
        waitteknisi: 0,
        waitpart: 0,
        ditangani: 0
    })

    useEffect(() => {
        GETDATAFETCH()
        intervalFetchData()
    }, [countFetch])

    const GETDATAFETCH = async () => {
        try {
            const resp = await fetch(apiuri + 'v-3/signage-services/barcount/type/' + kategori)
            const result = await resp.json()
            console.log(result);
            setData(result)
        } catch (error) {
            console.log(error);
        }
    }

    const intervalFetchData = () => {
        setTimeout(() => {
            GETDATAFETCH()
            setCountFetch(countFetch + 1)
        }, 15 * (60 * 1000));
    }

    return (
        <div className="flex flex-row min-w-full space-x-4">
            <div className="flex flex-1 flex-row justify-between p-2 border-2 border-gray-400 rounded-lg bg-red-600 shadow">
                <div className="flex flex-1">
                    <Image className='absolute xl:size-36 lg:size-16 md:size-12 sm:size-12 hidden md:block' src={require('../../public/assets/images/IMG-DOZER.png')} alt='Equipment' width="200" height="200"/>
                </div>
                <div>
                    <p className="flex text-white font-semibold">Total Breakdown</p>
                    <div className="flex float-end">
                        <p className="flex flex-1 text-white font-black xl:text-8xl">{data?.breakdown}</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-1 flex-row justify-between p-2 border-2 border-gray-400 rounded-lg bg-yellow-500 shadow">
                <div className="flex flex-1">
                    <Image className='absolute xl:size-36 lg:size-16 md:size-12 sm:size-12 hidden md:block' src={require('../../public/assets/images/IMG-DOZER.png')} alt='Equipment' width="200" height="200"/>
                </div>
                <div>
                    <p className="flex text-white font-semibold">Menunggu Teknisi</p>
                    <div className="flex float-end">
                        <p className="flex flex-1 text-white font-black xl:text-8xl">{data?.waitteknisi}</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-1 flex-row justify-between p-2 border-2 border-gray-400 rounded-lg bg-blue-400 shadow">
                <div className="flex flex-1">
                    <Image className='absolute xl:size-36 lg:size-16 md:size-12 sm:size-12 hidden md:block' src={require('../../public/assets/images/IMG-DOZER.png')} alt='Equipment' width="200" height="200"/>
                </div>
                <div>
                    <p className="flex text-white font-semibold">Menunggu Part</p>
                    <div className="flex float-end">
                        <p className="flex flex-1 text-white font-black xl:text-8xl">{data?.waitpart}</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-1 flex-row justify-between p-2 border-2 border-gray-400 rounded-lg bg-green-600 shadow">
                <div className="flex flex-1">
                    <Image className='absolute xl:size-36 lg:size-16 md:size-12 sm:size-12 hidden md:block' src={require('../../public/assets/images/IMG-DOZER.png')} alt='Equipment' width="200" height="200"/>
                </div>
                <div>
                    <p className="flex text-white font-semibold">Dalam Pengerjaan</p>
                    <div className="flex float-end">
                        <p className="flex flex-1 text-white font-black xl:text-8xl">{data?.ditangani}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
