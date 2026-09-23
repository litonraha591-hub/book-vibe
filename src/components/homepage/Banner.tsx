
import Image from "next/image";
import React from "react";
import banner from "@/assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-100 via-white to-green-50 px-6 py-10 shadow-xl md:px-12 md:py-14">
          
          {/* Decorative Circle */}
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-green-200/40 blur-3xl" />

          <div className="relative grid items-center gap-10 md:grid-cols-2">
            
            {/* Content */}
            <div className="space-y-6">
              <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                📚 Discover Your Next Book
              </span>

              <h1 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
                Books to freshen up{" "}
                <span className="text-green-600">
                  your bookshelf
                </span>
              </h1>

              <p className="max-w-lg text-base leading-7 text-slate-600 md:text-lg">
                Explore a collection of amazing books and discover your next
                favorite story. Find something inspiring for every mood and
                moment.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="btn btn-success rounded-full px-7 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  View Books →
                </button>

                <button className="btn btn-outline rounded-full px-7 transition-all duration-300 hover:scale-105">
                  Explore More
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="relative mx-auto w-full max-w-md">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={banner}
                  alt="Books on a bookshelf"
                  width={600}
                  height={500}
                  priority
                  className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white px-5 py-4 shadow-xl">
                <p className="text-sm text-slate-500">Find your</p>
                <p className="font-bold text-slate-900">Next Favorite 📖</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
