class Color {
  private r: number = 0;
  private g: number = 0;
  private b: number = 0;

  private hexValue: string = "";

  private constructor(r: number, g: number, b: number) {
    this.r = r;
    this.g = g;
    this.b = b;
  }

  get rgb(): { r: number; g: number; b: number } {
    return { r: this.r, g: this.g, b: this.b };
  }
  get hex(): string {
    return this.hexValue;
  }

  static rgbToHex(r: number, g: number, b: number) {
    const toHex = (n: number) => n.toString(16).padStart(2, "0");

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }

  static hexToRgb(hex: string): { r: number; g: number; b: number } {
    // Remove the leading '#' if present
    hex = hex.replace(/^#/, "");

    // Expand shorthand hex form (e.g. "03F") to full form (e.g. "0033FF")
    if (hex.length === 3) {
      hex = hex
        .split("")
        .map((char) => char + char)
        .join("");
    }

    // Validate hex code
    if (hex.length !== 6 || !/^[0-9A-Fa-f]{6}$/.test(hex)) {
      return { r: 0, g: 0, b: 0 };
    }

    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return { r, g, b };
  }

  static fromRGB(r: number, g: number, b: number) {
    const hexvalue = this.rgbToHex(r, g, b);
    const color = new Color(r, g, b);
    color.hexValue = hexvalue;
    return color;
  }

  static fromHex(hexvalue: string) {
    const { r, g, b } = this.hexToRgb(hexvalue);
    const color = new Color(r, g, b);
    color.hexValue = hexvalue;
    return color;
  }
}

export default Color;
