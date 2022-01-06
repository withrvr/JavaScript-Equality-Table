import Link from "next/link";

const Navbarlinks = ({ href, text }: { href: string; text: string }) => {
	return (
		// hover:border-primary
		<Link href={href}>
			<a className="py-2 text-2xl font-medium border-current border-b-2 hover:text-yellow-400 hover:border-yellow-400 active:text-red-500 active:border-red-500">
				{text}
			</a>
		</Link>
	);
};

export default Navbarlinks;
