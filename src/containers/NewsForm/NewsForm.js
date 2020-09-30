import React from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import renderEditor from "./../../components/HelperForm/Ckeditor/Ckeditor";
import './NewsForm.css';
import *as  modalAction from './../../actions/modal';
import *as newsAction from './../../actions/news'
const NewsForm = (props) =>{
  const {modalActionCreators, newsActionCreators, initialValues} = props;
  console.log(initialValues);
  const {hiddenModal} = modalActionCreators;
  const {handleSubmit} = props;
  const handleSubmitForm = (data) =>{
    const {titleNews, authorNews, nameNews, news} = data;
    const {addNews} =  newsActionCreators;
    addNews(titleNews, authorNews, nameNews, news)
  }
    return (
        <form onSubmit={handleSubmit(handleSubmitForm)} action="/action_page.php">
        <div className="form-group">
          <label htmlFor="text">Tieu De Bai Viet:</label>
          <Field className="form-control" name="titleNews" component="input" type="text"/>
        </div>
        <div className="form-group">
          <label htmlFor="text">Tac Gia:</label>
          <Field className="form-control" name="authorNews" component="input" type="text"/>
        </div>
        <div className="form-group">
          <label htmlFor="text">Ten Bai Viet:</label>
          <Field className="form-control" name="nameNews" component="input" type="text"/>
        </div>
        
        <div className="form-group">
          <label htmlFor="text">Bai Viet</label>
          <Field className="form-control" name="news" component={renderEditor} type="text"/>
        </div>
        <div className="modal-footer">
              <button type="button" onClick={hiddenModal} className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="submit" className="btn btn-primary">Save changes</button>
            </div>
      </form>
    )
}  

const mapStateToProps = state =>{
  return {
    newsEditing: state.news.newsEditing,
    initialValues: state.news.newsEditing

  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    modalActionCreators : bindActionCreators(modalAction, dispatch),
    newsActionCreators : bindActionCreators(newsAction, dispatch),
    }
  }

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const FORM_NAME = 'NEWS_MANAGEMENT'
  const withReduxForm = reduxForm({
    form: FORM_NAME
  })
export default compose(withReduxForm, withConnect)(NewsForm);