import React from "react";
import { useTranslation } from "next-i18next";

type Props<T extends keyof JSX.IntrinsicElements = "div"> = React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLElement>,
	HTMLElement
> & {
	tag?: T;
};

const DirDiv = <T extends keyof JSX.IntrinsicElements = "div">({ tag, ...props }: Props<T>) => {
	const { i18n } = useTranslation();
	const Tag: any = tag ?? "div";
	return (
		<Tag
			dir={i18n.language === "he" ? "rtl" : "ltr"}
			{...(props as any)}
		></Tag>
	);
};

export default DirDiv;
