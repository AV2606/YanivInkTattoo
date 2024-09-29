import { CssVars } from "@/theme/vanilla/CssVars";
import React from "react";

type Props = {};

const Index = (props: Props) => {
	return (
		<div>
			<h1>Design</h1>
			<div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
				<div
					style={{
						background: CssVars.paperBackground,
						width: "20px",
						height: "20px",
						display: "inline-block",
						border: "1px solid black",
					}}
				></div>
				Primary Color
			</div>
			<br />
			<div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
				<div
					style={{ background: CssVars.primaryColor, width: "20px", height: "20px", display: "inline-block" }}
				></div>
				Secondary Color
			</div>
			<br />
			<div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
				<div
					style={{
						background: CssVars.secondaryColor,
						width: "20px",
						height: "20px",
						display: "inline-block",
					}}
				></div>
				Text Color
			</div>
			<br />
			<div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
				<div
					style={{ background: CssVars.button, width: "20px", height: "20px", display: "inline-block" }}
				></div>
				Button Color
			</div>
			<br />
			<div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
				<div
					style={{ background: CssVars.header, width: "20px", height: "20px", display: "inline-block" }}
				></div>
				Titles Color
			</div>
			<br />
			<div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
				<div
					style={{ background: CssVars.accent, width: "20px", height: "20px", display: "inline-block" }}
				></div>
				Small detail Color
			</div>
			<br />
			<div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
				<div
					style={{ background: CssVars.themeColor, width: "20px", height: "20px", display: "inline-block" }}
				></div>
				Gold Color
			</div>
		</div>
	);
};

export default Index;
