import Link from "next/link";
import Image from "next/image";

import Navitems from "@/components/Navitems";

const Navbar = () => {
	return (
		<nav className="flex md:flex-col gap-x-5 md:gap-y-2 items-center">
			{/* <Link passHref={true} href="/">
						<Image
							alt="logo"
							src="/logo.svg"
							className="cursor-pointer"
							width={40}
							height={40}
						/>
					</Link> */}

			<Navitems href="/" text="home" />

			<Navitems href="/3-equal-to" text="===" />
			<Navitems href="/2-equal-to" text="==" />
			<Navitems href="/if-condition" text="if()" />

			{/* <Navitems href="/404" text="404" /> */}
		</nav>
	);
};

export default Navbar;
