import { styled } from "@styles/stitches"

export const Footer = styled("footer", {
  paddingTop: "100px",
  paddingBottom: "$3",
  color: "$primaryFill",
  paddingLeft: "$2",
  paddingRight: "$2",

  a: {
    borderBottom: "1px dotted $primaryFill",
  },
})
