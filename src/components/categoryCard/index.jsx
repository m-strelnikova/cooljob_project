

function CategoryCard({ id, title, icon }) {
    return (
        <>
            <li key={id}>
                <img src={icon} alt={title} />
                <h4>{title}</h4>
            </li>
        </>
    )

}