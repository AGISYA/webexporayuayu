"use client";

import Image from "next/image";

const products = [
  {
    title: "Produk 1",
    imageSrc: "/images/chicken6.jpg",
    alt: "Product 1",
  },
  {
    title: "Produk 2",
    imageSrc: "/images/chicken50.jpg",
    alt: "Product 2",
  },
  {
    title: "Produk 3",
    imageSrc: "/images/banner7.jpg",
    alt: "Product 3",
  },
  {
    title: "Produk 4",
    imageSrc: "/images/banner10.jpg",
    alt: "Product 4",
  },
  {
    title: "Produk 5",
    imageSrc: "/images/chicken30.jpg",
    alt: "Product 5",
  },
  {
    title: "Produk 6",
    imageSrc: "/images/banner18.jpg",
    alt: "Product 6",
  },
  {
    title: "Produk 7",
    imageSrc: "/images/chicken1.jpg",
    alt: "Product 7",
  },
  {
    title: "Produk 8",
    imageSrc: "/images/chicken54.jpg",
    alt: "Product 8",
  },
];

const Product = () => {
  return (
    <section className="py-16 text-center bg-white">
      {/* Title: Enak dan Lembut */}
      <h1 className="text-4xl font-semibold text-gray-800 mb-6">
        Enak dan Lembut
      </h1>

      {/* Subtitle: Menu Kami */}
      <h2 className="text-3xl font-medium text-gray-600 mb-4">Menu Kami</h2>

      {/* Description */}
      <p className="text-lg text-gray-500 mx-auto mb-8 max-w-2xl">
        Nikmati pilihan menu kami yang terbuat dengan bahan-bahan terbaik dan
        rasa yang menggugah selera. Setiap hidangan disiapkan dengan penuh cinta
        dan perhatian agar memberikan pengalaman kuliner yang tak terlupakan.
      </p>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            {/* Gambar Produk */}
            <div className="w-64 h-64 overflow-hidden rounded-lg shadow-lg mb-4">
              <Image
                src={product.imageSrc}
                alt={product.alt}
                className="w-full h-full object-cover"
                width={400}
                height={300}
              />
            </div>
            {/* Title Produk */}
            <h3 className="text-xl font-semibold text-gray-700">
              {product.title}
            </h3>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <a
          href="#"
          className="inline-block px-8 py-3 text-lg font-semibold text-white bg-black rounded-lg hover:bg-slate-900 transition"
        >
          Lihat Semua Menu
        </a>
      </div>
    </section>
  );
};

export default Product;
