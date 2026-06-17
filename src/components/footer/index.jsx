import style from "./styles.module.css";
import f_cooljob from '../../assets/icons/footer_cooljob.svg'
import footer_line from '../../assets/icons/footer_line.svg';
const popularCities = ["Осака", "Касоян", "Токио", "Хаконэ", "Наэба", "Томаму", "Йокогама", "Нагоя", "Саппоро", "Кобэ"];
const socialIcons = [
  {
    id: 101,
    iconUrl: new URL('../../assets/icons/social_linkedin.svg', import.meta.url).href,
    name: 'linkedin',
    href: '#'
  },
  {
    id: 102,
    iconUrl: new URL('../../assets/icons/social_google.svg', import.meta.url).href,
    name: 'google mail',
    href: '#'
  },
  {
    id: 103,
    iconUrl: new URL('../../assets/icons/social_twitter.svg', import.meta.url).href,
    name: 'twitter',
    href: '#'
  },
  {
    id: 104,
    iconUrl: new URL('../../assets/icons/social_facebook.svg', import.meta.url).href,
    name: 'facebook',
    href: '#'
  }
];


function Footer() {
  return (
    <footer>
      <div className={style.cities}>
        <h4>Популярные города</h4>
        <div>{popularCities.map((city, index) =>
          <span key={index}>{city}</span>
        )}
        </div>
      </div>
      <div className={style.line}>
        <img src={footer_line} />
      </div>

      <div className={style.links}>
        <a href="#">
          <img src={f_cooljob} alt="Cooljob logo" />
        </a>
        <div className={style.links_images}>
          {socialIcons.map((icon) => {
            return (
              <a key={icon.id} href={icon.href}>
                <img src={icon.iconUrl} alt={icon.name} />
              </a>
            )
          })
          }
        </div>

      </div>
    </footer>
  )
}

export default Footer;
