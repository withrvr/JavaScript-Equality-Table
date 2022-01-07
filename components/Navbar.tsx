import Navbarlinks from "@/components/Navbarlinks";

const Navbar = () => {
	return (
		<nav className="flex md:flex-col gap-x-5 md:gap-y-2 items-center justify-center">
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

			{/* <Navbarlinks href="/404" text="404" /> */}
		</nav>
	);
};

export default Navbar;
