export default function Ratings({ rate }: any) {
  return (
    <div className="star-ratings w-fit">
      <div className="fill-ratings" style={{ width: rate }}>
        <span>★★★★★</span>
      </div>
      <div className="empty-ratings">
        <span>★★★★★</span>
      </div>
    </div>
  );
}
