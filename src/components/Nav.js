import React from "react";

function Nav({ handlesearch }) {
    return(
        <nav>
            <div>
                <form>
                    <input className="form-control"
                    onChange={e => handlesearch(e)}
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