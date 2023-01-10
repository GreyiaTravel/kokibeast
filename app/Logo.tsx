import Image from "next/image";
import logo from "../public/img/logo/koki_logo.png";

const Logo = () => {
  return (
    <Image
      className="rounded-full"
      src={logo}
      width={120}
      height={120}
      alt={"Company logo"}
    />
  );
};

export default Logo;
