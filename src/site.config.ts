import type { AstroExpressiveCodeOptions } from "astro-expressive-code";
import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
	// Used as both a meta property & the generated satori png
	author: "Ayush Kedia", //
	// Date.prototype.toLocaleDateString() parameters
	date: {
		locale: "en-IN", // Set for Ayush Kedia
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
	// Professional bio focusing on your Data/ML career path for Ayush Kedia
	description: "B.Tech CSE Student @ KIIT | Data Analytics & ML Engineer | SAP Certified", //
	lang: "en-IN",
	ogLocale: "en_IN",
	title: "Ayush Kedia | Portfolio", //
	// Personalized url for Ayush Kedia
	url: "https://ayushkedia.in",
};

// Simplified to remove social links from the header menu to fix potential syntax errors.
// They will appear in the footer via SocialList.astro.
export const menuLinks: { path: string; title: string }[] = [
	{
		path: "/",
		title: "Home",
	},
	{
		path: "/about/",
		title: "About",
	},
	{
		path: "/posts/",
		title: "Projects",
	},
	{
		path: "/notes/",
		title: "Notes",
	},
];

// https://expressive-code.com/reference/configuration/
export const expressiveCodeOptions: AstroExpressiveCodeOptions = {
	styleOverrides: {
		borderRadius: "4px",
		codeFontFamily:
			'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
		codeFontSize: "0.875rem",
		codeLineHeight: "1.7142857rem",
		codePaddingInline: "1rem",
		frames: {
			frameBoxShadowCssValue: "none",
		},
		uiLineHeight: "inherit",
	},
	themeCssSelector(theme, { styleVariants }) {
		if (styleVariants.length >= 2) {
			const baseTheme = styleVariants[0]?.theme;
			const altTheme = styleVariants.find((v) => v.theme.type !== baseTheme?.type)?.theme;
			if (theme === baseTheme || theme === altTheme) return `[data-theme='${theme.type}']`;
		}
		return `[data-theme="${theme.name}"]`;
	},
	themes: ["dracula", "github-light"],
	useThemedScrollbars: false,
};
