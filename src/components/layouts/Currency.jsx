import React from "react";

const Currency = () => {
  return (
    <div style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
      <iframe
        src="https://www.widgets.investing.com/live-currency-cross-rates?theme=darkTheme&roundedCorners=true&pairs=1,3,2,4,7,8,6,9,1716,1717,997699,48358,68"
        width="100%"
        height="400px"
        frameBorder="0"
        allowTransparency="true"
        marginWidth="0"
        marginHeight="0"
        title="Live Currency Cross Rates"
        
      ></iframe>
    </div>
  );
};

export default Currency;
