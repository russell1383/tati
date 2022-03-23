import { css } from "styled-components";

const devices = {
  xsmallphone: (...args) => css`
    @media (min-width: 400px) {
      ${css(...args)};
    }
  `,
  phone: (...args) => css`
    @media (min-width: 520px) {
      ${css(...args)};
    }
  `,
  tablet: (...args) => css`
    @media (min-width: 768px) {
      ${css(...args)};
    }
  `,
  laptop: (...args) => css`
    @media (min-width: 1024px) {
      ${css(...args)};
    }
  `,
  desktop: (...args) => css`
    @media (min-width: 1280px) {
      ${css(...args)};
    }
  `,
  desktopLg: (...args) => css`
    @media (min-width: 1400px) {
      ${css(...args)};
    }
  `,
};
export default devices;
