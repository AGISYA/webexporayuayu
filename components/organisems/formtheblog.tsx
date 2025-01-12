import Image from "next/image";

export default function FormTheBlog() {
  const blogs = [
    {
      title: "Wing Frenzy: Indulging in the Savory Delights of Chicken Wings",
      description:
        "Fried chicken is a beloved dish that has found its way into hearts and homes ...",
      image: "/images/chicken6 (1).jpg", // Replace with your image URL
    },
    {
      title:
        "Sesame Sensations: Unveiling the Delicious World of Chicken Sesame",
      description:
        "Fried chicken is a beloved dish that has found its way into hearts and homes ...",
      image: "/images/chicken31.jpg", // Replace with your image URL
    },
    {
      title:
        "Popcorn Pleasures: Exploring the Crispy Delights of Chicken Popcorn",
      description:
        "Fried chicken is a beloved dish that has found its way into hearts and homes ...",
      image: "/images/banner14.jpg", // Replace with your image URL
    },
    {
      title: "Crispy Creations: Diving into the World of Fried Chicken Bites",
      description:
        "Fried chicken is a beloved dish that has found its way into hearts and homes ...",
      image: "/images/chicken17.jpg", // Replace with your image URL
    },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          From The Blog
        </h2>
        <p className="mt-4 text-center text-gray-600">
          You can see our blog here, click to see blog details. Discover our
          daily activity, product process, and more.
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
                  className="rounded-t-lg object-cover"
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
