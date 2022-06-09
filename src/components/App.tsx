import React, { useState } from 'react';
import Header from "./header";
import TwitterIcon from '@material-ui/icons/Twitter';
import GithubIcon from '@material-ui/icons/GitHub';
import defaultWords from "./words";

const App: React.FC = () => {
  const [hurry,setHurry] = useState(0);
  const [disp, setdisp] = useState(defaultWords[Math.floor(Math.random() * defaultWords.length)]);
  if (hurry >= 1) setdisp("急かすな")
  if (hurry >= 2) setdisp("急かすな！！！！")
  if (hurry >= 5) setdisp("ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ")
  const setOnClick = (str: string) => ( () => setdisp(str) )
  return (
    <>
      <Header hurry={hurry} onClick={setOnClick}/>
      <div className='pageComponent'>
          <div className='profile'>
              <div className='imgIconSet'>
                  <a className='iconImg'></a>
                  <a href='https://twitter.com/pte_hs' className='snsicon'><TwitterIcon/></a>
                  <a href='https://github.com/ptlx' className='snsicon'><GithubIcon/></a>
              </div>
              <div>
                  <h4 className='myname'>pte</h4>
              </div>
              <div className='introduce'>
                  <a className='introduceContent'>{disp}</a>
              </div>
          </div>
      </div>
   </>
  );
}

export default App;