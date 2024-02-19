import * as React from "react";
import { styled, alpha, Box } from "@mui/system";
import { Slider as BaseSlider, sliderClasses } from "@mui/base/Slider";

export default function DiscreteSlider({
  defaultValue,
  setmultiplierVal,
}: any) {
  function valuetext(value: number) {
    return `${value}°C`;
  }

  return (
    <Box>
      <Slider
        onChange={(e: any) => {
          e.target.value == 0.1
            ? setmultiplierVal("0.1")
            : e.target.value == 0.7
            ? setmultiplierVal("0.5")
            : e.target.value == 1.3
            ? setmultiplierVal("1")
            : setmultiplierVal("2");
        }}
        aria-label="Slider"
        defaultValue={
          defaultValue == 0.1
            ? defaultValue
            : defaultValue == 0.5
            ? 0.7
            : defaultValue == 1
            ? 1.3
            : 1.9
        }
        getAriaValueText={valuetext}
        shiftStep={0.5}
        step={0.6}
        marks
        min={0.1}
        max={2}
      />
      <div className="flex items-center justify-between -translate-x-1 pr-1 -translate-y-2">
        <h1 className="text-[#CCCCCC] text-[14px]  -translate-x-1">0.1</h1>
        <h1 className="text-[#CCCCCC] text-[14px] -translate-x-2 ">0.5</h1>
        <h1 className="text-[#CCCCCC] text-[14px]  -translate-x-2">1</h1>
        <h1 className="text-[#CCCCCC] text-[14px]">2</h1>
      </div>
    </Box>
  );
}

interface SliderValueLabelProps {
  children: React.ReactElement;
}

function SliderValueLabel({ children }: SliderValueLabelProps) {
  return <span className="valueLabel">{children}</span>;
}

const blue = {
  100: "#DAECFF",
  200: "#99CCF3",
  400: "#3399FF",
  300: "#66B2FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B3",
  900: "#003A75",
};

const Slider = styled(BaseSlider)(
  ({ theme }) => `
  color: ${theme.palette.mode === "light" ? blue[500] : blue[400]};
  height: 6px;
  width: 100%;
  padding: 16px 0;
  display: inline-flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;



  & .${sliderClasses.rail} {
    display: block;
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 6px;
    background-color: currentColor;
    opacity: 0.3;
  }

  & .${sliderClasses.track} {
    display: block;
    position: absolute;
    height: 4px;
    border-radius: 6px;
    background-color: currentColor;
  }

  & .${sliderClasses.thumb} {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    margin-left: -6px;
    width: 20px;
    height: 20px;
    box-sizing: border-box;
    border-radius: 50%;
    outline: 0;
    background-color: ${theme.palette.mode === "light" ? blue[500] : blue[400]};
    transition-property: box-shadow, transform;
    transition-timing-function: ease;
    transition-duration: 120ms;
    transform-origin: center;

    &:hover {
      box-shadow: 0 0 0 6px ${alpha(
        theme.palette.mode === "light" ? blue[200] : blue[300],
        0.3
      )};
    }

    &.${sliderClasses.focusVisible} {
      box-shadow: 0 0 0 8px ${alpha(
        theme.palette.mode === "light" ? blue[200] : blue[400],
        0.5
      )};
      outline: none;
    }

    &.${sliderClasses.active} {
      box-shadow: 0 0 0 8px ${alpha(
        theme.palette.mode === "light" ? blue[200] : blue[400],
        0.5
      )};
      outline: none;
      transform: scale(1.2);
    }
  }

  & .${sliderClasses.mark} {
    position: absolute;
    width: 1px;
    height: 4px;
    border-radius: 99%;
    background-color: #fff;
    transform: translateX(-50%);
  }

  & .${sliderClasses.markActive} {
    background-color: #fff;
  }

  & .valueLabel {

    font-weight: 600;
    font-size: 12px;
    position: relative;
    top: -2em;
    text-align: center;
    align-self: center;
  }
`
);
