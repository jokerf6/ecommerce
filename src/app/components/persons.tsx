import { person } from "@/util/static";

export default function Persons() {
  return (
    <div className=" flex w-full justify-between px-10 items-center flex-wrap">
      {person.map((item) => {
        return (
          <div className="flex flex-col items-center justify-center cursor-pointer">
            <img
              src={item.image}
              className=" rounded-full"
              style={{ width: "100px", height: "100px" }}
            />
            <h5>{item.title}</h5>
            <p
              className=" text-center"
              style={{ width: "150px", alignItems: "center" }}
            >
              {item.brief}
            </p>
          </div>
        );
      })}
    </div>
  );
}
