import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
const Contact = () => {
  return (
    <div className="grid bg-base-200 max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
      <div className="flex flex-col justify-between">
        <div data-aos="fade-right" className="space-y-2">
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
            Let's talk!
          </h2>
          <div data-aos="fade-right" className="dark:text-gray-600">
            Vivamus in nisl metus? Phasellus.
          </div>
        </div>
        <img data-aos="fade-right" src="https://cdn.dribbble.com/users/3497212/screenshots/11476810/mail-12-600.gif" alt="" className="p-6 h-52 md:h-64" />
      </div>
      <form data-aos="fade-left" noValidate="" className="space-y-6">
        <div>
          <label htmlFor="name" className="text-sm">
            Full name
          </label>
          <input
            id="name"
            type="text"
            placeholder=""
            className="w-full p-3 rounded dark:bg-gray-100"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full p-3 rounded dark:bg-gray-100"
          />
        </div>
        <div>
          <label htmlFor="message" className="text-sm">
            Message
          </label>
          <textarea
            id="message"
            rows="3"
            className="w-full p-3 rounded dark:bg-gray-100"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-[#fc5a34] text-white dark:text-gray-50"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
