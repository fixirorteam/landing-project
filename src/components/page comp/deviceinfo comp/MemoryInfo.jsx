"use client";
import { useEffect, useState } from "react";

const MemoryInfo = () => {
  const [MemoryInfo, setMemoryInfoData] = useState(null);

  useEffect(() => {
    const eventSource = new EventSource("http://localhost:5000/memory");

    eventSource.onmessage = (event) => {
      try {
        const { success, data } = JSON.parse(event.data);
        console.log(success, data);
        setMemoryInfoData(data);
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
                <h1 className="text-xl font-bold">Memory Info</h1>
            </div>
            <div className="flex flex-col gap-5 items-center mx-[2rem] mt-[2rem]">
              {MemoryInfo && (
                <>
                  <div className="flex gap-[5rem] items-center">
                    <div className="flex flex-col gap-[2rem]">
                        <h1>Free Memory              :</h1>
                        <h1>Block Memory             :</h1>
                    </div>
                    <div className="flex mx-[12rem] border border-y-[6rem] border-[#868686]"></div>
                    <div className="flex flex-col gap-[2rem]">
                        <span className="flex gap-2">
                            <h1>
                                {MemoryInfo.freeHeap}
                            </h1>
                            <p>
                                KB
                            </p>
                        </span>
                        <span className="flex gap-2">
                            <h1>
                                {MemoryInfo.maxFreeBlockSize}
                            </h1>
                            <p>KB</p>
                        </span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MemoryInfo;
