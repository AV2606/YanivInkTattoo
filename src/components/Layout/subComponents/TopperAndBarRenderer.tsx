import LeftSidebar from "@/components/LeftSidebar/LeftSidebar";
import Topper from "@/components/Topper/Topper";
import { useState } from "react";

const Sides = (props: any) => {
	const [open, setOpen] = useState(false);

	const onClose = () => {
		setOpen(false);
	};

	const onOpen = () => {
		setOpen(true);
	};

	return (
		<>
			<LeftSidebar
				open={open}
				onClose={onClose}
			/>
			<Topper onMenuOpen={onOpen} />
		</>
	);
};

export default Sides;
