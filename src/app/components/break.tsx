export default function BreaK() {
  return (
    <div className="relative h-96  flex-row-reverse pt-20 hidden lg:flex xl:flex md:flex overflow-hidden">
      <div className=" z-20 w-1/2 p-16 flex flex-col gap-2 ">
        <h1 className=" text-6xl text-white font-bold">Coral</h1>
        <p className=" text-white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
          nesciunt asperiores quibusdam laudantium adipisci. Suscipit quaerat
          dolorem ea dicta sit incidunt nulla nobis velit fugiat, laborum
          laboriosam ad consequatur deleniti.
        </p>
        <button className=" text-black bg-white py-2 px-2">عرض الكولكشن</button>
      </div>
      <div className=" w-full absolute top-0 left-0 -z-10">
        <img src={"/images/cover.png"} />
      </div>
    </div>
  );
}
