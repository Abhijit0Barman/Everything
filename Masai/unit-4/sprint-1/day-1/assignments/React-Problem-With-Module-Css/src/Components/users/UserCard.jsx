import styles from "./Users.module.css";

// const UserCard = ({ user }) => {
  // const { name, address, avatar, posts, followers, isMarried } = user;
  const UserCard = ({ name, address, avatar, posts, followers, isMarried }) => {
  
  const handleFollow = () => {
    alert(`You are now following ${name}`);
  };

  return (
    <div data-testid="user-card" className={styles.userCard}>
      <img src={avatar} alt="User Avatar" />
      <h2 data-testid="user_name">{name}</h2>
      <p data-testid="user_address">{address}</p>

      <h3>Posts</h3>
      <p data-testid="user_posts">{posts}</p>

      <h3>Followers</h3>
      <p data-testid="user_followers">{followers}</p>

      <h3>Married</h3>
      <p data-testid="is-married">{isMarried ? "Yes" : "No"}</p>

      <button onClick={handleFollow}>Follow</button>
    </div>
  );
};

export default UserCard;
