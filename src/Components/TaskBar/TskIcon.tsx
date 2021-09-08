import React from 'react';

const TskIcon: React.FC<{
  src: string;
  onClick: (a: any) => any;
}> = ({
    src,
    onClick
  }) => {
    var imgSrc = `/img/icon/${src}.png`;
    return (
      <div onClick={onClick} className="task-icon base-icon c-pointer" >
        <img width={22} src={imgSrc} alt="" data-click="true" />
      </div>
    )
  }

export default TskIcon;