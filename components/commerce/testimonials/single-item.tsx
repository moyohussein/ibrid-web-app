import React from "react";
import Image from "next/image";

import { Testimonial } from "@/types";

const SingleItem = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="shadow-testimonial bg-white rounded-[10px] py-7.5 px-4 sm:px-8.5 m-1">
      <div className="flex items-center gap-1 mb-5">
        <Image
          alt="star icon"
          height={15}
          src="/images/icons/icon-star.svg"
          width={15}
        />
        <Image
          alt="star icon"
          height={15}
          src="/images/icons/icon-star.svg"
          width={15}
        />
        <Image
          alt="star icon"
          height={15}
          src="/images/icons/icon-star.svg"
          width={15}
        />
        <Image
          alt="star icon"
          height={15}
          src="/images/icons/icon-star.svg"
          width={15}
        />
        <Image
          alt="star icon"
          height={15}
          src="/images/icons/icon-star.svg"
        />
      </div>

      <p className="text-dark mb-6">{testimonial.review}</p>

      <div className="flex items-center gap-4" role="listitem">
        <div className="w-12.5 h-12.5 rounded-full overflow-hidden">
          <Image
            alt={`${testimonial.authorName}, ${testimonial.authorRole}`}
            aria-hidden="false"
            className="w-12.5 h-12.5 rounded-full overflow-hidden"
            height={50}
            src={testimonial.authorImg}
            width={50}
          />
        </div>
        <div>
          <h5 className="font-medium text-dark text-base">
            {testimonial.authorName}
          </h5>
          <p className="text-sm">{testimonial.authorRole}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
