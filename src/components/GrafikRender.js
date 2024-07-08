import Image from 'next/image'
import React, { useEffect, useMemo, useState } from 'react'
import moment from 'moment'
import 'moment/locale/id'

export default function GrafikRender() {
    const [ tanggal, setTanggal ] = useState(moment().format('dddd, DD MMMM YYYY'))
    const [ waktu, setWaktu ] = useState(moment().format('HH:mm:ss'))
    const [ countRefresh, setCountRefersh ] = useState(moment().add(30, 'minute').format('HH:mm:ss'))

    useEffect(() => {
        setDataWaktu()
    }, [waktu])

    const setDataWaktu = () => {
        setInterval(() => {
            setWaktu(moment().format('HH:mm:ss'))
            setTanggal(moment().format('dddd, DD MMMM YYYY'))
            if(countRefresh === waktu){
                setCountRefersh(moment().add(30, 'minute').format('HH:mm:ss'))
                window.location = window.location
            }
        }, 1000)
    }

    return (
        <div className='w-1/4 bg-slate-50'>
            <div className='flex-1'>
                <Image src='/assets/images/safety-first.jpeg' width={500} height={500}/>
                <div className='align-middle justify-center text-center border-2 m-2'>
                    <p className='font-serif font-semibold text-xl'>{tanggal}</p>
                    <p className='font-mono font-semibold text-5xl'>{waktu}</p>
                </div>
            </div>
        </div>
    )
}
