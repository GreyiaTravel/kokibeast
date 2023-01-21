import Image from "next/image";
import logo from "../public/img/logo/koki_logo.png";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        className="rounded-full"
        src={logo}
        width={120}
        height={120}
        alt={"Company logo"}
        priority
      />
    </Link>
  );
};

export default Logo;
