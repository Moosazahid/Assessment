import { MouseEventHandler } from "react";
import { Icons } from "../../../types/Icons";

interface IProps {
  icon?: Icons;
  src?: string;
  className?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLImageElement>;
}

const icons: Record<Icons, { src: string }> = {
  logo: { src: "src/assets/images/logo.svg" },
  facebook: { src: "src/assets/icons/Facebook.svg" },
  arrow: { src: "src/assets/icons/Vector.svg" },
  socialSectionEarth: { src: "src/assets/images/socialSectionEarth.svg" },
  geckoEarth: { src: "src/assets/images/gecko-terminal-logo 2.svg" },
  groupEarth: { src: "src/assets/images/grop2.svg" },
};

export const Assets = ({
  icon,
  src,
  className = "",
  disabled = false,
  onClick,
}: IProps) => {
  const iconRecord = icon ? icons[icon] : { src };
  return (
    <img
      style={{ cursor: disabled ? "not-allowed" : "" }}
      className={className}
      src={iconRecord?.src}
      alt="icon"
      onClick={onClick}
    />
  );
};
