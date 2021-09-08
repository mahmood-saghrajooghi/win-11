import React from 'react';
import TskIcon from './TskIcon';

const TaskBar: React.FC<{
  onClick: (a: any) => any
}> = ({ onClick }) => {
  return (
    <div className="task-bar">
      <div className="task-cont" data-side="center">
        <div className="ts-items-list">
          <TskIcon onClick={onClick} src="home" />
          <TskIcon onClick={() => false} src="search" />
        </div>
      </div>
    </div>
  )
}

export default TaskBar;