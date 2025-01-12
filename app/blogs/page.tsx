// pages/blogs.js
import Footer from "@/components/organisems/footer";
import Navbar from "@/components/organisems/navbar";
import Link from "next/link";
import Image from "next/image"; // Import the Image component from Next.js

const Blogs = () => {
  // Data blog with images
  const componentsblogs = [
    {
      title: "Wing Frenzy: Indulging in the Savory Delights of Chicken Wings",
      date: "13 June 2023",
      category: "Blogs",
      excerpt:
        "Fried chicken is a beloved dish that has found its way into hearts and homes around the world...",
      url: "/blogs/wing-frenzy-indulging-in-the-savory-delights-of-chicken-wings",
      image: "/images/chicken17 (1).jpg", // Add image URL
    },
    {
      title: "The Best Pizza Margherita Recipe You Can Make at Home",
      date: "15 June 2023",
      category: "Blogs",
      excerpt:
        "Pizza Margherita is a classic Italian dish that is simple yet full of flavor...",
      url: "/blogs/best-pizza-margherita-recipe",
      image: "/images/banner14.jpg", // Add image URL
    },
    {
      title: "Tasty Tacos: A Step-by-Step Guide to Perfecting Your Taco Skills",
      date: "20 June 2023",
      category: "Blogs",
      excerpt:
        "Tacos are one of the most versatile and delicious dishes in Mexican cuisine...",
      url: "/blogs/tasty-tacos-guide",
      image: "/images/chicken31.jpg", // Add image URL
    },
    {
      title: "Decadent Desserts: How to Make the Perfect Chocolate Cake",
      date: "25 June 2023",
      category: "Blogs",
      excerpt:
        "A chocolate cake is the ultimate indulgence for dessert lovers around the world...",
      url: "/blogs/decadent-desserts-chocolate-cake",
      image: "/images/chicken6 (1).jpg", // Add image URL
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-6 bg-white text-black">
        <h1 className="text-4xl font-semibold mb-6 mt-16">Food Blogs</h1>
        <div className="w-full md:w-1/2 mx-auto">
          {componentsblogs.map((blog, index) => (
            <div key={index} className="p-4">
              {/* Flex container to align image and content */}
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 mb-4 md:mb-0 pr-4">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={500} // Set a fixed width for the image
                    height={300} // Set a fixed height for the image
                    className="w-full h-auto rounded-lg"
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
                  <header className="text-sm text-red-900 mt-2">
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
                      Read More &raquo;
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
