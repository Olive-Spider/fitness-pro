import { logo9, goldline, rotashow, travelers, waves } from '../../assets';

export default function Clients() {
  return (
    <div className=''>
      <p className='text-base text-center font-bold text-slate-900'>
        Trusted by more than 2M users worldwide
      </p>
      <ul className='flex items-center justify-center'>
        <li className='flex'>
          <img src={rotashow} alt='Rotashow' />
        </li>
        <li className='flex'>
          <img src={waves} alt='Waves' />
        </li>
        <li className='flex'>
          <img src={rotashow} alt='Rotashow' />
        </li>
        <li className='flex'>
          <img src={travelers} alt='Travelers' />
        </li>
        <li className='flex'>
          <img src={goldline} alt='Goldlines' />
        </li>
        <li className='flex'>
          <img src={logo9} alt='Velocify 9' />
        </li>
      </ul>
    </div>
  );
}
