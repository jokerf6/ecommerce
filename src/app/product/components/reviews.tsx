"use client";
import Comments from "./comments";
import RateBox from "./rateBox";
import Ratings from "./ratings";
import StarRating from "./ratings";
import StarRating2 from "./startRating";

export default function Reviews() {
  return (
    <div className=" w-full flex flex-col justify-center items-center mt-20">
      <h1 className=" text-4xl font-bold bg-slate-200 w-full text-center">
        تقيمات المشترون
      </h1>
      <div className="   flex flex-col gap-4 w-full py-2 xl:flex-row-reverse lg:flex-row-reverse md:flex-row-reverse items-center justify-center">
        <div
          className="   relative flex flex-col gap-4"
          style={{
            width: "90%",
          }}
          dir="rtl"
        >
          <h1>التقييم الاجمالي </h1>
          <div className=" flex gap-2 items-center">
            <Ratings rate="80%" />
            <span dir="rtl"> 4 من 5 </span>
          </div>
          <span dir="rtl"> اجمالي عدد التقييمات 30 </span>
          <div className=" flex justify-between items-center    ">
            <span>5 نجوم</span>
            <div className=" w-32 bg-gray-200  ">
              <div className="h-6 bg-gold  " style={{ width: `40%` }}></div>
            </div>
            <span>60%</span>
          </div>
          <div className=" flex justify-between items-center    ">
            <span>4 نجوم</span>
            <div className=" w-32 bg-gray-200  ">
              <div className="h-6 bg-gold  " style={{ width: `40%` }}></div>
            </div>
            <span>60%</span>
          </div>
          <div className=" flex justify-between items-center    ">
            <span>3 نجوم</span>
            <div className=" w-32 bg-gray-200  ">
              <div className="h-6 bg-gold  " style={{ width: `40%` }}></div>
            </div>
            <span>60%</span>
          </div>
          <div className=" flex justify-between items-center    ">
            <span>2 نجوم</span>
            <div className=" w-32 bg-gray-200  ">
              <div className="h-6 bg-gold  " style={{ width: `40%` }}></div>
            </div>
            <span>60%</span>
          </div>
          <div className=" flex justify-between items-center    ">
            <span>1 نجوم</span>
            <div className=" w-32 bg-gray-200  ">
              <div className="h-6 bg-gold  " style={{ width: `40%` }}></div>
            </div>
            <span>60%</span>
          </div>
        </div>
        <hr className="   border  border-slate-200 xl:h-96 lg:h-96 md:h-96 " />
        <Comments />
      </div>

      <RateBox />
    </div>
  );
}
