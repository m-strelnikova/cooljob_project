import styles from './styles.module.css'

const categoryCardList = [
    {
        id: Math.random(),
        title: "Финансы",
        icon: '../../assets/icons/finance.svg'
    },
    {
        id: Math.random(),
        title: "Грузоперевозки",
        icon: '../../assets/icons/logistic.svg'
    },
    {
        id: Math.random(),
        title: "Дизайн",
        icon: '../../assets/icons/design.svg'
    },
    {
        id: Math.random(),
        title: "Ресторанный бизнес",
        icon: '../../assets/icons/restauran.svg'
    },
    {
        id: Math.random(),
        title: "Медицина",
        icon: '../../assets/icons/medicine.svg'
    },
    {
        id: Math.random(),
        title: "Мультимедиа",
        icon: '../../assets/icons/media.svg'
    },
    {
        id: Math.random(),
        title: "Служба поддержки",
        icon: '../../assets/icons/support.svg'
    },
    {
        id: Math.random(),
        title: "Менеджмент",
        icon: '../../assets/icons/management.svg'
    },
    {
        id: Math.random(),
        title: "Продажи",
        icon: '../../assets/icons/sales.svg'
    },
    {
        id: Math.random(),
        title: "Больше категорий",
        icon: '../../assets/icons/arrow_more.svg'
    },
]
function CategoryCardList() {
    return (
        <div>
            <h2>Работа по категориям</h2>
            <ul> {categoryCardList.map((card) => {
                return (
                   <categoryCard {...card}/>
                )
            }
            )}
            </ul>
        </div>
    )

}
export default CategoryCardList;