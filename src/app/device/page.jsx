import DeviceInfo from '@/components/page comp/deviceinfo comp/DeviceInfo'
import React from 'react'

const page = () => {
  return (
    <>
        <section className="max-[1024px]:hidden">
            <div className="w-[950px] h-[800px] bg-white mt-[2rem] rounded-3xl shadow-xl shadow-slate-500">
                <div className="flex mt-[2rem] ml-[2rem]">
                    <div className="">
                        <DeviceInfo/>
                    </div>
                </div>
            </div>
            <div>test</div>
        </section>
        <section className="min-[1024px]:hidden max-[720px]:hidden">
            <div>
                <DeviceInfo/>
            </div>
        </section>
        <section className="min-[720px]:hidden">
            <div>
                <DeviceInfo/>
            </div>
        </section>
    </>
  )
}

export default page