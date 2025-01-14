// pages/blogs.js
import Footer from "@/components/organisems/footer";
import Navbar from "@/components/organisems/navbar";
import Link from "next/link";
import Image from "next/image";

const Blogs = () => {
  // Data blog with images
  const componentsblogs = [
    {
      title: "Soto Betawi: Kenikmatan Kuliner Betawi yang Otentik",
      date: "10 Januari 2025",
      category: "Kuliner Nusantara",
      excerpt:
        "Soto Betawi adalah hidangan khas Jakarta yang memadukan santan gurih dengan daging sapi yang empuk...",
      url: "/blogs/soto-betawi-otentik",
      image: "/images/soto betawi.jpg",
    },
    {
      title: "Mie Goreng: Lezatnya Mie dengan Sentuhan Nusantara",
      date: "12 Januari 2025",
      category: "Resep Favorit",
      excerpt:
        "Mie goreng menjadi pilihan hidangan yang cepat dan penuh rasa. Pelajari cara membuatnya di rumah!",
      url: "/blogs/mie-goreng-nusantara",
      image: "/images/DSCF0479.jpg",
    },
    {
      title: "Rahasia Kelezatan Sate Madura",
      date: "14 Januari 2025",
      category: "Kuliner Daerah",
      excerpt:
        "Sate Madura adalah ikon kuliner Indonesia dengan bumbu kacang khas yang sulit dilupakan...",
      url: "/blogs/sate-madura",
      image: "/images/sate madura.jpg",
    },
    {
      title: "Es Teh Pandan: Minuman Segar dengan Aroma Wangi",
      date: "16 Januari 2025",
      category: "Minuman Segar",
      excerpt:
        "Es teh pandan adalah inovasi minuman yang menyegarkan dengan aroma khas pandan yang menenangkan...",
      url: "/blogs/es-teh-pandan",
      image: "/images/es teh pandan.jpg",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-6 bg-white text-black">
        <h1 className="text-4xl font-semibold mb-6 mt-16">
          Blog Kuliner Ayu Ayu
        </h1>
        <div className="w-full md:w-3/4 mx-auto">
          {componentsblogs.map((blog, index) => (
            <div key={index} className="p-4 border-b border-gray-200">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 mb-4 md:mb-0 pr-4">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={500}
                    height={300}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
                <div className="w-full md:w-2/3">
                  <h2 className="text-2xl font-semibold">
                    <Link
                      href={blog.url}
                      className="text-gray-900 hover:underline"
                    >
                      {blog.title}
                    </Link>
                  </h2>
                  <header className="text-sm text-gray-600 mt-2">
                    <span className="mr-2">{blog.category}</span>
                    <span>{blog.date}</span>
                  </header>
                  <div className="mt-4">
                    <p>{blog.excerpt}</p>
                  </div>
                  <p className="mt-4">
                    <Link
                      href={blog.url}
                      className="text-red-900 hover:underline"
                    >
                      Selengkapnya &raquo;
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
