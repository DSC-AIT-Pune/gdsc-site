import React from "react";
import "../styles/components/teamGrid.css";

function TeamGrid(props) {
    return (
        <div className="teamGrid-container">
            <div className="teamGrid-card">
                <div className="teamGrid-left">
                    <div className="teamGrid-color">
                        <span style={{ zIndex: "5" }}
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href = props.ln;
                            }} target="_blank" rel="noopener noreferrer">
                            <span className="teamGrid-smi">LinkedIn</span>                        </span>
                        <span style={{ zIndex: "5" }}
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href = props.gh;
                            }}>
                            <span className="teamGrid-smi">Github</span>
                        </span>
                        <span style={{ zIndex: "15" }}
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href = props.fb;
                            }}>
                            <span className="teamGrid-smi">Facebook</span>
                        </span>
                        <span style={{ zIndex: "5" }}
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href = props.ig;
                            }}>
                            <span className="teamGrid-smi">Instagram</span>
                        </span>
                    </div>
                </div>
                <div className="teamGrid-right">
                    <div className="teamGrid-imgBx">
                        <img className="teamGrid-circularSquare" src={props.img} alt="DSC" />
                    </div>
                    <div className="teamGrid-contentBx">
                        <h2>{props.name}</h2>
                        <div className="teamGrid-size">
                            <h4>{props.role}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeamGrid;