import '../styles/App.css';

import electronSvg from '@assets/img/electron.svg';
import reactPng from '@assets/img/react.png';
import { Window } from '@customtypes/window';
import React from 'react';

declare const window: Window;

function App(): JSX.Element {
  return (
    <div>
      <div className="container">
        <div className="textWrap">
          <div>
            <p className="heading">Hey, Welcome to the Electron + React + Typescript boilerplate!</p>
            <hr />
            <p>This template comes up with the following features & modules/packages -</p>
            <ul>
              <li>Electron</li>
              <li>React</li>
              <li>Typescript</li>
              <li>Electron forge</li>
              <li>Webpack</li>
              <li>Hot reloading in renderer process</li>
            </ul>
          </div>
          <div>
            <p>
              Testing out assets; in case if anything looks broken - open up an issue{' '}
              <span
                className="spanClick"
                onClick={() => {
                  window.api.openTab('https://www.youtube.com/watch?v=ip1GqdJ68pk');
                }}
                aria-hidden="true"
              >
                here.
              </span>
            </p>
            <div className="images">
              <p className="imagesContainer">
                React :- <img className="reactPng" src={reactPng} alt="ReactSvg" height="60" width="70" />
              </p>

              <p className="imagesContainer">
                Electron :- <img className="electronSvg" src={electronSvg} alt="ElectronSvg" height="90" width="90" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
