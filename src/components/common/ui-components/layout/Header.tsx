import { Assets } from "../Assets";

const navItems = [
  { label: "ABOUT", href: "#" },
  { label: "BLUEPRINT", href: "#" },
  { label: "TOKENOMICS", href: "#" },

  { label: "FRAMEWORK", href: "#" },
  { label: "CORE VALUES", href: "#" },
  { label: "FAQ's", href: "#" },
];

export const Header = () => {
  return (
    <>
      <section className="w-full flex items-center bg-black h-[45px] border border-[#6142ff] text-white text-sm">
        <div className="w-[10%] h-[45px] flex justify-center items-center border-r border-r-[#6142ff] italic text-dullColor">
          Now Live
          <span className="inline-block w-2 ml-1 rounded animate-blink">•</span>
        </div>
        <div className="w-[calc(100% - 10%)] flex items-center overflow-hidden">
          <div className="flex gap-4 animate-marquee">
            <div>
              <p className="text-greenColor">Contract Address:</p>
            </div>
            <div>
              <p className="italic text-dullColor">
                Our contract address is
                "0x220125AF9DA649e368813733eC8702A4145F996b".
              </p>
            </div>
            <div>
              <p className="text-greenColor">Token Name:</p>
            </div>
            <div>
              <p className="italic text-dullColor">
                The token name is "MyToken". You can find more details here.
              </p>
            </div>
            <div>
              <p className="text-greenColor">Launch Date:</p>
            </div>
            <div>
              <p className="italic text-dullColor">
                The launch date is "December 15, 2024".
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="h-[70px] fixed border z-100 border-[#6142ff] bg-black text-white w-full justify-center flex items-center max-w-[1600px] mx-auto"
        style={{
          position: "fixed",
          top: "45px",
          left: "0px",
          right: "0px",
          zIndex: 10,
          transition: "top 0.25s ease-in-out",
        }}
      >
        <div className="flex w-[98%] justify-between">
          <div className="flex gap-2">
            <div className="pl-4">
              <Assets icon="logo" className="w-[30px] h-[38px]" />
            </div>
            <div className="flex items-center">
              <h2 className="tracking-widest font-bold text-[#e4e4e4]">
                MOONVAULT
              </h2>
            </div>
          </div>
          <div className="flex gap-[2rem]">
            <div className="items-center hidden gap-[2rem] lg:flex text-sm">
              {navItems.map((item, index) => (
                <div key={index}>
                  <ul>
                    <li>
                      <a
                        href={item.href}
                        className="flex justify-center cursor-pointer"
                      >
                        <div className="flex items-center">
                          <p className="revealed-text text-navbar-color hover:text-[--green-color]">
                            {item.label}
                          </p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href=""
                className="px-4 py-2.5 border hover:bg-[#6142ff] border-[#6142ff] cursor-pointer text-sm"
              >
                BUY $VAULT
              </a>
              <a
                href=""
                className="px-4 py-2.5 bg-[#6142ff] border border-[#6142ff] hover:bg-transparent hover:border hover:border-[#6142ff] cursor-pointer text-sm"
              >
                LAUNCH APP
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
