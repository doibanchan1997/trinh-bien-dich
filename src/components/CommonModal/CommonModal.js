import React from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from "react-redux";
import *as modalActions from './../../actions/modal';
import './CommonModal.css';
const CommonModal = (props) => {
    const {modalActionCreator, show, component, title} = props 
    const {hiddenModal} = modalActionCreator
    return (
        <div>
        <div className={`modal fade ${show ===true?'show':''}`}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header bg-primary">
              <h5 className="modal-title text-white" id="exampleModalLabel">{title}</h5>
              <button type="button" onClick={hiddenModal} className="close">
                <span aria-hidden="true" className="text-white">×</span>
              </button>
            </div>
            <div className="modal-body">
              {component}
            </div>
            
          </div>
        </div>
      </div>
      </div>
    )
}
const mapStateToProps = state => {
    return {
        show: state.modal.show,
        title: state.modal.title,
        component: state.modal.component
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        modalActionCreator: bindActionCreators(modalActions, dispatch),
    };
};
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)
 
export default compose(withConnect)(CommonModal)
