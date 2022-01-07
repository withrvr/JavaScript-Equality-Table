import Link from "next/link";

const Navbarlinks = ({ href, text }: { href: string; text: string }) => {
	return (
		// hover:border-primary
		<Link passHref={true} href={href}>
			<div
				className="cursor-pointer text-center w-full font-medium rounded
					text-3xl
					py-2 md:py-3 
					hover:bg-white hover:border-yellow-400 active:text-red-500"
			>
				{text}
			</div>
		</Link>
	);
};

export default Navbarlinks;
