import {
  css,
  DefaultTheme,
  FlattenSimpleInterpolation,
} from "styled-components";
import { aberration } from "./Stuff";
// import 'normalize.css'

const customMedia = (maxWidth: number) => `@media (min-width: ${maxWidth}px)`;

const media = {
  desktop: customMedia(922),
  tablet: customMedia(768),
  phone: customMedia(576),
};
enum Colours {
  // shades of black
  newBlack = "#1c1c1c",
  darkGrey = "#363636",

  //Aqua
  blueSapphire = "hsl(197, 93%, 29%)",
  lightBlueSapphire = "hsl(197, 93%, 42%)", // custom
  metallicSeaweed = "hsl(187, 97%, 29%)",
  persianGreen = "hsl(174, 100%, 33%)",
  mountainMeadow = "hsl(167, 98%, 39%)",
  paleSpringBud = "hsl(63, 69%, 85%)", // creamy white

  // blue shades
  prussianBlue = "hsl(215, 50%, 23%)", //darkest blue
  powderBlue = "hsl(182, 43%, 76%)", // lighter blue
  honeyDew = "hsl(105, 55%, 96%)", // offwhite

  // other colours
  roseMadder = "hsl(353, 81%, 51%)",
  orangePeel = "hsl(35, 100%, 55%)",
  lightOrangePeel = "hsl(35, 100%, 60%)",

  // greys
  platinum = "hsl(90, 4%, 90%)", // light Grey
  quickSilver = "hsl(0, 2%, 64%)", // medium grey
  rocketMetallic = "hsl(352, 6%, 49%)", // pretty dark and grey

  //pastel
  thistlee = "#E0BBE4",
  lavenderPurple = "#957DAD",
  pastelViolet = "#D291BC",
  cottonCandy = "#FEC8D8",
  lumber = "#FFDFD3",

  //pastel backyard
  corn = "#f7ef64",
  honedew = "#f3faf1",
  // paleSpringBud = '#e2eec2',
  lightMossGreen2 = "#b4d7a2",

  //
  crystal = "#a3d6d4",
  champagne = "#f1e9cb",
  lightMossGreen = "#c2d5a7",
  cadetBlue = "#b0abca",
  kobi = "#e2a9be",
  desertSand = "#e1c6ac",
}

enum FontFamilies {
  heading = "'Russo One',Helvetica, Arial, sans-serif",
  // body = "'Kanit',Helvetica, Arial, sans-serif",
  body = "'Silkscreen',Helvetica, Arial, sans-serif",
  cursive = "'Dancing Script',Helvetica, Arial, sans-serif",
  altCursive = "'Dawning of a New Day',Helvetica, Arial, sans-serif",
  paragraph = "'Abel',Helvetica, Arial, sans-serif",
  narrow = "'Wire One',Helvetica, Arial, sans-serif",
}

export interface Theme extends DefaultTheme {
  colours: typeof Colours;
  boxShadows: string[];
  textShadow: string[];
  fontFamilies: typeof FontFamilies;
  animation: FlattenSimpleInterpolation[];
  linearGradient: string;
  media: Record<keyof typeof media, string>;
}

const aberrationAnimation = css`
  ${aberration} 2.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
`;

export const theme: Theme = {
  colours: Colours,
  boxShadows: [
    "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
  ],
  textShadow: [
    "1px 1px 0.4px rgba(0,0,0,0.3)",
    "-2px 1px 1.2px rgba(0,0,0,0.4)",
    "0.06ex 0 #a50610, -0.06ex 0 #0c2aa8, 0 0.14ex 0 rgba(0,0,0,.8), 0.12ex 0 0 rgba(0,0,0,.8)", // chromatic aberration static
  ],
  fontFamilies: FontFamilies,
  animation: [aberrationAnimation],
  linearGradient:
    "linear-gradient(309deg, rgba(5,102,141,1) 0%, rgba(2,128,144,1) 32%, rgba(2,195,154,1) 100%)",
  media,
};
