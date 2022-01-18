import { Component } from "react";
import Contacts from "../ContactList";
export default class Home extends Component {
  state = {
    contactList: []
  };

  componentDidMount() {
    this.getContactList();
  }

  getContactList = async () => {
    const { contactList } = this.state;
    const options = {
      method: "GET"
    };
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users",
      options
    );
    const data = await response.json();
    if (response.status) {
      this.setState({ contactList: data });
    }
  };

  render() {
    const { contactList } = this.state;
    console.log(contactList);
    return (
      <>
        {contactList.map((data) => (
          <Contacts key={data.id} contactdetails={data} />
        ))}
      </>
    );
  }
}
