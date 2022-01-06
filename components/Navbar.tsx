import Link from "next/link";
import Image from "next/image";

import Navbarlinks from "@/components/Navbarlinks";

const Navbar = () => {
	return (
		<nav className="mb-5">
			<div className="container">
				<div className="flex gap-x-10 items-center justify-center">
					{/* <Link passHref={true} href="/">
						<Image
							alt="logo"
							src="/logo.svg"
							className="cursor-pointer"
							width={40}
							height={40}
						/>
					</Link> */}

					<Navbarlinks href="/" text="===" />
					<Navbarlinks href="/" text="==" />
					<Navbarlinks href="/" text="if()" />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
