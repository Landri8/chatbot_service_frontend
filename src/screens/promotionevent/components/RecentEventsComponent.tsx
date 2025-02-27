import React from 'react'
import Template from '../../../components/Template'

type Props = {
    events: any[]
}

const RecentEventsComponent: React.FC<Props> = ({events}) => {
  return (
    <Template classes='mt-16'>
        <h2 className='text-[18px] lg:text-[24px] mb-4 mx-auto font-medium'>Recent Events</h2>
        {
            events.map(event => (
                <div key={event.id} className='mb-8'>
                    <p className='text-[12px] text-center text-zinc-400 mb-2'>__{event.year}__</p>
                    <div className='flex flex-col-reverse md:flex-col gap-4 items-center'>
                        <a className=' md:ms-auto hover:underline font-medium text-[14px]' href="#">See All</a>

                        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4'>
                            {
                                event.events.map((e: any, i: number) => (
                                    <div key={i} className='w-full h-[200px] md:h-[380px] relative rounded-[14px] overflow-hidden'>
                                        <img className='w-full h-full object-cover' src={e.img} alt="" />
                                        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black opacity-60'></div>

                                        <div className='absolute left-0 right-0 bottom-4 px-4'>
                                            <p className='text-[18px] md:text-[24px] text-white mb-1'>{e.title}</p>
                                            <p className='text-[12px] md:text-[15px] text-white'>{e.timeline}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            ))
        }
    </Template>
  )
}

export default RecentEventsComponent