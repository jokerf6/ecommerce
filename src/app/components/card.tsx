export default function Card() {
  return (
    <div
      className="rounded overflow-hidden shadow-lg text-center cursor-pointer"
      style={{ minWidth: "250px", maxWidth: "250px" }}
    >
      <img className="w-full" src="/images/clothes1.jpg" alt="Card Image" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          تيشيرت مطبوع Wasp Nest تلبيس اوفر سايز - اسود{" "}
        </div>
        <p className="text-gray-700 text-base">LE 349.00</p>
      </div>
    </div>

    // <div
    //   className=" flex flex-col w-80 text-center"
    //   style={{ minWidth: "200px" }}
    // >
    //   <img src="/images/clothes1.jpg" />
    //   <p>تيشيرت مطبوع Wasp Nest تلبيس اوفر سايز - اسود </p>
    //   <span>LE 349.00</span>
    // </div>
  );
}
