import { faqTitleAccrodion } from "../constants/Faq";

const FAQ = () => {
  return (
    <section id="faq" className="container mx-auto">
      <h2 className="mb-6 text-3xl font-semibold text-center md:text-4xl">
        Frequently Asked Questions
      </h2>
      <p className="max-w-lg px-6 mx-auto text-center text-grayishBlue">
        Here are some of our FAQs. If you have any other questions you'd like
        answered please feel free to email us.
      </p>
      <div id="faq-accrodion" className="container mx-auto px-6 mb-32">
        <div className="max-w-2xl m-8 mx-auto overflow-hidden">
          {/*Tabs */}
          {faqTitleAccrodion.map((item, index) => (
            <div
              key={index}
              className="py-1 border-b outline-none group"
              tabIndex={index + 1}
            >
              <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
                <h5 className="transition duration-500 ease group-hover:text-red-500 group-focus:text-red-500">
                  {item}
                </h5>
                <div className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="12"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      d="M1 1l8 8 8-8"
                    />
                  </svg>
                </div>
              </div>
              {/*Tab Content */}
              <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                <p className="py-2 text-justify text-gray-400">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Libero omnis ea similique explicabo, praesentium facere quas
                  odit eaque? Nihil, rem. Doloribus nulla deserunt, quas rem
                  eaque aut necessitatibus temporibus. Non?
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FAQ;
