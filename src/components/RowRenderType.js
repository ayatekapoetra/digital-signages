"use client"
import { Airdrop, Calendar, Map } from 'iconsax-react'
import moment from 'moment'
import 'moment/locale/id'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function RowRenderType( { data } ) {
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
                    switch (m?.manufaktur) {
                        case "Caterpillar":
                            var imageUri = '/assets/images/caterpillar.png'
                            break;
                        case "Mitsubishi":
                            var imageUri = '/assets/images/Mitsubishi-900-270.png'
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
                            var panelColor = 'w-full flex justify-center items-center bg-[#e59f09] rounded-b-md'
                            var colorText = 'font-semibold font-mono text-xl text-[#be123c]'
                            var avatar = '/assets/images/wait-teknisi.png'
                            break;
                        case 1:
                            var panelColor = 'w-full flex justify-center items-center bg-[#0671cf] rounded-b-md' 
                            var colorText = 'font-semibold font-mono text-xl text-[#c2410c]'
                            var avatar = '/assets/images/wait-part.png'
                            break;
                        case 2:
                            var panelColor = 'w-full flex justify-center items-center bg-[#15803d] rounded-b-md'
                            var colorText = 'font-semibold font-mono text-xl text-[#15803d]'
                            var avatar = '/assets/images/sedang-services.png'
                            break;
                    
                        default:
                            var panelColor = 'w-full flex justify-center items-center bg-[#0369a1] rounded-b-md'
                            var colorText = 'font-semibold font-mono text-xl text-[#0369a1]'
                            var avatar = '/assets/images/wait-teknisi.png'
                            break;
                    }
                    console.log(panelColor);
                    
                    return (
                        <div key={m?.id} className='flex flex-1 py-2 space-x-2 align-middle border-b-2'>
                            <div className='w-1/5 flex flex-col items-center justify-center border-2 rounded-md'>
                                <div className='flex flex-1 flex-col items-center justify-center'>
                                    <p className='font-black font-dosis xl:text-4xl md:text-lg sm:text-md'>{m?.kode}</p>
                                    <div className='flex align-middle justify-center'>
                                        <Image src={imageUri} width={150} height={50}/>
                                    </div>
                                </div>
                                <div className={panelColor}>
                                    <span className='text-zinc-50 text-center font-dosis font-bold'>
                                        { moment(m?.breakdown_at).fromNow() }
                                    </span>
                                </div>
                            </div>
                            <div className='w-4/5 p-1 flex-1'>
                                {
                                    m.items.map( item => {
                                        return (
                                            <div key={item.id} className='flex flex-row border-2 border-dashed rounded-lg border-cyan-950 my-2 p-2'>
                                                <Image className='mr-3 size-24' src={avatar} width={80} height={20}/>
                                                <div className='flex flex-1 flex-col'>
                                                    <h1 className='font-basley font-semibold'>{item.kode_wo}</h1>
                                                    <p className='text-xl font-semibold leading-none'>{item.problem_issue}</p>
                                                    <div className='flex flex-1 flex-col sm:flex-row'>
                                                        <div className='flex flex-1 flex-row mt-2 items-center'>
                                                            <Map size="22" color={m.sts_color} variant='Broken'/>
                                                            <span className='font-oswald ml-2 leading-none'>{m.lokasi}</span>
                                                        </div>
                                                        <div className='flex flex-1 flex-row mt-2 items-center'>
                                                            <Airdrop size="22" color={m.sts_color} variant='Broken'/>
                                                            <span className='font-oswald ml-2'>{m.sts_txt}</span>
                                                        </div>
                                                        <div className='flex flex-1 flex-row mt-2 items-center'>
                                                            <Calendar size="22" color={m.sts_color} variant='Outline'/>
                                                            <span className='font-oswald ml-2 leading-none'>{ moment(m?.breakdown_at).format('ddd, DD MMMM YYYY') }</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
