import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={styles.friendCard}>
      <img src={avatar} alt={name} className={styles.friendAvatar} />
      <p className={styles.friendName}>{name}</p>
      <p
        className={`${styles.friendStatus} ${isOnline ? styles.online : styles.offline}`}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
