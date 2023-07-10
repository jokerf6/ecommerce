import { types } from "@/util/static";

export default function Types() {
  return (
    <div className=" flex justify-center items-center py-6  gap-8 ">
      {types.map((item) => {
        return (
          <div className=" xl:text-xl lg:text-lg md:text-sm sm:text-xs text-xs  hover:underline cursor-pointer hidden lg:block xl:block md:block">
            {item}
          </div>
        );
      })}
    </div>
  );
}
