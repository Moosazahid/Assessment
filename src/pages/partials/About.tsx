const About = () => {
  return (
    <section className="flex justify-center w-full py-10">
      <div className="w-[95%] sm:w-[85%] text-white">
        <div className="context mb-[5rem]">
          <h4 className="text-grey py-1.5 font-pp-supply-mono">
            / ABOUT MOONVAULT
          </h4>
          <h3 className="text-grey leading-[1.2] py-5 font-pp-supply-mono w-full lg:w-[55%] text-xl">
            GUIDED BY THE REVOLVING S.T.A.R.R. ENGINE
          </h3>
          <p className="w-full lg:w-[45%] pb-[20px] font-pp-neuebit text-dullColor text-sm">
            MoonVault is a user-centric blockchain platform that seamlessly
            integrates advanced on-chain solutions with innovative financial
            tools, alongside a robust decentralized rewards system via $VAULT,
            to deliver a seamless user experience.
          </p>
          <p className="w-full lg:w-[45%] pb-[20px] font-pp-neuebit text-dullColor text-sm">
            MoonVault is a user-centric blockchain platform that seamlessly
            integrates advanced on-chain solutions with innovative financial
            tools, alongside a robust decentralized rewards system via $VAULT,
            to deliver a seamless user experience.
          </p>
          <p className="w-full lg:w-[45%] pb-[20px] font-pp-neuebit text-dullColor text-sm">
            MoonVault is a user-centric blockchain platform that seamlessly
            integrates advanced on-chain solutions with innovative financial
            tools, alongside a robust decentralized rewards system via $VAULT,
            to deliver a seamless user experience.
          </p>
          <p>
            <button className="relative ml-3">
              <span
                className="relative before:content-['['] after:content-[']'] before:absolute before:left-[-10px] after:absolute after:right-[-10px] 
                 before:transition-all after:transition-all before:duration-300 after:duration-300 hover:before:left-[-2px] hover:after:right-[-2px] 
                 text-greenColor hover:text-blue-500 font-pp-neuebit text-md"
              >
                GET STARTED
              </span>
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
