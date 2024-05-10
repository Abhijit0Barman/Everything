const UserCard = ({ id, name, address, avatar, posts, followers, isMarried }) => {
  return <div data-testid="user-card" style={{ margin:"10px",padding:"10px",border: "1px solid black", display: "flex", justifyContent: "center" }}>
    <img  style={{ width: "150px", borderRadius: "50%" }} src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt={name} />
    <h2>{name}</h2>
    <p>{address}</p>
    <h3>Posts</h3>
    <p>{posts}</p>
    <h3>Followers</h3>
    <p>{followers}</p>
    <h3>Married</h3>
    <p>{isMarried ? "Yes" : "No"}</p>
    <button onClick={() => alert(`You are now following ${name}`)}>Follow</button>
  </div>;
};

export default UserCard;
