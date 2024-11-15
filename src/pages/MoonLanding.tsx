import { Assets } from "../components/common/ui-components";
import About from "./partials/About";
import BluePrint from "./partials/BluePrint";
import Community from "./partials/Community";

const MoonLanding = () => {
  return (
    <>
      <About />
      <div className="flex flex-col space-y-8 overflow-hidden">
        <div className="flex gap-12 animate-marquee">
          <Assets
            icon="geckoEarth"
            className="h-16 w-[250px] rounded-xl border border-[#6142FF] px-6 py-3"
          />
          <Assets
            icon="groupEarth"
            className="h-16 w-[250px] rounded-xl border border-[#6142FF] px-6 py-3"
          />
          <Assets
            icon="geckoEarth"
            className="h-16 w-[250px] rounded-xl border border-[#6142FF] px-6 py-3"
          />
          <Assets
            icon="geckoEarth"
            className="h-16 w-[250px] rounded-xl border border-[#6142FF] px-6 py-3"
          />
          <Assets
            icon="geckoEarth"
            className="h-16 w-[250px] rounded-xl border border-[#6142FF] px-6 py-3"
          />
        </div>
        <div className="flex gap-12 animate-marquee-left">
          <Assets
            icon="geckoEarth"
            className="h-16 w-[250px] rounded-xl border border-[#6142FF] px-6 py-3"
          />
          <Assets
            icon="geckoEarth"
            className="h-16 w-[250px] rounded-xl border border-[#6142FF] px-6 py-3"
          />
          <Assets
            icon="geckoEarth"
            className="h-16 w-[250px] rounded-xl border border-[#6142FF] px-6 py-3"
          />
          <Assets
            icon="geckoEarth"
            className="h-16 w-[250px] rounded-xl border border-[#6142FF] px-6 py-3"
          />
          <Assets
            icon="geckoEarth"
            className="h-16 w-[250px] rounded-xl border border-[#6142FF] px-6 py-3"
          />
        </div>
      </div>
      <BluePrint />
      <Community />
    </>
  );
};

export default MoonLanding;
