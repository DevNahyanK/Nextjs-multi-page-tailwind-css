
import HeroSection from "@/Components/HeroSection";
import Card from "@/Components/Card";

export default function QuirkyBars() {
  const jersey = [
    {
      category: "Jersey",
      title: "England",
      image: "/Jersey/eng jersey.jpg",
      price: "RS 799",
    },
    {
      category: "Jersey",
      title: "Pakistan",
      image: "/Jersey/pk jersey.webp",
      price: "RS 799",
    },
    {
      category: "Jersey",
      title: "India",
      image: "/Jersey/ind jersey.jpg",
      price: "RS 799",
    },
    {
      category: "Jersey",
      title: "New Zealand",
      image: "/Jersey/Nz jersey.jpg",
      price: "RS 799",
    },
    {
      category: "Jersey",
      title: "Australia",
      image: "/Jersey/aus jersey.jpeg",
      price: "RS 799",
    },
    {
      category: "Jersey",
      title: "South Africa",
      image: "/Jersey/South-Africa jerseyt.jpg",
      price: "RS 799",
    },
    {
      category: "Jersey",
      title: "Afghanistan",
      image: "/Jersey/afg jersey.jpg",
      price: "RS 799",
    },
    {
      category: "Jersey",
      title: "Banladesh",
      image: "/Jersey/ban jersey.jpeg",
      price: "RS 799",
    },
  ];

  return (
    <>
      <HeroSection imageSrc="/Jersey/cricket jersey.jpeg" />
     
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {jersey.map((item, index) => (
              <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                < Card
                  category={item.category}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}