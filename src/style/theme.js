import { css } from "styled-components";

const colors = {
  //main colors
  bg: "#FFF",
  gray: "#f1f1f1",
  pink: "#FFB3B3",
  m1: "#1C5E75",
  m2: "#903909",
  l1: "#FFFAEF",
  l2: "#FFF5E3",
  d1: "#676767",
  d2: "#3D3D3D",
};

const fonts = {
  l: "GmarketSansBold",
  m: "GmarketSansMedium",
  s: "GmarketSansLight",
};

const fontStyles = {
  mainTitle: css`
    font-family: ${fonts.l};
    color: ${colors.d2};
    font-size: 3rem;
  `,
  semiTitle: css`
    font-family: ${fonts.l};
    color: ${colors.d2};
    font-size: 2rem;
  `,
  body: css`
    font-family: ${fonts.m};
    color: ${colors.d1};
  `,
  mini: css`
    font-family: ${fonts.s};
    color: gray;
    font-size: 0.6rem;
  `,
  smbold: css`
    font-family: ${fonts.s};
    font-weight: bold;
  `,
};

const myTheme = { colors, fonts, fontStyles };

export default myTheme;
