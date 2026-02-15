/// <reference types="next" />
/// <reference types="next/image-types/global" />

declare module "*.png" {
  const content: import("../dist/shared/lib/image-external").StaticImageData;
  export default content;
}
