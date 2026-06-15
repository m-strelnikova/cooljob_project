import styles from './styles.module.css'

const categoryCardList = [
    {
        id: Math.random(),
        title: "",
        icon: '../../assets/icons/'
    },
    {
        id: Math.random(),
        title: "",
        icon: '../../assets/icons/'
    },
    {
        id: Math.random(),
        title: "",
        icon: '../../assets/icons/'
    },
    {
        id: Math.random(),
        title: "",
        icon: '../../assets/icons/'
    },
    {
        id: Math.random(),
        title: "",
        icon: '../../assets/icons/'
    },
    {
        id: Math.random(),
        title: "",
        icon: '../../assets/icons/'
    },
    {
        id: Math.random(),
        title: "",
        icon: '../../assets/icons/'
    },
    {
        id: Math.random(),
        title: "",
        icon: '../../assets/icons/'
    },
]
function CategoryCardList() {
    return (
        <div>
            <h2>Работа по категориям</h2>
            <ul> {categoryCardList.map((card) => {
                return (
                    <li key={card.id}>
                        <img src="" alt="icon" />
                        <h4>{card.title}</h4>
                    </li>
                )
            } 
            )}
            </ul>
        </div>
    )

}
export default CategoryCardList;