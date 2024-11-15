import { useState } from "react";
import { Assets } from "../../components/common/ui-components";

const BluePrint = () => {
  const blueprintItems = [
    {
      id: 1,
      title: "Innovative Technology",
      description:
        "MoonVault leverages the latest in blockchain and financial tools to create a powerful and intuitive platform, ensuring users benefit from cutting-edge advancements across sectors.",
    },
    {
      id: 2,
      title: "Secure Platform",
      description:
        "Our platform prioritizes user security with multi-layered encryption and robust protocols to ensure data integrity and user safety.",
    },
    {
      id: 3,
      title: "User-Friendly Interface",
      description:
        "MoonVault's interface is designed to be intuitive and user-friendly, making it accessible for users of all experience levels.",
    },
  ];

  const [openIndexes, setOpenIndexes] = useState<number[]>(
    blueprintItems.map((_, index) => index)
  );

  const handleToggle = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="flex justify-center py-20 text-white">
      <div className="flex-col lg:flex lg:flex-row w-[95%] md:w-[85%]">
        <div className="lg:w-[25%] pb-5 lg:pb-0">
          <h4 className="text-grey py-1.5 font-pp-supply-mono">/ BLUEPRINT</h4>
        </div>
        <div className="lg:w-[75%] p-[0.25rem] lg:p-[1rem]">
          {blueprintItems.map((item, index) => (
            <div
              key={item.id}
              className="py-8 border border-b-0 border-l-0 border-r-0 border-t-[#6142ff]"
              style={{
                transform: "translate(0px, 0px) rotate(0deg) scale(1)",
                opacity: 1,
                visibility: "inherit",
              }}
            >
              <div
                className="flex justify-between cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                <div className="flex gap-5 lg:gap-16">
                  <div>
                    <h3 className="font-bold font-pp-supply-mono">
                      {String(item.id).padStart(2, "0")}
                    </h3>
                  </div>
                  <div className="flex flex-col">
                    <div className="font-bold font-pp-supply-mono">
                      {item.title}
                    </div>
                    <div className="pl-1 w-[95%]">
                      {openIndexes.includes(index) && (
                        <p className="text-dullColor font-pp-supply-mono mt-4">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="mr-1 lg:mr-0 lg:pr-10">
                  <div
                    className={`${
                      openIndexes.includes(index) ? "rotate-0" : "-rotate-90"
                    } transform transition-transform duration-500`}
                  >
                    <Assets icon="arrow" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BluePrint;
