import Image from 'next/image'
import React, { useEffect, useMemo, useState } from 'react'
import moment from 'moment'
import 'moment/locale/id'

export default function GrafikRender() {
    const [ tanggal, setTanggal ] = useState(moment().format('dddd, DD MMMM YYYY'))
    const [ waktu, setWaktu ] = useState(moment().format('HH:mm:ss'))
    const [ countRefresh, setCountRefersh ] = useState(moment().add(1, 'h').format('HH:mm:ss'))

    useEffect(() => {
        setDataWaktu()
    }, [waktu])

    const setDataWaktu = () => {
        setInterval(() => {
            setWaktu(moment().format('HH:mm:ss'))
            setTanggal(moment().format('dddd, DD MMMM YYYY'))
            if(countRefresh === waktu){
                window.location = window.location
            }
        }, 1000)
    }

    return (
        <div className='max-h-fit w-1/4 bg-white'>
            <Image src='/assets/images/safety-first.jpeg' width={500} height={500}/>
            <div className='align-middle justify-center text-center'>
                <p className='font-serif font-semibold text-xl'>{tanggal}</p>
                <p className='font-mono font-semibold text-5xl'>{waktu}</p>
            </div>
        </div>
    )
}
