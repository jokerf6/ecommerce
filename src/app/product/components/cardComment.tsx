import Ratings from "./ratings";

export default function CardComments() {
  return (
    <div
      className="rounded overflow-hidden shadow-lg text-center"
      style={{ minWidth: "250px", maxWidth: "250px" }}
    >
      <Ratings rate={40} />
      <div className="font-bold text-xl mb-2">
        حلو جدا والخامه كويسه والشحن جيه بسرعه جدا{" "}
      </div>
    </div>
  );
}
