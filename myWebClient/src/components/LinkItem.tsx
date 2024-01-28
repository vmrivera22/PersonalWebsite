import { Link } from "react-router-dom";
import "../css/DropdownMenu.css";

interface Props {
  dest: string;
  linkName: string;
  style: string;
}

// Component that creates links for the header/menu
const LinkItem = ({ dest, linkName, style }: Props) => {
  return (
    <Link to={dest} className={style}>
      {linkName}
    </Link>
  );
};

export default LinkItem;
