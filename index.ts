// index.ts
type ColorValues = {
    [key: string]: string | number;
};

export function decodedResistorValue(colors: string[]): string {
  const colorValues: ColorValues = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
  };

  const significantDigits = Number(colorValues[colors[0]]) * 10 + Number(colorValues[colors[1]]);
  const multiplier = 10 ** Number(colorValues[colors[2]]);
  const potency = significantDigits * multiplier;
  let unit = '';

  if (potency >= 1e9) {
    unit = 'gigaohms';
  } else if (potency >= 1e6) {
    unit = 'megaohms';
  } else if (potency >= 1e3) {
    unit = 'kiloohms';
  } else {
    unit = 'ohms';
  }

  let result = '';
  if (potency >= 1e9) {
    result = (potency / 1e9).toFixed(0);
  }
  else if (potency >= 1e6) {
    result = (potency / 1e6).toFixed(0);
  } else if (potency >= 1e3) {
    result = (potency / 1e3).toFixed(0);
  } else {
    result = String(potency);
  }

  return `${result} ${unit}`;
}

console.log(decodedResistorValue(['black', 'grey', 'black']));
