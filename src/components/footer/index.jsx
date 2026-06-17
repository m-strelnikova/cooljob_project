import style from "./styles.module.css";
const popularCities = ["Осака", "Касоян", "Токио", "Хаконэ", "Наэба", "Томаму", "Йокогама", "Нагоя", "Саппоро", "Кобэ"];
import footer_line from '../../assets/icons/footer_line.svg';
const socialIcons = [ 
  {
    id: 101,
    iconUrl: new URL('../../assets/icons/social_linkedin.svg', import.meta.url).href,
    name: 'linkedin',
  }, 
  {
    id: 102,
    iconUrl: new URL('../../assets/icons/social_google.svg', import.meta.url).href,
    name: 'google mail',
  },
  {
    id: 103,
    iconUrl: new URL('../../assets/icons/social_twitter.svg', import.meta.url).href,
    name: 'twitter',
  },
  {
    id: 104,
    iconUrl: new URL('../../assets/icons/social_facebook.svg', import.meta.url).href,
    name: 'facebook',
  }
];


function Footer() {
  return (
    <footer>
      <div className={style.cities}>
        <h4>Популярные города</h4>
        {popularCities.map((city, index) => 
          <span key={index}>{city}</span>
        )}
      </div>
      <img src={footer_line}/>

      <div className={style.links}>
      <div>
        <img src={f_cooljob} alt="Cooljob logo" />
      </div>
      <div>
        {

        }
      </div>

      </div>
    </footer>
  )
}

export default Footer;
