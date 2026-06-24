# Folder for original images

Place unoptimized files here:

1. content `svg` files (not icons), for example a logo.
2. double-density `png` and `jpg` files.

For each raster image in this folder, running `npm run optimize` creates files in `source/images`:

- an optimized copy with the `@2x` suffix,
- an optimized copy scaled down by 2x with the `@1x` suffix,
- a progressive `webp` copy with the `@2x` suffix,
- a `webp` copy scaled down by 2x with the `@1x` suffix.

The same command also creates an optimized copy of each vector image. You can also run raster optimization separately with `npm run optimize:raster` and vector optimization with `npm run optimize:vector`.

After optimization, you can delete the originals so rerunning the command for new images does not regenerate files that already exist.
