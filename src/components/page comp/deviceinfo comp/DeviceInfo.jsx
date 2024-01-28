"use client";
import { useEffect, useState } from "react";
import MemoryInfo from "./MemoryInfo";

const DeviceInfo = () => {
  const [deviceInfoData, setDeviceInfoData] = useState(null);

  useEffect(() => {
    const eventSource = new EventSource("https://api-fixiror.vercel.app/device-info");

    eventSource.onmessage = (event) => {
      try {
        const { success, data } = JSON.parse(event.data);
        console.log(success, data);
        setDeviceInfoData(data);
        // Modifikasi nilai deviceInfoData dan notifikasi berdasarkan kondisi dari data
      } catch (error) {
        console.error("Error parsing SSE data:", error.message);
      }
    };

    eventSource.onerror = (error) => {
      console.error("SSE Error:", error);
    };

    return () => {
      // Menutup koneksi SSE saat komponen di-unmount
      eventSource.close();
    };
  }, []);

  return (
    <>
      <section className="max-[1024px]:hidden">
        <div className="flex gap-6">
          <div className="flex flex-col mt-[2rem]">
            <div className="flex items-center">
                <h1 className="text-xl font-bold">Device Info</h1>
            </div>
            <div className="flex flex-col items-center mx-[2rem] mt-[2rem]">
              {deviceInfoData && (
                <>
                  <div className="flex gap-[5rem] items-center">
                    <div className="flex flex-col gap-[2rem]">
                        <h1>Product              :</h1>
                        <h1>Chip ID              :</h1>
                        <h1>Flash Size           :</h1>
                        <h1>Free Sketch Space    :</h1>
                    </div>
                    <div className="flex mx-[10rem] border border-y-[8rem] border-[#868686]"></div>
                    <div className="flex flex-col gap-[2rem]">
                        <p>WEMOS D1 MINI</p>
                        <h1> {deviceInfoData.chip_id}</h1>
                        <span className="flex gap-2">
                            <h1>
                                {deviceInfoData.flash_size}
                            </h1>
                            <p>
                                KB
                            </p>
                        </span>
                        <span className="flex gap-2">
                            <h1>
                                {deviceInfoData.free_sketch_space}
                            </h1>
                            <p>KB</p>
                        </span>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div>
                <MemoryInfo/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DeviceInfo;
