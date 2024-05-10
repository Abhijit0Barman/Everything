import Button from "../common/button/Button";

function UserCard({ user, followUser }) {
  const { name, address, posts, followers, married } = user;

  return (
    <div className="user-card" data-testid="user-card">
      <img src={user.avatar} alt={name} />
      <h2 data-testid="user_name">{name}</h2>
      <p data-testid="user_address">{address}</p>
      <h3>Posts</h3>
      <p data-testid="user_posts">{posts}</p>
      <h3>Followers</h3>
      <p data-testid="user_followers">{followers}</p>
      <h3>Married</h3>
      <p data-testid="user_married">{married ? "Yes" : "No"}</p>
      <Button onClick={()=>followUser(name)}>Follow</Button>
    </div>
  );
}

export default UserCard;
