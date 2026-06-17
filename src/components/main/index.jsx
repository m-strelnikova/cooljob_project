import style from './styles.module.css'
import HelpFindWork from '../helpFindWork';
import SearchBar from '../searchBar';
import CategoryCardList from '../categoryCardList';
import VacancyCardList from '../vacancyCardList';

function Main() {
    return (<>
        <div className={style.mainheader}>
            <h1>
                Один клик
                и работа в кармане
            </h1>
            <div className={style.inputbar}>
                <SearchBar />
            </div>

        </div>
        <HelpFindWork />
        <CategoryCardList />
        <VacancyCardList />
    </>
    )
}

export default Main; 