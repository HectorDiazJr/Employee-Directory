import React from "react";
import API from "../API/API";
export default class Header extends React.Component {
    componentDidMount() {
        console.log(API.employeeSearch());
    }
    render() {
        return (
            <div>
                <h1>Employee Directory</h1>
            </div>
        )
    }
}