import React from "react";
import { ShimmerText, ShimmerThumbnail } from "react-shimmer-effects";
import "../components/ShimmerExample.css"; // Import the CSS file

function ShimmerExample() {
  return (
    <div className="shimmer-container">
      {Array(30)
        .fill("")
        .map((_, index) => (
          <div key={index} className="shimmer-item">
            <ShimmerThumbnail fitOnFrame={true} center={true} />
            {/* <ShimmerThumbnail height={100} width={100} /> */}
            {/* <ShimmerText line={3} gap={20} /> */}
          </div>
        ))}
    </div>
  );
}

export default ShimmerExample;
