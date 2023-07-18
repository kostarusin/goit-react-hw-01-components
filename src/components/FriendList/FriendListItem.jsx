import style from './FriendListItem.module.css'

export const FriendListItem = ({ id, avatar, name, isOnline }) => {

    return <>
 <li className={style.item} key={id}>
  <span className={`${style.isOnline} ${isOnline ? style.onLine : style.offLine}`}>{isOnline ? 'online' : 'offline'}</span>
  <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
  <p className={style.name}>{name}</p>
</li>
    </>
};