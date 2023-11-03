import React from "react";
import "../styles/Header.css";

function Header ({count, onDelete}) {

    return (
        <div className="header">
            <div className="bg-white">
            {count > 0 ? (
                <div className="bg-white files-counter pb-2">
                <input
                    type="checkbox"
                    checked={count > 0 ? true : false}
                    className="mt-1"
                />
                <h5 className="bg-white my-1  font-size-20">{count} Files Selected</h5>
                </div>
            ) : (
                <div className="bg-white">
                <h3 className="bg-white gallery font-size-20 pb-2">Gallery</h3>
                </div>
            )}
            </div>
            <div className="delete" onClick={onDelete}>
            Delete files
            </div>
        </div>
    );
};

export default Header;