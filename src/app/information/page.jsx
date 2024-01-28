import Zone1Card from "@/components/page comp/information comp/Zone1Card";


const Page = () => {
  

  return (
    <>
        <section className="max-[1024px]:hidden">
            <div className="w-[950px] h-[600px] bg-white mt-[2rem] rounded-3xl shadow-xl shadow-slate-500">
                <div className="flex mt-[2rem] ml-[2rem]">
                    <div className="">
                        <Zone1Card/>
                    </div>
                </div>
            </div>
            <div>test</div>
        </section>
        <section className="min-[1024px]:hidden max-[720px]:hidden">
            <div>
                <Zone1Card/>
            </div>
        </section>
        <section className="min-[720px]:hidden">
            <div>
                <Zone1Card/>
            </div>
        </section>
    </>
  );
};

export default Page;