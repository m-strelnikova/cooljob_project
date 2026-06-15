import style from './styles.module.css'
import CategoryCard from '../categoryCard';
const categoryCardList = [
    {
        id: Math.random(),
        title: "Финансы",
        icon: new URL('../../assets/icons/finance.svg', import.meta.url).href
    },
    {
        id: Math.random(),
        title: "Грузоперевозки",
        icon: new URL('../../assets/icons/logistic.svg', import.meta.url).href
    },
    {
        id: Math.random(),
        title: "Дизайн",
        icon: new URL('../../assets/icons/design.svg', import.meta.url).href
    },
    {
        id: Math.random(),
        title: "Ресторанный бизнес",
        icon: new URL('../../assets/icons/restauran.svg', import.meta.url).href
    },
    {
        id: Math.random(),
        title: "Медицина",
        icon: new URL('../../assets/icons/medicine.svg', import.meta.url).href
    },
    {
        id: Math.random(),
        title: "Мультимедиа",
        icon: new URL('../../assets/icons/media.svg', import.meta.url).href
    },
    {
        id: Math.random(),
        title: "Служба поддержки",
        icon: new URL('../../assets/icons/support.svg', import.meta.url).href
    },
    {
        id: Math.random(),
        title: "Менеджмент",
        icon: new URL('../../assets/icons/management.svg', import.meta.url).href
    },
    {
        id: Math.random(),
        title: "Продажи",
        icon:  new URL('../../assets/icons/sales.svg', import.meta.url).href
    },
    {
        id: 1000,
        title: "Больше категорий",
        icon: new URL('../../assets/icons/arrow_more.svg', import.meta.url).href
    },
]


function CategoryCardList() {
    return (
        <div className={style.cardList}>
            <h2>Работа по категориям</h2>
            <ul> {categoryCardList.map((card) => {
                return (
                    <li key={card.id}>
                        <CategoryCard {...card} />
                    </li>
                )
            })}
            </ul>
        </div>
    )

}
export default CategoryCardList;