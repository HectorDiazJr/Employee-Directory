import React from "react";
import DataDetailTable from "./DataDetailTable";
import Nav from "./Nav";
import API from "../API/API";



export default class NameContainer extends React.Component {
    //add methods that will be used inside render function
    state = {
        users: [{ }],
        order: "decsend",
        filteredUsers: [{ }]
    }
    headings = [
        { name: "", width: "5%" },
        { name: "Name", width: "20%" },
        { name: "Phone", width: "20%" },
        { name: "Email", width: "20%" },
        { name: "DOB", width: "20%" }
      ]

    handleSearch = e => {
        console.log(e.target.value);
        const value = e.target.value;
        const currentList = this.state.users.filter(item => {
          // merge data together, then see if user input is anywhere inside
          let values = Object.values(item)
            .join("")
            .toLowerCase();
          return values.indexOf(value.toLowerCase()) !== -1;
        });
        this.setState({ filteredUsers: currentList });
      }
      componentDidMount() {
        API.employeeSearch().then(results => {
          this.setState({
            users: results.data.results,
            filteredUsers: results.data.results
          });
        });
      }
    handleSort= heading => {
        if (this.state.order === "descend") {
            this.setState({
              order: "ascend"
            })
          } else {
            this.setState({
              order: "descend"
            })
          }
          const compareFnc = (a, b) => {
            if (this.state.order === "ascend") {
              if (a[heading] === undefined) {
                return 1;
              } else if (b[heading] === undefined) {
                return -1;
              }
              else if (heading === "name") {
                return a[heading].first.localeCompare(b[heading].first);
              } else {
                return a[heading] - b[heading];
              }
            } else {
              // account for missing values
              if (a[heading] === undefined) {
                return 1;
              } else if (b[heading] === undefined) {
                return -1;
              }
              // numerically
              else if (heading === "name") {
                return b[heading].first.localeCompare(a[heading].first);
              } else {
                return b[heading] - a[heading];
              }
            }
          }
          const sortedUsers = this.state.filteredUsers.sort(compareFnc);
          this.setState({ filteredUsers: sortedUsers });
    }

    render() {
        return (
            <div>
                <Nav handleSearch={this.handleSearch}/>
                <DataDetailTable headings={this.headings}users={this.state.filteredUsers}handleSort={this.handleSort}/>
            </div>
        )
    }
}
