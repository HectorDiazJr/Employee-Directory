import React from "react";
import DataDetailTable from "./DataDetailTable";
import Nav from "./Nav";
import API from "../API/API";



export default class NameContainer extends React.Component {
    //add methods that will be used inside render function
    state = {
        users: [{ }],
        order: "decsend",
        filteredusers: [{ }]
    }


    render() {
        return (
            <div>
                <Nav handlesearch={this.handlesearch}/>
                <DataDetailTable headings={this.headings}users={this.state.users}handlesort={this.handlesort}/>
            </div>
        )
    }
}
