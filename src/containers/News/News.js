import React, { useEffect, useState } from 'react';
import NewsList from '../../components/NewsList/NewsList';
import NewsItem from '../../components/NewsItem/NewsItem';
import * as newsAction from './../../actions/news';
import *as modalAction from './../../actions/modal';
import { connect } from "react-redux";
import { bindActionCreators, compose } from 'redux';
import NewsForm from '../NewsForm/NewsForm';
import { change } from 'redux-form';
// const NewsList = React.lazy(()=> import('./../../components/NewsList/NewsList'));
// const NewsItem = React.lazy(()=> import('./../../components/NewsItem/NewsItem'));

const News = (props) => {
    useEffect(() => {
        const { newsActionCreators } = props;
        const { fetchListNews } = newsActionCreators;
        fetchListNews();
      }, []);
      const handleClickOpen  = () =>{
        const { newsActionCreators} = props;
        const {setNewsEditing} = newsActionCreators;
        setNewsEditing(null)
        const {modalActionCreators} = props;
        const {showModal, changeModalTitle, changeModalContent} = modalActionCreators;
        showModal();
        changeModalTitle("Them Moi Bai Viet");
        changeModalContent(<NewsForm/>)
      }
      const handleClickEdit = (news) => {
        const { newsActionCreators } = props;
        const {setNewsEditing} = newsActionCreators;
        setNewsEditing(news);
        const {modalActionCreators} = props
        const {showModal, changeModalTitle, changeModalContent} = modalActionCreators;
        
        showModal();
        changeModalTitle("Sua Bai Viet");
        changeModalContent(<NewsForm/>)
      }
      const onClickDelete =(data)=> {
        const {id} = data;
        const { newsActionCreators } = props;
        const {deleteNews} =  newsActionCreators;
        deleteNews(id)
      }
      const handleClickDelete = news =>{
        const { newsActionCreators, modalActionCreators } = props;
        const {showModal, changeModalTitle, changeModalContent, hiddenModal} = modalActionCreators;
        showModal();
        changeModalTitle("Xoa Bai Viet");
        changeModalContent(
          <div className="d-flex justify-content-between">
            <p>ban chac chan muon xoa <strong className="text-danger">{news.titleNews}</strong> chu</p>
            <div>
            <button className="btn btn-danger mr-2" onClick={hiddenModal} >NO</button>
            <button className="btn btn-success" onClick={()=>onClickDelete(news)}>YES</button>
            </div>
          </div>
        )
      }
      
      let renderNewsItem = () => {
        let { listNew } = props;
        let  xhtml = null;
        if(listNew.length > 0){
          xhtml = (listNew.map((item, index)=> {
            return(
              <NewsItem
                key={index}
                news = {item}
                index = {index}
                onClickEdit = {()=>handleClickEdit(item)}
                onClickDelete = {()=> handleClickDelete(item)}
              />
            );
          }))
          
        }
       
        return xhtml;
      }
    return (
        <div className="card shadow mb-4">
            <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-primary pb-3">Danh Sach Tin</h5>
            <button type="button" onClick={handleClickOpen} className="btn btn-primary"><i className="fas fa-pen mr-2"></i> 
                Them moi tin tuc
            </button>
            </div>
            <NewsList>
            {
              renderNewsItem()
            }
            </NewsList>
            
            
        </div>
    )
}
const mapStateToProps = state =>{
    return {
        listNew : state.news.listNews
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        newsActionCreators : bindActionCreators(newsAction, dispatch),
        modalActionCreators : bindActionCreators(modalAction, dispatch)
      }
    }
  
  const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
  )
  
  export default compose(withConnect)(News)
