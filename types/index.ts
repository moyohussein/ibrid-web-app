import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};


export type Category = {
  title: string;
  id: number;
  img: string;
};


export type Testimonial = {
  review: string;
  authorName: string;
  authorRole: string;
  authorImg: string;
};


export type Product = {
  title: string;
  reviews: number;
  price: number;
  discountedPrice: number;
  id: number;
  imgs?: {
    thumbnails: string[];
    previews: string[];
  };
};
