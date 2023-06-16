import { logo9, goldline, rotashow, travelers, waves } from '../../assets';

export default function Clients() {
  return (
    <div className=''>
      <p className='text-base text-center font-bold text-slate-900 dark:text-white'>
        Trusted by more than 2M users worldwide
      </p>
      <ul className='flex items-center justify-center space-x-10 py-14 hide-scroll-bar overflow-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-primary/20'>
        <li className='flex flex-shrink-0'>
          <img src={rotashow} alt='Rotashow' />
        </li>
        <li className='flex flex-shrink-0'>
          <img src={waves} alt='Waves' />
        </li>
        <li className='flex flex-shrink-0'>
          <img src={rotashow} alt='Rotashow' />
        </li>
        <li className='flex flex-shrink-0'>
          <img src={travelers} alt='Travelers' />
        </li>
        <li className='flex flex-shrink-0'>
          <img src={goldline} alt='Goldlines' />
        </li>
        <li className='flex flex-shrink-0'>
          <img src={logo9} alt='Velocify 9' />
        </li>
      </ul>
    </div>
  );
}
