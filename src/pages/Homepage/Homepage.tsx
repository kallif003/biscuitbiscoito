import React from "react"
import Header from "../../components/Header/Header"
import Logo from "../../components/Logo/Logo"
import AboutMe from "../../components/AboutMe/AboutMe"
import MyWorks from "../../components/MyWorks/MyWorks"
import Footer from "../../components/Footer/Footer"
import Praise from "../../components/Praise/Praise"
import Contact from "../../components/Contact/Contact"
import { HomeTitle } from "../../components/Typography"
import Instagram from "../../components/Instagram/Instagram"

interface Props {
	showArrows: boolean
}
const Homepage = ({ showArrows }: Props) => {
	return (
		<>
			<Header />
			<Logo />
			<section>
				<HomeTitle id="aboutMe">Seja Bem Vindo</HomeTitle>
				<AboutMe />
				<HomeTitle id="works">Meus trabalhos</HomeTitle>
				<MyWorks />
				<HomeTitle>Elogios</HomeTitle>
				<Praise />
				<HomeTitle>Entre em contato</HomeTitle>
				<Contact />
				<div className="sm:hidden">
					<Instagram showArrows={true} />
				</div>
				<div className="md:hidden lg:hidden xl:hidden mt-[-25rem] mb-[30rem]">
					<Instagram showArrows={false} />
				</div>
				<Footer />
			</section>
		</>
	)
}

export default Homepage
