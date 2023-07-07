import { types } from "@/util/static";

export default function Types() {
  return (
    <div className=" flex justify-between items-center py-6 px-32">
      {types.map((item) => {
        return (
          <div className=" text-2xl hover:underline cursor-pointer">{item}</div>
        );
      })}
    </div>
  );
}
