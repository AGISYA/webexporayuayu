import Image from "next/image";

export default function FormTheBlog() {
  const blogs = [
    {
      title: "Bubur Kacang Hijau: Nikmatnya Sarapan Tradisional",
      description:
        "Bubur kacang hijau adalah sajian tradisional khas Indonesia yang menawarkan kelezatan manis dan gurih...",
      image: "/images/edited-9484.jpg", // Replace with your image URL
    },
    {
      title: "Sate Madura: Sensasi Bumbu Kacang yang Menggoda",
      description:
        "Sate Madura merupakan salah satu ikon kuliner Indonesia dengan cita rasa bumbu kacang yang kaya...",
      image: "/images/sate madura.jpg", // Replace with your image URL
    },
    {
      title: "Soto Betawi: Perpaduan Gurih Santan dan Daging Sapi",
      description:
        "Soto Betawi adalah makanan khas Jakarta yang terkenal dengan kuah santan dan potongan daging sapi...",
      image: "/images/soto betawi.jpg", // Replace with your image URL
    },
    {
      title: "Nasi Goreng Tektek Beef Slice: Gurih dan Menggoda",
      description:
        "Nasi goreng tektek dengan irisan beef slice adalah pilihan sempurna untuk makan malam yang cepat dan lezat...",
      image: "/images/nasgor tektek beef slice.jpg", // Replace with your image URL
    },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          From The Blog
        </h2>
        <p className="mt-4 text-center text-gray-600">
          Anda dapat melihat blog kami di sini, klik untuk melihat detail blog.
          Temukan aktivitas harian, proses produk, dan lainnya.
        </p>
        <div className="mt-10 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 hover:scrollbar-thumb-gray-600 scroll-smooth">
          <div className="flex space-x-8">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 bg-white border rounded-lg shadow hover:shadow-lg transition duration-300 transform hover:scale-105"
              >
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={320}
                  height={200}
                  className="rounded-t-lg object-cover w-full h-40"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {blog.title}
                  </h3>
                  <p className="mt-3 text-sm text-gray-600">
                    {blog.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
