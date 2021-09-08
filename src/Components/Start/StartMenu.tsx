import React from 'react';
import { FaRegClock, FaRegNewspaper, FaFilm, FaChartLine } from 'react-icons/fa';
import { TopApp } from './Apps';
import TabSelector from './TabSelector';

const StartMenu: React.FC<{
  isOpen: boolean
}> = ({ isOpen }) => {
  return (
    <div className="start-menu" data-hide={isOpen ? "" : "true"} data-align="center">
      <div className="st-menu">
        {/* <div className="menu-up">
          <div className="pinned-apps">
            <div className="stak-bar">
              <div className="gp-name">Pinned</div>
              <div className="gp-btn c-pointer">
                <div>All Apps</div>
                <div className="ui-icon p-none">
                  <FaChevronRight style={{ width: "10px", height: "10px" }} />
                </div>
              </div>
            </div>
            <div className="pn-apps">
              <PinApp src="github" label="My Github" />
              <PinApp src="winWord" label="Word" />
              <PinApp src="powerpoint" label="Power Point" />
              <PinApp src="onenote" label="One Note" />
              <PinApp src="mail" label="Mail" />
              <PinApp src="todo" label="Todo" />
              <PinApp src="store" label="Store" />
              <PinApp src="photos" label="Photos" />
              <PinApp src="yphone" label="Your Phone" />
              <PinApp src="notepad" label="Notepad" />
              <PinApp src="board" label="White Board" />
              <PinApp src="calculator" label="My Github" />
              <PinApp src="calender" label="Calender" />
              <PinApp src="twitter" label="Twitter" />
              <PinApp src="spotify" label="Spotify" />
              <PinApp src="code" label="VS Code" />
              <PinApp src="terminal" label="Terminal" />
              <PinApp src="edge" label="Edge" />
            </div>
          </div>
          <div className="rec-apps">
            <div className="stak-bar rec-apps">
              <div className="gp-name">Recomended</div>
            </div>
            <div className="re-apps">
              <RecApp src="mail" label="Mail" desc="Email me" />
              <RecApp src="github" label="Github" desc="My Github account" />
              <RecApp src="code" label="VS Code" desc="This Project Source Code" />
              <RecApp src="spotify" label="Spotify" desc="My Playlist" />
              <RecApp src="twitter" label="Twitter" desc="My Twitter" />
              <RecApp src="photos" label="Photos" desc="My Photos" />
            </div>
          </div>
        </div> */}

        <div className="search-menu">
          <div className="search-bar">
            <div className="ui-icon p-none">
              <img width={16} src="/img/icon/ui/search.png" alt="" />
            </div>
            <input type="text" placeholder="search something..." />
          </div>
          <div className="flex py-3 px-1 text-xs">
            <TabSelector
              className="w-50 text-gray-700"
              items={[
                { value: "all", label: "All" },
                { value: "apps", label: "Apps" },
                { value: "documents", label: "Documents" },
                { value: "web", label: "Web" },
                { value: "more", label: "more" }]}
              onChange={() => false} />
          </div>
          <div className="text-xss font-semibold mb-4">Top Apps </div>
          <div className="top-apps flex w-100 justify-content-between" >
            <TopApp src="terminal" label="Terminal" />
            <TopApp src="github" label="My Github" />
            <TopApp src="code" label="VS Code" />
            <TopApp src="spotify" label="Spotify" />
            <TopApp src="edge" label="Edge" />
          </div>
          <div className="text-xss font-semibold mt-8">Quick Search</div>
          <div className="quick-searches pl-4 mt-2">
            <div className="qk-srch flex align-items-center py-3 c-pointer">
              <div className="ui-icon">
                <FaRegClock style={{ fontSize: '1em' }} />
              </div>
              <div className="ml-4 text-xs">Today in history</div>
            </div>
            <div className="qk-srch flex align-items-center py-3 c-pointer">
              <div className="ui-icon">
                <FaFilm style={{ fontSize: '1em' }} />
              </div>
              <div className="ml-4 text-xs">New Movies</div>
            </div>
            <div className="qk-srch flex align-items-center py-3 c-pointer">
              <div className="ui-icon">
                <FaRegNewspaper style={{ fontSize: '1em' }} />
              </div>
              <div className="ml-4 text-xs">Top News</div>
            </div>
            <div className="qk-srch flex align-items-center py-3 c-pointer">
              <div className="ui-icon">
                <FaChartLine style={{ fontSize: '1em' }} />
              </div>
              <div className="ml-4 text-xs">Markets Today</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StartMenu;