import { Player } from "../../hooks/types"
import UserImage from '../../assets/user.png'
import './Player.css'
export const PlayerItem =({kills,username}:Player)=>{
return (
<div className="main">
     <div className="info">
        <img src={UserImage} />
        {username}
        </div>
        {`Убийств: ${kills}`}
    </div>
    )
}