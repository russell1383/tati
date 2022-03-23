const LightTheme = {
  colors: {
    primary: "#231f20",
    secondary: "#FFFF",
    footer: "#231f20",
    footerTitleText: "#cb7e7e",
    footerText: "#FFFF",
  },
};

const DarkTheme = {
  colors: {
    primary: "#FFFF",
    secondary: "#231f20",
    footer: "#231f20",
    footerTitleText: "#cb7e7e",
    footerText: "#FFFF",
  },
};

const themes = {
  light: LightTheme,
  dark: DarkTheme,
  borderRadius: "6px",
  fontSize: {
    text: {
      smallScreen: "12px", //mobile, phablet, tablet
      normalScreen: "14px", //laptop, desktop
      largeScreen: "16px", //large desktop, TVs
    },
    header: {
      smallScreen: "16px", //mobile, phablet, tablet
      normalScreen: "18px", //laptop, desktop
      largeScreen: "26px", //large desktop
      extraLarge: "40px",
    },
  },
};

export default themes;
