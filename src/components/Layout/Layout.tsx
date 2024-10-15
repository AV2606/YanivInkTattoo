import { IParent } from "@/utils/interfaces/propsInterfaces";
import React from "react";
import Topper from "../Topper/Topper";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import Sides from "./subComponents/TopperAndBarRenderer";

type Props = IParent & {};

const Layout = ({ children }: Props) => {
	return (
		<div>
			<Sides />
			{children}
		</div>
	);
};

export default Layout;
