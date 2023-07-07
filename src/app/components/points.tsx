import { clothes } from "@/util/static";

export default function Points({ index }: any) {
  return (
    <div className=" flex w-full justify-center items-center mt-3">
      <div className=" flex gap-2">
        {clothes.map((item, idx) => {
          return (
            <div
              className={`border border-black rounded-full ${
                idx === index ? "bg-black" : "bg-white"
              } py-2 px-2`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
