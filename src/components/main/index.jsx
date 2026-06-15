import style from './styles.module.css'
import HelpFindWork from '../helpFindWork';

function Main() {
    return (<>
        <div className={style.mainheader}>
            <h1>
                Один клик
                и работа в кармане
            </h1>
            <div className={style.inputbar}>
                <input type="text" />
            </div>

        </div>
        <HelpFindWork />
    </>

    )
}

export default Main; 