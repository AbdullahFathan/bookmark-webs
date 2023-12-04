import { downloadButtonConst } from "../constants/download";

const Download = () => {
  return (
    <section id="download" className="container mx-auto px-6">
      <h2 className=" mb-6 text-3xl font-semibold text-center md:text-4xl">
        Download the extension
      </h2>
      <p className="max-w-lg mx-auto text-center text-grayishBlue">
        We've got more browsers in the pipeline. Please do let us know if you've
        got a favourite you'd like us to prioritize.
      </p>
      {/*Button Download */}
      <div className="py-32">
        <div className="flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 md:px-6 md:spcae-y-0 md:spcae-x-10 md:flex-row">
          {downloadButtonConst.map((item, index) => (
            <div
              key={index}
              className="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:w-1/3 md:mr-6"
            >
              <div className="flex justify-center">
                <img src={item.img} alt={item.name} />
              </div>
              <h5 className="pt-6 text-xl font-bold"> Add to {item.name}</h5>
              <p className="text-gray-400">Minimum Version 62</p>
              {/*Dots and button */}
              <div className="bg-dots bg-repeat-x px-6 pt-6">
                <button
                  type="button"
                  className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue"
                >
                  Add & Install Extension
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Download;
