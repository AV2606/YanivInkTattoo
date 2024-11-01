export type SideBarLink = {
    type: SideBarLinkType;
    logo: React.ReactNode;
    link: string;
};

export const SideBarLinkTypeInstance = ['home', 'about', 'portfolio', 'contact'] as const;

export type SideBarLinkType = typeof SideBarLinkTypeInstance[number];