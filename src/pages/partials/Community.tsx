import { Assets } from "../../components/common/ui-components";

const Community = () => {
    return (
        <section className="flex justify-center py-4 ">
        <div className="w-[95%] md:w-[85%] p-[1rem] border border-[#6142ff] text-white">
          <div className="flex flex-col py-2 lg:flex-row">
            <div className="w-full lg:w-[50%] p-[0.25rem] lg:pb-20 lg:p-[1rem] gap-1 flex flex-col">
              <div>
                <h4 className="text-md text-grey">You’re Invited</h4>
              </div>
              <div className="flex items-center">
                <h4 className="text-xl text-grey font-pp-supply-mono">
                  COMMUNITY
                </h4>
              </div>
              <div className="lg:w-[100%] pb-4">
                <p className="text-dullColor text-sm">
                  The $VAULT token is built to drive decentralized engagement
                  across the globe. MoonVault acts as a hub where users can
                  connect, collaborate, and navigate their journey in the crypto
                  space securely.
                </p>
              </div>
              <div className="flex gap-6 pb-10 pl-2 lg:gap-10 lg:pb-0">
                <button className="relative">
                  <span
                    className="relative before:content-['['] after:content-[']'] before:absolute before:left-[-10px] after:absolute after:right-[-10px] 
                 before:transition-all after:transition-all before:duration-300 after:duration-300 hover:before:left-[-2px] hover:after:right-[-2px] 
                 text-greenColor hover:text-blue-500 font-pp-neuebit text-md"
                  >
                    TELEGRAM
                  </span>
                </button>
                <button className="relative">
                  <span
                    className="relative before:content-['['] after:content-[']'] before:absolute before:left-[-10px] after:absolute after:right-[-10px] 
                 before:transition-all after:transition-all before:duration-300 after:duration-300 hover:before:left-[-2px] hover:after:right-[-2px] 
                 text-greenColor hover:text-blue-500 font-pp-neuebit text-md"
                  >
                    X/TWITTER
                  </span>
                </button>
                <button className="relative">
                  <span
                    className="relative before:content-['['] after:content-[']'] before:absolute before:left-[-10px] after:absolute after:right-[-10px] 
                 before:transition-all after:transition-all before:duration-300 after:duration-300 hover:before:left-[-2px] hover:after:right-[-2px] 
                 text-greenColor hover:text-blue-500 font-pp-neuebit text-md"
                  >
                    DISCORD
                  </span>
                </button>
              </div>
            </div>
            <div className="w-[100%] lg:w-[50%] lg:p-[0.25rem] lg:px-[1rem]">
              <Assets icon="socialSectionEarth" />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Community;
  