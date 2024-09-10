import React from "react";
import { ShimmerText, ShimmerThumbnail } from "react-shimmer-effects";

function ShimmerExample() {
  return (
    <div>
      <h1>Shimmer loading</h1>
      <ShimmerThumbnail height={300} width={300} />
      <ShimmerThumbnail height={300} width={300} />

      <ShimmerText line={3} gap={20} />
    </div>
  );
}

export default ShimmerExample;
