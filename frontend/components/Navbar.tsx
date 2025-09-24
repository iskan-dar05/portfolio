
import Image from "next/image"
import Link from 'next/link'

const Navbar = () => {
	
	return(
		<nav className="flex items-center h-[113px] justify-around w-full">
			<Image src="/Logo.png" alt="" width={35} height={39} />

			<ul className="flex items-center gap-[168px]">
				<li><Link href="/home">Home</Link></li>
				<li><Link href="/home">Home</Link></li>
				<li><Link href="/home">Home</Link></li>
			</ul>
		</nav>
	)
}

export default Navbar;
