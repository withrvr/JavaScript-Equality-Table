import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

const Error404 = () => {
	const router = useRouter();

	return (
		<>
			<Head>
				<title>404 - Page Not Found</title>
			</Head>

			<div className="my-5 md:my-20 text-center">
				<Image
					src="/images/are_you_sure_about_that.gif"
					alt="are_you_sure_about_that john cena image"
					className="mx-auto "
					width={177}
					height={197}
				/>

				<div className="my-3">
					<h1 className="text-7xl md:text-8xl font-bold ">404</h1>
					<h3 className="">Page Not Found</h3>
				</div>

				<div>
					<span className="link" onClick={() => router.back()}>
						Go back
					</span>
				</div>

				<Link href="/">
					<a className="link">Go to Home Page</a>
				</Link>
			</div>
		</>
	);
};

export default Error404;
