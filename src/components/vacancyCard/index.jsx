import location_icon from '../../assets/icons/location.svg';
import style from './styles.module.css';

function VacancyCard({ id, category_icon, category, title, location, company, publisher, date_published }) {

    return (
        <div className={style.vacancy_card}>

            <div className={style.category}>
                <img src={category_icon} alt="dot" />
                <span>{category}</span>
            </div>

            <h4>{title}</h4>

            <div className={style.location}>
                <img src={location_icon} alt="location" />
                <span>{location}</span>
            </div>
            <div className={style.publisher}>
                <img src={company} alt={publisher} />
                <span>{publisher}, {date_published}</span>
            </div>
        </div >)
}
export default VacancyCard; 