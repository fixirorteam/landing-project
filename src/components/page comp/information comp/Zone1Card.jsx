"use client";
import { useEffect, useState } from "react";
import { MdLocalFireDepartment, MdOutlineMeetingRoom } from "react-icons/md";
import { TbFireHydrantOff } from "react-icons/tb";

const Notification = ({ message, icon }) => (
  <div className="notification flex items-center">
    <span className="icon">{icon}</span>
    <p>{message}</p>
  </div>
);

const Zone1Card = () => {
  const [flameSensorData, setFlameSensorData] = useState("loading");
  const [notification, setNotification] = useState("loading");

  useEffect(() => {
    const eventSource = new EventSource("http://localhost:5000/flame-sensor");

    eventSource.onmessage = (event) => {
      try {
        const { status, data } = JSON.parse(event.data);
        console.log(status, data);

        // Modifikasi nilai flameSensorData dan notifikasi berdasarkan kondisi dari data
        if (data) {
          setFlameSensorData("");
          setNotification({
            message: "Tidak ada API",
            icon: <TbFireHydrantOff />,
          });
        } else {
          setFlameSensorData("");
          setNotification({
            message: "Ada API",
            icon: <MdLocalFireDepartment />,
          });
        }
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
    <section className="max-[1024px]:hidden">
      <div className="flex flex-col mx-7 gap-9">
        <div className="flex gap-9">
          <div className="flex flex-col w-[250px] h-[200px] bg-slate-200 mt-[2rem] rounded-3xl shadow-lg shadow-[#286468]">
            <div className="flex flex-col gap-5 items-center mt-[2rem]">
              <div className="flex items-center">
                <MdOutlineMeetingRoom className="w-[40px] h-[40px]" />
                <h1 className="text-base">ZONE 1</h1>
              </div>
              <h1 className="">{flameSensorData}</h1>
              <div className="flex items-center">
                {notification && (
                  <Notification
                    message={notification.message}
                    icon={notification.icon}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[250px] h-[200px] bg-slate-200 mt-[2rem] rounded-3xl shadow-lg shadow-[#286468]">
            <div className="flex flex-col gap-5 items-center mt-[2rem]">
              <div className="flex items-center">
                <MdOutlineMeetingRoom className="w-[40px] h-[40px]" />
                <h1 className="text-base">ZONE 2</h1>
              </div>
              <h1 className="">{flameSensorData}</h1>
              <div className="flex items-center">
                {notification && (
                  <Notification
                    message={notification.message}
                    icon={notification.icon}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[250px] h-[200px] bg-slate-200 mt-[2rem] rounded-3xl shadow-lg shadow-[#286468]">
            <div className="flex flex-col gap-5 items-center mt-[2rem]">
              <div className="flex items-center">
                <MdOutlineMeetingRoom className="w-[40px] h-[40px]" />
                <h1 className="text-base">ZONE 3</h1>
              </div>
              <h1 className="">{flameSensorData}</h1>
              <div className="flex items-center">
                {notification && (
                  <Notification
                    message={notification.message}
                    icon={notification.icon}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-9">
          <div className="flex flex-col w-[250px] h-[200px] bg-slate-200 mt-[2rem] rounded-3xl shadow-lg shadow-[#286468]">
            <div className="flex flex-col gap-5 items-center mt-[2rem]">
              <div className="flex items-center">
                <MdOutlineMeetingRoom className="w-[40px] h-[40px]" />
                <h1 className="text-base">ZONE 4</h1>
              </div>
              <h1 className="">{flameSensorData}</h1>
              <div className="flex items-center">
                {notification && (
                  <Notification
                    message={notification.message}
                    icon={notification.icon}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[250px] h-[200px] bg-slate-200 mt-[2rem] rounded-3xl shadow-lg shadow-[#286468]">
            <div className="flex flex-col gap-5 items-center mt-[2rem]">
              <div className="flex items-center">
                <MdOutlineMeetingRoom className="w-[40px] h-[40px]" />
                <h1 className="text-base">ZONE 5</h1>
              </div>
              <h1 className="">{flameSensorData}</h1>
              <div className="flex items-center">
                {notification && (
                  <Notification
                    message={notification.message}
                    icon={notification.icon}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[250px] h-[200px] bg-slate-200 mt-[2rem] rounded-3xl shadow-lg shadow-[#286468]">
            <div className="flex flex-col gap-5 items-center mt-[2rem]">
              <div className="flex items-center">
                <MdOutlineMeetingRoom className="w-[40px] h-[40px]" />
                <h1 className="text-base">ZONE 6</h1>
              </div>
              <h1 className="">{flameSensorData}</h1>
              <div className="flex items-center">
                {notification && (
                  <Notification
                    message={notification.message}
                    icon={notification.icon}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Zone1Card;
