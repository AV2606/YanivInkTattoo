import { Drawer, IconButton } from "@mui/material";
import React, { useLayoutEffect } from "react";
import { useQueryClient } from "react-query";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { CssVars } from "@/theme/vanilla/CssVars";
import { TopperHeight } from "@/utils/constants";
import { useTranslation } from "next-i18next";
import { SideBarLinks } from "./utils/constants";
import Link from "next/link";
import classes from "./LeftSidebar.module.scss";
import { useRouter } from "next/router";

type Props = {
	open: boolean;
	onClose: () => void;
};

const LeftSidebar = (props: Props) => {
	const client = useQueryClient();
	const router = useRouter();
	const { t } = useTranslation();
	const drawerWidth = 200;

	useLayoutEffect(() => {
		client.setQueryData("drawerWidth", props.open ? drawerWidth : 0);
	}, [props.open]);

	console.log(router.pathname);

	return (
		<Drawer
			anchor="left"
			className={classes.drawer}
			sx={{
				width: drawerWidth,
				"& .MuiDrawer-paper": {
					width: drawerWidth,
					boxSizing: "border-box",
					background: CssVars.paperBackground,
					color: CssVars.secondaryColor,
				},
			}}
			{...props}
		>
			<div
				className={classes.drawerTop}
				style={{
					height: TopperHeight,
				}}
			>
				<IconButton
					onClick={() => props.onClose()}
					className={classes.iconButton}
				>
					<ArrowBackIcon />
				</IconButton>
			</div>
			<hr className={classes.divider} />
			<div className={classes.linksWrapper}>
				{SideBarLinks.map((link) => {
					return (
						<Link
							href={link.link}
							key={link.type}
							className={classes.link + "  " + (router.pathname === `${link.link}` ? classes.active : "")}
						>
							{link.logo}
							{t(`common:sidebar.${link.type}`)}
						</Link>
					);
				})}
			</div>
		</Drawer>
	);
};

export default LeftSidebar;
