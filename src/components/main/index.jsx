import style from './styles.module.css'
import HelpFindWork from '../helpFindWork';
import SearchBar from '../searchBar';
import CategoryCardList from '../categoryCardList';
import VacancyCardList from '../vacancyCardList';
import figure from "../../assets/icons/main_deco_form.svg";


function Main() {
    return (<>
        <section className={style.mainheader}>
            <h1>
                Один клик
                и работа в кармане
            </h1>
            <div className={style.inputbar}>
                <SearchBar />
            </div>
            <svg className={style.main_deco_figure} width="895" height="708" viewBox="0 0 895 708" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M43.8426 490.462C120.298 425.63 204.227 370.166 293.844 325.251L913.427 14.7242C1037.76 -47.5892 1160.71 101.221 1076.07 211.569L763.861 618.58C741.03 648.344 706.534 666.893 669.113 669.526L132.164 707.307C13.4174 715.662 -46.9492 567.451 43.8426 490.462Z" fill="#92C9FC" />
            </svg>

        </section>
        <section>
            <HelpFindWork />
            <CategoryCardList />
            <VacancyCardList />
        </section>
    </>
    )
}

export default Main; 