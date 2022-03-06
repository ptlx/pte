import React from 'react';
import Header from "./header";
import TwitterIcon from '@material-ui/icons/Twitter';
import GithubIcon from '@material-ui/icons/GitHub';
const App: React.FC = () => {

  return (
    <>
      <Header/>
      <div className='pageComponent'>
          <div className='profile'>
            <div className='imgIconSet'>
            <img src='../images/patchouli.jpeg' className='iconImg' alt="sss"></img>
            <a href='https://twitter.com/pte_hs' className='snsicon'><TwitterIcon/></a>
            <a href='https://github.com/ptlx' className='snsicon'><GithubIcon/></a>
            </div>
        </div>
      </div>
   </>
  );
}

export default App;