import style from './styles.module.css';
import VacancyCard from '../vacancyCard';
const vacancyList = [
    {
        id: 11,
        category_icon: new URL('../../assets/icons/fin_dot.svg', import.meta.url).href,
        category: 'Финансы',
        title: 'Менеджер по управлению финансами в крупной компании',
        location: 'Осака, Япония',
        company: new URL('../../assets/icons/sony.svg', import.meta.url).href,
        publisher: 'Sony',
        date_published: '3 дня назад'
    },
    {
        id: 12,
        category_icon: new URL('../../assets/icons/sale_dot.svg', import.meta.url).href,
        category: 'Продажи',
        title: 'Специалист по продажам',
        location: 'Коясан, Япония',
        company: new URL('../../assets/icons/facebook.svg', import.meta.url).href,
        publisher: 'Facebook',
        date_published: '7 дней назад'
    },
    {
        id: 13,
        category_icon: new URL('../../assets/icons/sup_dot.svg', import.meta.url).href,
        category: 'Служба поддержки',
        title: 'Оператор колл центра',
        location: 'Томаму, Япония',
        company: new URL('../../assets/icons/cocacola.svg', import.meta.url).href,
        publisher: 'CocaCola',
        date_published: '1 день назад'
    },
    {
        id: 14,
        category_icon: new URL('../../assets/icons/med_dot.svg', import.meta.url).href,
        category: 'Мультимедиа',
        title: 'Системный администратор',
        location: 'Токио, Япония',
        company: new URL('../../assets/icons/sony.svg', import.meta.url).href,
        publisher: 'Sony',
        date_published: '3 дня назад'
    },
    {
        id: 15,
        category_icon: new URL('../../assets/icons/des_dot.svg', import.meta.url).href,
        category: 'Дизайн',
        title: 'Дизайнер интерьера в профессиональную студию в центре города',
        location: 'Йокогама, Япония',
        company: new URL('../../assets/icons/facebook.svg', import.meta.url).href,
        publisher: 'Facebook',
        date_published: '7 дней назад'
    },
    {
        id: 16,
        category_icon: new URL('../../assets/icons/log_dot.svg', import.meta.url).href,
        category: 'Грузоперевозки',
        title: 'Водитель на дальние дистанции',
        location: 'Кобе. Япония',
        company: new URL('../../assets/icons/cocacola.svg', import.meta.url).href,
        publisher: 'CocaCola',
        date_published: '1 день назад'
    },
]

function VacancyCardList() {
    return ( <div className={style.vacancy_block}>
            <h2>Новые вакансии</h2>
            <p>Найди работу своей мечты прямо сейчас</p>
            <ul className={style.cardList}> {vacancyList.map((vacancy) => {
                return (
                    <li key={vacancy.id}>
                        <VacancyCard {...vacancy} />
                    </li>
                )
            })}
            </ul>
            <button>Все вакансии</button>
        </div>
    )
}

export default VacancyCardList;