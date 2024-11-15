import { Assets } from "../Assets";

const footerLinks = [
  {
    title: "Core connect",
    links: ["Home", "About", "BluePrint", "Takenomics", "Framework", "FAQ's"],
  },
  {
    title: "Core Token",
    links: ["About", "BluePrint", "Takenomics", "Framework", "FAQ's"],
  },
  {
    title: "Moon bot",
    links: ["BluePrint", "Takenomics", "Framework", "FAQ's"],
  },
  {
    title: "Useful links",
    links: ["About", "BluePrint", "Takenomics", "Framework", "FAQ's"],
  },
];

export const Footer = () => {
  return (
    <section className="bg-black text-white py-8 ">
      <div className="w-[95%] md:w-[85%] mx-auto border border-[#6142ff] px-5 lg:px-12 pt-8 ">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-32">
          <div className="w-full lg:w-[35%]">
            <div className="flex items-center gap-4 mb-6">
              <Assets icon="logo" className="w-[38px] h-[38px]" />
              <h2 className="text-lg text-[#e4e4e4]">MOONVAULT</h2>
            </div>
            <h4 className="text-md mb-4">Transform Your Crypto Experience</h4>
            <p className="text-dullColor text-sm">
              Our core values reflect our mission to build a blockchain platform
              that merges cutting-edge technology with innovative solutions.
              <br />
              <br />
              The unique framework, enhanced by dynamic scenarios and a suite of
              custom Telegram bots, unveils groundbreaking decentralized
              tokenomics designed for lasting impact.
            </p>
          </div>
          <div className="w-full lg:w-[65%] gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4 lg:mt-[65px]">
            {footerLinks.map((section, index) => (
              <div className="col-span-1" key={index}>
                <h5 className="text-footerTextColor text-sm uppercase mb-4">
                  {section.title}
                </h5>
                <ul>
                  {section.links.map((link, idx) => (
                    <li className="w-max mb-5" key={idx}>
                      <a
                        href="#"
                        className="text-footerTextColor font-medium cursor-pointer"
                      >
                        <div className="flex items-center">
                          <p className="text-[9px] text-navbar-color hover:text-[--green-color]">
                            {link}
                          </p>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex md:justify-center items-center lg:text-center gap-6 border-t border-[#6142ff] mt-8 pt-4 text-sm">
          <h4 className="text-md text-grey  font-semibold">Social Links:</h4>
          <div className="flex items-center space-x-6 md:justify-center">
            <a href="">
              <Assets icon="facebook" className="w-10 h-10 md:w-5 md:h-5" />
            </a>
            <a href="">
              <Assets icon="facebook" className="w-10 h-10 md:w-5 md:h-5" />
            </a>
            <a href="">
              <Assets icon="facebook" className="w-10 h-10 md:w-5 md:h-5" />
            </a>
            <a href="">
              <Assets icon="facebook" className="w-10 h-10 md:w-5 md:h-5" />
            </a>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 md:gap-0 justify-between items-start w-full border-t border-[#6142ff] mt-4 py-4 text-xs">
          <div className="flex-col items-center justify-start text-dullColor text-[9px]">
            <p>© All Rights Reserved</p>
            <p>
              Disclaimer: MoonVault is an experimental DeFi project and not
              intended as financial advice, an investment, or any form of
              security. MoonVault and $VAULT have no intrinsic value. Always
              conduct your own research before participating.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
