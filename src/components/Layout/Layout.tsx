import { IParent } from "@/utils/interfaces/propsInterfaces";
import React from "react";
import Topper from "../Topper/Topper";

type Props = IParent & {};

const Layout = ({ children }: Props) => {
	return (
		<div>
			<Topper />
			{children}
		</div>
	);
};

export default Layout;
