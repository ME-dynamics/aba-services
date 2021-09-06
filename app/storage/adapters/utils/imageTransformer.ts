import { adapterTypes } from "../../types";

export function buildImageTransformer(
  args: adapterTypes.IBuildImageTransformer
) {
  const { sharp } = args;

  return function imageTransformer(info: adapterTypes.IImageTransformer) {
    const { width, height } = info;
    return sharp()
      .resize(width, height, {
        fit: "fill",
        background: { r: 255, g: 255, b: 255, alpha: 1 },
      })
      .jpeg({ quality: 90, optimiseCoding: true });
  };
}
