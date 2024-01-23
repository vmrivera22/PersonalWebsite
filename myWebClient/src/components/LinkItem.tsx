import { Link } from "react-router-dom";
import "../css/DropdownMenu.css";

interface Props {
  dest: string;
  linkName: string;
  leftIcon?: string;
  rightIcon?: string;
  style: string;
}

const LinkItem = ({ dest, linkName, leftIcon, rightIcon, style }: Props) => {
  return (
    <Link to={dest} className={style}>
      <span className="icon-button">{leftIcon}</span>
      {linkName}
      <span className="icon--right">{rightIcon}</span>
    </Link>
  );
};

export default LinkItem;
