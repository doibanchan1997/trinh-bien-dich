import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { bindActionCreators, compose } from 'redux';
import renderEditor from "./../../components/HelperForm/Ckeditor/Ckeditor";
import './NewsForm.css';
import *as  modalAction from './../../actions/modal';
import *as newsAction from './../../actions/news'
const NewsForm = (props) =>{
  
  const {modalActionCreators, newsActionCreators,newsEditing} = props;
  const {hiddenModal} = modalActionCreators;
  const handleSubmitForm = (data) =>{
    const {addNews, updateNews} =  newsActionCreators;
    const {titleNews, authorNews, nameNews, news} = data;
    if(newsEditing && newsEditing.id){
      updateNews(titleNews, authorNews, nameNews, news)
    }else{
      addNews(titleNews, authorNews, nameNews, news)
    }
  }
  const {handleSubmit} = props;

    return (
        <form onSubmit={handleSubmit(handleSubmitForm)} action="/action_page.php">
          <div className="form-group">
            <label htmlFor="text">Tieu De Bai Viet:</label>
            <Field
              name="titleNews"
              className="form-control"  
              component="input" 
              type="text"
              />
          </div>
          <div className="form-group">
            <label htmlFor="text">Tac Gia:</label>
            <Field 
            name="authorNews" 
            className="form-control" 
            component="input" 
            type="text"
            />
          </div>
          <div className="form-group">
            <label htmlFor="text">Ten Bai Viet:</label>
            <Field 
              name="nameNews" 
              className="form-control" 
              component="input" 
              type="text"
              />
          </div>
          
          <div className="form-group">
            <label htmlFor="text">Bai Viet</label>
            <Field 
              name="news" 
              className="form-control" 
              component={renderEditor} 
              type="text"
            />
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
    initialValues:
    {
      id: state.news.newsEditing ? state.news.newsEditing.id : null,
      titleNews : state.news.newsEditing ? state.news.newsEditing.titleNews : null,
      nameNews : state.news.newsEditing ? state.news.newsEditing.nameNews : null,
      authorNews : state.news.newsEditing ? state.news.newsEditing.authorNews : null,
      news : state.news.newsEditing ? state.news.newsEditing.news : null,
    },
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    modalActionCreators : bindActionCreators(modalAction, dispatch),
    newsActionCreators : bindActionCreators(newsAction, dispatch),
    }
  }

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

const FORM_NAME = 'NEWS_MANAGEMENT';
const withReduxForm = reduxForm({
  form: FORM_NAME,
  enableReinitialize: true
})

export default compose(
  withConnect,
  withReduxForm,
  
)(NewsForm)