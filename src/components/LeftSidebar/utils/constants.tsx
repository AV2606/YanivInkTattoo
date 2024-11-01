import { SideBarLink, SideBarLinkTypeInstance } from "./types";
import Image from "next/image";
import WebIcon from "@mui/icons-material/Web"; //home
import YanivPenLogo from "../../../assets/logos/yaniv-inktattoo-pen-logo-transparent.png"; //about
import CasesOutlinedIcon from "@mui/icons-material/CasesOutlined"; //portfolio
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined"; //contact
import { TopperHeight } from "@/utils/constants";

export const SideBarLinks: SideBarLink[] = SideBarLinkTypeInstance.map((type) => {
	return {
		type,
		logo:
			type === "home" ? (
				<WebIcon />
			) : type === "about" ? (
				<Image
					src={YanivPenLogo}
					alt="Yaniv Ink Tattoo Pen Logo"
					height={28}
				/>
			) : type === "portfolio" ? (
				<CasesOutlinedIcon />
			) : (
				<AlternateEmailOutlinedIcon />
			),
		link: type === "home" ? "/" : `/info/${type}`,
	};
});
