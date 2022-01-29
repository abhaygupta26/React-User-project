import Card from "../UI/Card";
import style from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={style.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
