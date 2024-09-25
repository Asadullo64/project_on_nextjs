// From here, you can control the layout of the page, making it easier to manage all fonts under a single class.

import localFont from "next/font/local";

export const font = localFont({
  src: [
    {
      path: "../../../public/fonts/TTTravels-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/TTTravels-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../../public/fonts/TTTravels-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/TTTravels-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../../public/fonts/TTTravels-DemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../../public/fonts/TTTravels-DemiBoldItalic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../../public/fonts/TTTravels-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/fonts/TTTravels-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
});
