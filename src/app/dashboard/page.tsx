import Nav from "../components/nav";
import PersonalInfo from "./components/personalInfo";

export default function Dashboard() {
  return (
    <main className=" w-screen h-screen px-20 py-4 mt-0 ">
      <Nav />
      <hr className=" mt-5" />
      <PersonalInfo />
    </main>
  );
}
