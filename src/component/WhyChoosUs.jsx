import { faCloud, faCloudArrowUp, faLock, faNetworkWired, faUsersBetweenLines, faWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const WhyChoosUs = () => {
  return (
    <div className="bg-blck w-full ">
      <div className="md:w-[1152px] w-full mx-auto md:h-[600px] h-[1200px] flex flex-col md:justify-center md:px-0 px-3 justify-center md:gap-0 gap-7 items-center">
        <p className="uppercase text-2xl">Why Choose</p>
        <p className="uppercase text-6xl">Hydra Leads</p>
        <div
          className="grid md:grid-cols-3 grid-cols-1 md:grid-rows-2 text-center md:text-start gap-6 mt-10"
        >
          <div className="flex flex-col gap-4">
            <span className="text-3xl text-zinc-900">
              <FontAwesomeIcon icon={faCloud} className="text-[#dc2626] me-4"/>
              THE BEST LEADS IN THE MCA INDUSTRY
            </span>

            <p className="text-2xl text-zinc-600">
              10 Years of experience in the MCA industry. Data for SMS Text,
              Email, and Cold call Campaigns
            </p>
          </div>

          {/* ----------------------------------------- */}
          
          <div className="flex flex-col gap-4">
            <span className="text-3xl text-zinc-900">
              <FontAwesomeIcon icon={faLock} className="text-[#dc2626] me-4"/>
              	NO DATA WASTE
            </span>

            <p className="text-2xl text-zinc-600">
            Validated Records means 95% or higher of the records are marketable.
            </p>
          </div>
          {/* ----------------------------------------- */}
          <div className="flex flex-col gap-4">
            <span className="text-3xl text-zinc-900">
              <FontAwesomeIcon icon={faNetworkWired} className="text-[#dc2626] me-4"/>
              TCPA SCRUBBED DATA
            </span>

            <p className="text-2xl text-zinc-600">
            All phone numbers are scrubbed every 3 days. You avoid TCPA litigation can call with confidence.
            </p>
          </div>
          {/* ----------------------------------------- */}
          <div className="flex flex-col gap-4">
            <span className="text-3xl text-zinc-900">
              <FontAwesomeIcon icon={faCloudArrowUp} className="text-[#dc2626] me-4"/>
              	INSTANT DATA DOWNLOAD
            </span>

            <p className="text-2xl text-zinc-600">
            Select, Purchase and download to Excel or csv.
            </p>
          </div>
          {/* ----------------------------------------- */}
          <div className="flex flex-col gap-4">
            <span className="text-3xl text-zinc-900">
              <FontAwesomeIcon icon={faWrench} className="text-[#dc2626] me-4"/>
              DATA DE-DUPLICATION
            </span>

            <p className="text-2xl text-zinc-600">
            Your previous records purchases are deduped against future purchases.
            </p>
          </div>
          {/* ----------------------------------------- */}
          <div className="flex flex-col gap-4">
            <span className="text-3xl text-zinc-900">
              <FontAwesomeIcon icon={faUsersBetweenLines} className="text-[#dc2626] me-4"/>
              QUALITY ASSURED LEADS
            </span>

            <p className="text-2xl text-zinc-600">
            We use a variety of third party and proprietary validation services to ensure top quality data.
            </p>
          </div>
          {/* ----------------------------------------- */}
          
        </div>
      </div>
    </div>
  );
};

export default WhyChoosUs;
