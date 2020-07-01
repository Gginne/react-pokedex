import React from "react";

export default class Modal extends React.Component {
    componentDidMount() {
        
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
