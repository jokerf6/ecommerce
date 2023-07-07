import Image from "next/image";
import Nav from "./components/nav";
import Types from "./components/types";
import Collection from "./components/collection";
import Points from "./components/points";
import Persons from "./components/persons";

export default function Home() {
  return (
    <main className="  ">
      <div className=" w-full h-screen ">
        <div className="py-5 bg-custom bg-cover bg-center w-full h-full px-20">
          <Nav />
          <hr className=" mt-2" />
          <Types />
          <Collection />
        </div>
      </div>
      <div className=" w-full text-center mt-8">
        <h1 className=" mb-8 text-3xl">أقسام قد تعجبك</h1>
        <Persons />
      </div>
    </main>
  );
}
