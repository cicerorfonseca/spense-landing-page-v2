import facebook from '../assets/imgs/social-media/facebook-logo.png';
import dribble from '../assets/imgs/social-media/dribble-logo.png';
import youtube from '../assets/imgs/social-media/youtube-logo.png';
import pinterest from '../assets/imgs/social-media/pinterest-logo.png';
import twitter from '../assets/imgs/social-media/twitter-logo.png';
import reddit from '../assets/imgs/social-media/reddit-logo.png';
import google from '../assets/imgs/social-media/google-logo.png';
import slack from '../assets/imgs/social-media/slack-logo.png';

const SocialMedia = () => {
  return (
    <div className='social-media-logos container'>
      <ul className='logos-list'>
        <li className='logo-img'>
          <img src={facebook} className='facebook-logo' alt='facebook logo' />
        </li>
        <li className='logo-img'>
          <img src={dribble} className='dribble-logo' alt='dribble logo' />
        </li>
        <li className='logo-img'>
          <img src={youtube} className='youtube-logo' alt='youtube logo' />
        </li>
        <li className='logo-img'>
          <img src={pinterest} className='pinterest-logo' alt='pinterest logo' />
        </li>
        <li className='logo-img'>
          <img src={twitter} className='twitter-logo' alt='twitter logo' />
        </li>
        <li className='logo-img'>
          <img src={reddit} className='twitter-logo' alt='reddit logo' />
        </li>
        <li className='logo-img'>
          <img src={google} className='google-logo' alt='google logo' />
        </li>
        <li className='logo-img'>
          <img src={slack} className='slack-logo' alt='slack logo' />
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
