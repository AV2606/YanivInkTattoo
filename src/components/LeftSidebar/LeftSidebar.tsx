import { Drawer } from "@mui/material";
import React from "react";

type Props = {
	open: boolean;
	onClose: () => void;
};

const LeftSidebar = (props: Props) => {
	return <Drawer {...props}></Drawer>;
};

export default LeftSidebar;
