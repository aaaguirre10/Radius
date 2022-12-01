import '../Stories/Story.css'
import ProfileIcon from "../Profiles/ProfileIcon";
import users from "../../data/user";

function Story(props) {
  //let accountName = users[Math.floor(Math.random() * users.length)].username;
  let accountName = props.user.userName;
  if (accountName.length > 10) {
    accountName = accountName.substring(0, 10) + "...";
  }

  return (
    <div className="story">
      <ProfileIcon iconSize="big" storyBorder={true} image={props.user.imgURL}/>
      <span className="accountName">{accountName}</span>
    </div>
  );
}

export default Story;