import FriendListItem from "./FriendListItem/FriendListItem";
import styles from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <div className={styles.box}>
      <ul className={styles.friendList}>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <FriendListItem
            key={id} /* Переносим key внутрь компонента */
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
