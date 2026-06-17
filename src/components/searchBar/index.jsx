import style from './styles.module.css';
import search_loc from '../../assets/icons/search_location.svg';
import search_job from '../../assets/icons/search_job.svg';
import divide_line from '../../assets/icons/divide_line.svg'

function SearchBar() {
    return (
        <div className={style.searchbar_box}>
            <div className={style.search_job}>
                <img src={search_job} alt="search icon" />
                <span>Должность или компания</span>
            </div>
            <div className={style.search_loc}>
                <img src={divide_line} className={style.divide_line}/>
                <img src={search_loc} alt="location icon" />
                <span>Город, Страна</span>
            </div>
            <div>
                <button>Поиск</button>
            </div>
        </div>
    )

}
export default SearchBar;