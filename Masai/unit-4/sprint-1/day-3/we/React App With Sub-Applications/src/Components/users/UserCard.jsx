import Button from "../common/button/Button";

function UserCard({ id, name, address, avatar, posts, followers, isMarried }) {
  return <div data-testid="user-card">
    <img src={avatar} alt="" />
    <h2>{name}</h2>
    <p>{address}</p>
    <h3>Posts</h3>
    <p>{posts}</p>
    <h3>Followers</h3>
    <p>{followers}</p>
    <h3>Married</h3>
    <p>{isMarried ? "Yes" : "No"}</p>
    <Button handle={() => alert(`You are now following ${name}`)}>Follow</Button>
  </div>;
}

export default UserCard;


/*
    id: 1,
    name: "Chrisse",
    address: "4018 Sachs Trail",
    avatar: "https://placehold.co/200",
    posts: 1841,
    followers: 66868,
    isMarried: true,
*/