import { createTheme } from "@mui/material/styles";

export const Colors = {
    primary: "#fff",
    secondary: "#0d3c00",
    accent: "#79a207",
    gray: "#707070",
    body_bg: "#FAF5F2",
    black: "#000000",
};

const overrides = {
    palette: {
        primary: {
            main: Colors.primary,
        },
        secondary: {
            main: Colors.secondary,
        },
        info: {
            main: Colors.black
        }
    },
    typography: {
        menuItem: {
            fontFamily: 'Source Sans Pro',
            color: Colors.black,
            fontWeight: 400,
            fontSize: "18px",
            '&:hover': {
                color: Colors.accent,
            },
            padding: 0,
            margin: '15px 20px',
            overflowWrap: 'break-word',
            whiteSpace: 'nowrap',
        },
        menuItemMobile: {
            fontFamily: 'Source Sans Pro',
            color: Colors.white,
            fontWeight: 400,
            fontSize: "18px",
            '&:hover': {
                color: Colors.accent,
            },
        },
        h2: {
            fontFamily: 'Source Sans Pro',
            color: Colors.accent,
            fontWeight: 700,
            fontSize: "14px",
            letterSpacing: '2.8px',
            marginBottom: '20px',
        },
        h1: {
            fontFamily: 'Lora',
            color: Colors.secondary,
            fontWeight: 700,
            fontSize: "74px",
            [`@media screen and (max-width: 900px)`]: {
                fontSize: "64px"
            },
            [`@media screen and (max-width: 768px)`]: {
                fontSize: "48px"
            },
            marginBottom: '20px',
        },
        h3: {
            fontFamily: 'Lora',
            color: Colors.secondary,
            fontWeight: 700,
            fontSize: "42px",
            [`@media screen and (max-width: 900px)`]: {
                fontSize: "38px"
            },
            [`@media screen and (max-width: 768px)`]: {
                fontSize: "34px"
            },
            marginBottom: '20px',
        },
        h5: {
            fontFamily: 'Source Sans Pro',
            color: Colors.secondary,
            fontWeight: 700,
            fontSize: "24px",
            marginBottom: '20px',
        },
        subtitle: {
            fontFamily: 'Source Sans Pro',
            fontSize: "18px",
            color: Colors.black,
        },
        p: {
            fontFamily: 'Source Sans Pro',
            fontSize: "17px",
            color: Colors.gray,
        },
        aboutListItem: {
            fontFamily: 'Source Sans Pro',
            color: Colors.black,
            fontWeight: 400,
            fontSize: "15px",
        },
    },
    components: {
        MuiButton: {
            defaultProps: {
                backgroundColor: 'transparent',
                '&:hover': {
                    backgroundColor: 'transparent',
                },
            },
            variants:
                [
                    {
                        props: { variant: 'primary' },
                        style: {
                            backgroundColor: Colors.accent,
                            '&:hover': {
                                backgroundColor: Colors.secondary,
                            },
                            color: Colors.primary,
                            borderRadius: '26px',
                            fontWeight: 700,
                            fontSize: '12px',
                            padding: '15px 40px',
                        }
                    },
                    {
                        props: { variant: 'secondary' },
                        style: {
                            backgroundColor: 'transparent',
                            '&:hover': {
                                backgroundColor: Colors.black,
                                color: Colors.primary,
                            },
                            color: Colors.black,
                            borderRadius: '26px',
                            border: `1px solid ${Colors.black}`,
                            fontWeight: 700,
                            fontSize: '12px',
                            padding: '14px 40px',
                        }
                    }
                ]
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    fontFamily: 'Source Sans Pro',
                    fontWeight: 700,
                    fontSize: '14px',
                    color: Colors.secondary,
                    opacity: 0.6,
                    padding: '15px 20px',
                    letterSpacing: '2.8px',
                    '&.Mui-selected': {
                        color: Colors.secondary,
                        opacity: 1
                    }
                },
            },
        },
    },

};

const theme = createTheme(overrides);

export { overrides };
export default theme;