"use client"
import { InfoCircle } from 'iconsax-react'
import moment from 'moment'
import 'moment/locale/id'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function RowRender( { data } ) {
    const [ state, setState ] = useState(data)
    const [ count, setCount ] = useState(0)

    useEffect(() => {
        reorderData()
    }, [count])

    const reorderData = () => {
        setTimeout(() => {
            let all = []
            let first = state[0]

            var tmp = state.filter( f => f?.urut != first?.urut)
            for (const obj of tmp) {
                all.push(obj)
            }

            all.push(first)

            setState(all)
            setCount(count + 1)
        }, 5 * 1000);
    }

    return (
        <div className='flex flex-1 flex-col bg-white'>
            {
                state?.map((m, i) => {
                    switch (m?.equipment?.manufaktur) {
                        case "Caterpillar":
                            var imageUri = '/assets/images/caterpillar.png'
                            break;
                        case "Mitsubishi":
                            var imageUri = '/assets/images/Mitsubishi.png'
                            break;
                        case "HITACHI":
                            var imageUri = '/assets/images/hitachi.png'
                        case "JCB":
                            var imageUri = '/assets/images/jbc.png'
                            break;
                        case "Kobelco":
                            var imageUri = '/assets/images/Kobelco.png'
                            break;
                        case "Sumitomo":
                            var imageUri = '/assets/images/sumitomo.png'
                            break;
                        case "HONGYAN":
                            var imageUri = '/assets/images/hongyan.png'
                            break;
                        default:
                            var imageUri = '/assets/images/hidromek.png'
                            break;
                    }

                    switch (m?.status) {
                        case 0:
                            var colorText = 'font-semibold font-mono text-xl text-[#be123c]'
                            break;
                        case 1:
                            var colorText = 'font-semibold font-mono text-xl text-[#c2410c]'
                            break;
                        case 2:
                            var colorText = 'font-semibold font-mono text-xl text-[#15803d]'
                            break;
                    
                        default:
                            var colorText = 'font-semibold font-mono text-xl text-[#0369a1]'
                            break;
                    }
                    return (
                        <div key={m?.id} className='flex flex-1 py-2 space-x-2 align-middle border-b-2'>
                            <div className='w-1/5'>
                                <p className='font-black text-2xl font-sans'>{m?.nama}</p>
                                <div className='align-middle justify-center pt-2 w-2/5 bg-slate-100'>
                                    <Image src={imageUri} width={180} height={25}/>
                                </div>
                            </div>
                            <div className='w-3/5 p-1 flex'>
                                <ol className='flex flex-1'>
                                    {
                                        m.items?.map( v => {
                                            return (
                                                <li key={v.id} className='flex-1 space-x-1'>
                                                    <div className='flex align-middle flex-row space-x-2'>
                                                        <InfoCircle size="23" color="#FF8A65" variant="Bold"/>
                                                        <span className='font-mono font-semibold'>{(v.problem_issue)?.toUpperCase()}</span>
                                                    </div>
                                                    <div className='flex justify-between'>
                                                        <span className='font-mono text-sm'>{ moment(m?.breakdown_at).fromNow() }</span>
                                                        <span className='font-serif text-sm bg-black text-white px-2 rounded-full'>{ m.lokasi?.nama }</span>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                    
                                </ol>
                            </div>
                            <div className='w-1/5 flex flex-col'>
                                <strong className={colorText}>{m?.sts_txt}</strong>
                                <span className='font-mono font-semibold text-sm'>{ moment(m?.breakdown_at).format('dddd, DD MMM YYYY') }</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
