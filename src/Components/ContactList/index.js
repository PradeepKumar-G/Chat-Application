import { Link } from "react-router-dom";
import {
  ContactItemContainer,
  ContactName,
  PhoneNumber
} from "./styledComponents";
const Contacts = (props) => {
  const { contactdetails } = props;
  const { id, name, phone } = contactdetails;
  console.log(name);
  return (
    <Link to={`/contacts/${id}`}>
      <ContactItemContainer>
        <ContactName>{name}</ContactName>
        <PhoneNumber>{phone}</PhoneNumber>
      </ContactItemContainer>
    </Link>
  );
};
export default Contacts;
