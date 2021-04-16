import React from "react";
import API from "../API/API";
import "./Header.css";

export default class Header extends React.Component {
    componentDidMount() {
        console.log(API.employeeSearch());
    }
    render() {
        return (
            <div className="w3-container w3-green">
                <h1>Employee Directory</h1>
            </div>
        )
    }
}