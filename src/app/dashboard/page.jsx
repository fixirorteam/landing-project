import DeviceCard from "@/components/page comp/dashboard comp/card/DeviceCard"
import SensorCard from "@/components/page comp/dashboard comp/card/SensorCard"
import UsersCard from "@/components/page comp/dashboard comp/card/UsersCard"
import UsersChart from "@/components/page comp/dashboard comp/chart/UsersChart"



const page = () => {
  return (
    <>
        <section className="max-[1024px]:hidden">
            <div className="flex flex-col gap-[8rem]">
                <div className="flex mt-[2rem] ml-[2rem] gap-8">
                    <div className="">
                        <UsersCard/>
                    </div>
                    <div className="">
                        <DeviceCard/>
                    </div>
                    <div className="">
                        <SensorCard/>
                    </div>
                </div>
                <div className="">
                    <UsersChart/>
                </div>
            </div>
            
        </section>
        <section className="min-[1024px]:hidden max-[720px]:hidden">
            <div>
                test
            </div>
        </section>
        <section className="min-[720px]:hidden">
            <div>
               test
            </div>
        </section>
    </>
  )
}

export default page