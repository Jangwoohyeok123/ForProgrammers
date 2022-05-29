function solution(sizes) {
  let wmax = 0;
  let hmax = 0;

  for (let i = 0; i < sizes.length; i++) {
    const [w, h] = sizes[i];

    if (w > h) {
      if (wmax < w) wmax = w;
      if (hmax < h) hmax = h;
    } else {
      if (wmax < h) wmax = h;
      if (hmax < w) hmax = w;
    }
  }

  return wmax * hmax;
}
