import style from './styles.module.css'
import disney from "../../assets/icons/disney.svg";
import facebook from "../../assets/icons/facebook.svg";
import microsoft from "../../assets/icons/microsoft.svg";
import sony from '../../assets/icons/sony.svg'
import cocacola from "../../assets/icons/cocacola.svg"; 

function HelpFindWork () {
    return (
        <div className={style.sponsorbar}>
            <div>
                <p>Помогаем найти работу:</p>
            </div>
            <div className={style.sponsors}>
                <img src={disney} alt="disney" />
                <img src={facebook} alt="facebook" />
                <img src={microsoft} alt="microsoft" />
                <img src={sony} alt="sony" />
                <img src={cocacola} alt="cocacola" />
            </div>
        </div>
    )
}
export default HelpFindWork;