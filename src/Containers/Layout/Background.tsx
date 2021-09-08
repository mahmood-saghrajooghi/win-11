import React from 'react';

const Background: React.FC = () => {
  return (
    <div style={{
      backgroundImage: "url('/img/wallpaper/default/img0.jpg')",
      position: "absolute",
      width: "100%",
      height: "100%",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}></div>
  )
}

export default Background;