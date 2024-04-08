import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
const Team = () => {
  return (
    <section className="py-6 dark:bg-gray-100 dark:text-gray-800">
      <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
        <h1 data-aos="fade-down-right" className="animate__animated animate__bounce text-4xl font-bold leading-none text-center sm:text-5xl">
          Our Team
        </h1>
        <p data-aos="fade-down-right" className="max-w-2xl text-center dark:text-gray-600">
          At Sajib Industrial, we have a dedicated team of professionals ready
          to tackle any challenge. Meet our talented individuals below:
        </p>
        <div data-aos="zoom-in-down" className="flex flex-row flex-wrap-reverse justify-center">
          <div className="flex flex-col justify-center m-8 text-center">
            <img
              alt="Portrait 1"
              className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="https://source.unsplash.com/100x100/?portrait?0"
            />
            <p className="text-xl font-semibold leading-tight">John Doe</p>
            <p className="dark:text-gray-600">Warehouse Manager</p>
          </div>
          <div className="flex flex-col justify-center m-8 text-center">
            <img
              alt="Portrait 2"
              className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="https://source.unsplash.com/100x100/?portrait?1"
            />
            <p className="text-xl font-semibold leading-tight">Jane Smith</p>
            <p className="dark:text-gray-600">Production Engineer</p>
          </div>
          <div className="flex flex-col justify-center m-8 text-center">
            <img
              alt="Portrait 3"
              className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="https://source.unsplash.com/100x100/?portrait?2"
            />
            <p className="text-xl font-semibold leading-tight">David Brown</p>
            <p className="dark:text-gray-600">Industrial Designer</p>
          </div>
          <div className="flex flex-col justify-center m-8 text-center">
            <img
              alt="Portrait 4"
              className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="https://source.unsplash.com/100x100/?portrait?3"
            />
            <p className="text-xl font-semibold leading-tight">Emily Johnson</p>
            <p className="dark:text-gray-600">Factory Supervisor</p>
          </div>
          <div className="flex flex-col justify-center m-8 text-center">
            <img
              alt="Portrait 5"
              className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="https://source.unsplash.com/100x100/?portrait?4"
            />
            <p className="text-xl font-semibold leading-tight">Michael Lee</p>
            <p className="dark:text-gray-600">Cold Storage Specialist</p>
          </div>
          <div className="flex flex-col justify-center m-8 text-center">
            <img
              alt="Portrait 6"
              className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="https://source.unsplash.com/100x100/?portrait?5"
            />
            <p className="text-xl font-semibold leading-tight">Sarah Garcia</p>
            <p className="dark:text-gray-600">Power Plant Technician</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
