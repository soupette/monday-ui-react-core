import { colorsHashMap } from "../../../general-stories/colors/colors-vars-map";
import { ColorDescription } from "../../stand-alone-documentaion/typography/color-description/color-description";
import { Frame } from "..";

export const ColorsDescriptions = ({ colors }) => {
  const descriptions = colors.map(color => (
    <ColorDescription colorName={color} description="Use for default text color" />
  ));
};
