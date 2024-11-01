import { IParent } from "@/utils/interfaces/propsInterfaces";
import React from "react";
import Topper from "../Topper/Topper";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import Sides from "./subComponents/TopperAndBarRenderer";
import WhatsappShare from "../Whatsapp/WhatsappShare";

type Props = IParent & {};

const Layout = ({ children }: Props) => {
	return (
		<div>
			<Sides />
			<WhatsappShare />
			{children}
		</div>
	);
};

export default Layout;
