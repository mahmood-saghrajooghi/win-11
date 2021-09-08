import React from 'react';
import Background from './Background';
import TaskBar from '../../Components/TaskBar/TaskBar';
import StartMenu from '../../Components/Start/StartMenu';
import { useState } from 'react';
import OutsideCLickHandler from 'react-outside-click-handler';

const Layout: React.FC = () => {
  let [startMenuOpen, setStartMenuOpen] = useState<boolean>(false);
  return (
    <div className="layout">
      <Background />
      <div className="desktop">
        <OutsideCLickHandler
          onOutsideClick={() => setStartMenuOpen(false)}
          disabled={startMenuOpen === false}
        >
          <StartMenu isOpen={startMenuOpen} />
        </OutsideCLickHandler>
      </div>
      <TaskBar onClick={() => setStartMenuOpen(c => !c)} />
    </div >
  )
}

export default Layout;