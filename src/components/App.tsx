import React, { useState } from 'react';
import Header from "./header";
import TwitterIcon from '@material-ui/icons/Twitter';
import GithubIcon from '@material-ui/icons/GitHub';
const App: React.FC = () => {
  const [hurry,setHurry] = useState(0);
  let displaySentense = "圏論などをやっています。\nネギトロが好きです。"
  if (hurry>=1) displaySentense = "急かすな"
  if (hurry>=2) displaySentense = "急かすな！！！！"
  if (hurry>=5) displaySentense = "ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ"
  // const setOnClick = (str: string) => setHurry(str)
  return (
    
    <>
      <Header hurry={hurry} onClick={()=>setHurry(hurry+1)}/>
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
              <a className='introduceContent'>{displaySentense}</a>
            </div>
        </div>
      </div>
   </>
  );
}

export default App;