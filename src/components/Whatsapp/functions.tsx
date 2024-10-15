import { TFunction } from "i18next";

export function openWhatsapp(t: TFunction<"common", undefined>, isSchedule: boolean = false) {
	window.open(`https://wa.me/?text=${t(`common:Whatsapp.${isSchedule ? "schedule" : "interested"}`)}`, "_blank");
}
