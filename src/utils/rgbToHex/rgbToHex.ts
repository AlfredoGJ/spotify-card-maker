import { Color } from "../../types/types";

const hexMap = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

interface rgb {
  r: number;
  g: number;
  b: number;
}

export default function rgbToHex({ r, g, b}:rgb): string {
  let result = "#";
  let first = (r / 16) | 0;
  let second = r % 16;
  let third = (g / 16) | 0;
  let fourth = g % 16;
  let fifth = (b / 16) | 0;
  let sixth = b % 16;
  result = `${result}${hexMap[first]}${hexMap[second]}${hexMap[third]}${hexMap[fourth]}${hexMap[fifth]}${hexMap[sixth]}`;

  return result;
}
