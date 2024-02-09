import DeviceInfo from '@/components/page comp/deviceinfo comp/DeviceInfo'
import ModalForm from '@/components/page comp/deviceinfo comp/ModalForm'
import React from 'react'

const page = () => {
  return (
    <>
        <section className="max-[1024px]:hidden">
            <div className="flex flex-col">
                <div className="">
                    <div className="">
                        <ModalForm/>
                    </div>
                </div>
                <div className="flex w-[900px] h-[800px] bg-white mt-[2rem] rounded-3xl shadow-xl shadow-slate-500">
                    
                    <div className="mt-[2rem] ml-[2rem]">
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