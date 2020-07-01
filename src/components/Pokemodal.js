import React from "react";
import M from "materialize-css";

export default class Modal extends React.Component {
    componentDidMount() {
        const options = {
            onOpenStart: () => {
                console.log("Open Start");
            },
            onOpenEnd: () => {
                console.log("Open End");
            },
            onCloseStart: () => {
                console.log("Close Start");
            },
            onCloseEnd: () => {
                console.log("Close End");
            },
            inDuration: 250,
            outDuration: 250,
            opacity: 0.5,
            dismissible: true,
            startingTop: "-10%",
            endingTop: "10px",
        };
        M.Modal.init(this.Modal, options);
    }

    render() {
    return (
        <div ref={(Modal) => {this.Modal = Modal;}} id="modal1" className="modal">
            <div className="modal-content">
            <h4>{this.props.pokemon && this.props.pokemon.name}</h4>
            <p>A bunch of text</p>
            </div>
            <div class="modal-footer">
            <button class="modal-close waves-effect waves-red btn-flat">
                Exit
            </button>
            </div>
        </div>
    );
  }
}
