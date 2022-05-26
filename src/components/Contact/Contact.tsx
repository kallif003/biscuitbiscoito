import React from "react"
import { NextPage } from "next"
import {
	ContainerContact,
	Rain,
	Cloud,
	ContainerCloud,
	ContainerIcon,
	ContainerRain,
} from "."
import { TitleContact, TextContact } from "../Typography"
import Icon from "@mdi/react"
import { mdiFacebook } from "@mdi/js"
import { mdiInstagram } from "@mdi/js"
import { mdiWhatsapp } from "@mdi/js"

const Contact: NextPage = () => {
	return (
		<ContainerContact>
			<ContainerCloud>
				<Cloud>
					<ContainerIcon>
						<Icon
							path={mdiFacebook}
							title="User Profile"
							size={2}
							className="active:scale-90 hover:text-[#e98f93]"
						/>
						<Icon
							path={mdiInstagram}
							title="User Profile"
							size={2}
							className="active:scale-90 hover:text-[#e98f93]"
						/>
						<Icon
							path={mdiWhatsapp}
							title="User Profile"
							size={2}
							className="active:scale-90 hover:text-[#e98f93]"
						/>
					</ContainerIcon>
					<TitleContact>Encomendas e Orçamentos</TitleContact>
					<TextContact>
						Entre em contato através das minhas redes sociais,
					</TextContact>
					<TextContact>estou pronta para te atender</TextContact>
				</Cloud>
			</ContainerCloud>
			<ContainerRain>
				<Rain></Rain>
			</ContainerRain>
		</ContainerContact>
	)
}

export default Contact