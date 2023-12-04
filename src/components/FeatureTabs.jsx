import React, { useState } from "react";
import { featurePanel, featureTabs } from "../constants/feature";

const FeatureTabs = () => {
  const [activeTab, setActiveTab] = useState(featureTabs[0].panel);

  const handleTabClick = (targetPanel) => {
    setActiveTab(targetPanel);
  };

  return (
    <div id="tabs" className="container relative mx-auto my-6 mb-32 mt-12 px-6">
      <div className="bg-tabs" />
      {/*Tabs */}
      <div className="flex flex-col justify-center max-w-xl mx-auto mb-6 border-b md:spacex-10 md:flex-row">
        {featureTabs.map((item, index) => (
          <div
            key={index}
            className={`flex justify-center text-center text-gray-600  hover:text-softRed md:w-1/3  ${
              activeTab === item.panel ? "border-b-2 border-softRed" : ""
            }`}
            onClick={() => handleTabClick(item.panel)}
          >
            <h3 className="py-5" data-target={item.panel}>
              {item.title}
            </h3>
          </div>
        ))}
      </div>
      {/*Panel */}
      <div id="panel" className="container mx-auto">
        {featurePanel.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row py-5 md:space-x-7 panel ${
              item.panel === activeTab ? "active" : "hidden"
            }`}
          >
            {/* Image */}
            <div className="flex justify-center md:w-1/2">
              <img
                src={item.image}
                alt="illustration"
                className="relative z-10"
              />
            </div>
            {/* Panel Content */}
            <div className="flex flex-col space-y-8 md:w-1/2">
              <h3 className="mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left">
                {item.title}
              </h3>
              <p className="max-w-md text-center text-grayishBlue md:text-left">
                {item.content}
              </p>
              <div className="mx-auto md:mx-0">
                <button
                  type="button"
                  className="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2"
                >
                  More Info
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureTabs;
