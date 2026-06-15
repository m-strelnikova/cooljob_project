import style from './styles.module.css';

function CategoryCard({ id, title, icon }) {

    return (
        <div className={id === 1000 ? style.showmore : style.category_card}>
            <img src={icon} alt={title} />
            <h4>{title}</h4>
        </div >
    )

}
export default CategoryCard;