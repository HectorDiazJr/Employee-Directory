import React from "react";
import "./Nav.css"

function Nav({ handleSearch }) {
    return(
        <nav>
            <div>
                <form>
                    <input className="form-control"
                    // handleSearch={handleSearch}
                    onChange={e => handleSearch(e)}
                    // value={props.search}
                    name="search"
                    type="search"
                    placeholder="Search for Employee"
                    id="search"
                    />      
                </form>
            </div>
        </nav>
    );
}
export default Nav;