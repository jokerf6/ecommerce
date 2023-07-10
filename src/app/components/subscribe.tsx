import { cards } from "@/util/static";

export default function Subscripe() {
  return (
    <div className=" bg-primary w-full py-8  text-center flex flex-col justify-center items-center gap-8">
      <h1 className=" text-4xl">تابع المنتجات والخصومات علي انستجرام</h1>
      <div className=" flex gap-3 flex-wrap items-center justify-center">
        {cards.map((item) => {
          console.log(item);
          return <img src={item} />;
        })}
      </div>
      <h1>او اشترك لمتابعه اخر الاخبار</h1>
      <div className=" w-full flex gap-4 justify-center items-center">
        <input
          type="text"
          placeholder="Email Address..."
          className=" bg-transparent border-b-2 border-black outline-none w-1/3"
        />
        <button className="border-b-2 border-black px-2">Submit</button>
      </div>
    </div>
  );
}
