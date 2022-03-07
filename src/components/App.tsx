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
            <a className='iconImg'></a>
            <a href='https://twitter.com/pte_hs' className='snsicon'><TwitterIcon/></a>
            <a href='https://github.com/ptlx' className='snsicon'><GithubIcon/></a>
            </div>
            <div>
              <h4 className='myname'>pte</h4>
            </div>
            <div className='introduce'>
              <a className='introduceContent'>圏論などをやっています。</a>
              <a className='introduceContent'>ネギトロが好きです。</a>
            </div>
        </div>
      </div>
   </>
  );
}

export default App;