// `linear-gradient(${gradientAngle}deg, ${firstBgColor.values.hex} 0%, ${secondBgColor.values.hex} 100%)`

type GradientStop = {
  color: string;
  percent: number;
};

type GradientOffet = {
  x: number;
  y: number;
};

export enum GradientPreset {
  preset1 = "preset-1",
  preset2 = "preset-2",
  preset3 = "preset-3",
  preset5 = "preset-5",
  preset6 = "preset-6",
}

export const createLinearGradient = (
  angle: number,
  stops: GradientStop[]
): string => {
  let gradient = "linear-gradient(";
  gradient += `${angle}deg`;

  for (let s = 0; s < stops.length; s++) {
    let stop = stops[s];
    gradient += `, ${stop.color} ${stop.percent}%`;
  }
  gradient += ")";

  return gradient;
};

// Right now only creates circle radial gradients
export const createRadialGradient = (
  offset: GradientOffet,
  stops: GradientStop[]
): string => {
  let gradient = `radial-gradient(circle at ${offset.x}% ${offset.y}%`;
  for (let s = 0; s < stops.length; s++) {
    let stop = stops[s];
    gradient += `, ${stop.color} ${stop.percent}%`;
  }
  gradient += ")";

  return gradient;
};

export const presetGradient1 = (
  firstColor: string,
  secondColor: string,
  thirdcolor: string
) => {
  let gradient = "";

  gradient += createRadialGradient({ x: 50, y: 50 }, [
    { color: firstColor, percent: 0 },
    { color: "transparent", percent: 90 },
  ]);
  gradient += ",";
  gradient += createRadialGradient({ x: 50, y: 50 }, [
    { color: secondColor, percent: 0 },
    { color: "transparent", percent: 100 },
  ]);
  gradient += ",";

  gradient += createRadialGradient({ x: 0, y: 0 }, [
    { color: "#000000", percent: 0 },
  ]);

  return gradient;
};
export const presetGradient2 = (
  firstColor: string,
  secondColor: string,
  thirdcolor: string
) => {
  let gradient = "";
  gradient += createRadialGradient({ x: 0, y: 0 }, [
    { color: "#00000044", percent: 0 },
  ]);
  gradient += ",";

  gradient += createLinearGradient(15, [
    { color: firstColor, percent: 0 },
    { color: secondColor, percent: 50 },
    { color: secondColor, percent: 40 },
    { color: thirdcolor, percent: 100 },
  ]);

  return gradient;
};

export const presetGradient3 = (
  firstColor: string,
  secondColor: string,
  thirdcolor: string
) => {
  let gradient = "";

  gradient += createRadialGradient({ x: 50, y: 50 }, [
    { color: firstColor, percent: 0 },
    { color: "transparent", percent: 90 },
  ]);
  gradient += ",";
  gradient += createRadialGradient({ x: 50, y: 50 }, [
    { color: secondColor, percent: 0 },
    { color: "transparent", percent: 100 },
  ]);
  gradient += ",";
  gradient += createRadialGradient({ x: 50, y: 80 }, [
    { color: thirdcolor, percent: 0 },
    { color: "transparent", percent: 50 },
  ]);

  gradient += ",";
  gradient += createRadialGradient({ x: 0, y: 0 }, [
    { color: "#00000022", percent: 0 },
  ]);

  return gradient;
};
export const presetGradient5 = (
  firstColor: string,
  secondColor: string,
  thirdcolor: string
) => {
  let gradient = "";

  gradient += createRadialGradient({ x: 30, y: 30 }, [
    { color: firstColor, percent: 0 },
    { color: "transparent", percent: 50 },
  ]);
  gradient += ",";
  gradient += createRadialGradient({ x: 70, y: 60 }, [
    { color: secondColor, percent: 0 },
    { color: "transparent", percent: 50 },
  ]);
  gradient += ",";
  gradient += createRadialGradient({ x: 50, y: 80 }, [
    { color: thirdcolor, percent: 0 },
    { color: "transparent", percent: 50 },
  ]);
  gradient += ",";
  gradient += createRadialGradient({ x: 0, y: 0 }, [
    { color: "#000000dd", percent: 0 },
  ]);

  return gradient;
};

export const presetGradient6 = (
  firstColor: string,
  secondColor: string,
  thirdcolor: string
) => {
  let gradient = "";

  gradient += createRadialGradient({ x: 20, y: 30 }, [
    { color: secondColor, percent: 0 },
    { color: "transparent", percent: 50 },
  ]);
  gradient += ",";
  gradient += createRadialGradient({ x: 80, y: 60 }, [
    { color: thirdcolor, percent: 0 },
    { color: "transparent", percent: 70 },
  ]);
  gradient += ",";
  gradient += createRadialGradient({ x: 50, y: 90 }, [
    { color: firstColor, percent: 0 },
    { color: "transparent", percent: 30 },
  ]);
  gradient += ",";
  gradient += createRadialGradient({ x: 0, y: 0 }, [
    { color: "#000000ee", percent: 0 },
  ]);

  return gradient;
};

export const selectBackgroundPreset = (
  preset: GradientPreset,
  color1: string,
  color2: string,
  color3: string
) => {
  switch (preset) {
    case GradientPreset.preset1:
      return presetGradient1(color1, color2, color3);
    case GradientPreset.preset2:
      return presetGradient2(color1, color2, color3);
    case GradientPreset.preset3:
      return presetGradient3(color1, color2, color3);
    case GradientPreset.preset5:
      return presetGradient5(color1, color2, color3);
    case GradientPreset.preset6:
      return presetGradient6(color1, color2, color3);
  }
};
