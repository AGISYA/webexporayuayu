"use client";

import Banner from "@/components/organisems/banner";
import FormTheBlog from "@/components/organisems/formtheblog";
import Carousel from "@/components/organisems/herocarousel";
import Product from "@/components/organisems/product";

import FeedProduct from "@/components/organisems/feedproduct";
import Footer from "@/components/organisems/footer";
import Navbar from "@/components/organisems/navbar";

const Page = () => {
  return (
    <div className="relative w-full h-screen bg-black text-white">
      <Navbar />
      <Carousel />
      <Banner />
      <Product />
      <FormTheBlog />
      <FeedProduct />
      <Footer />
    </div>
  );
};

export default Page;
