import React, { useEffect } from 'react';
import NewsList from '../../components/NewsList/NewsList';
import NewsItem from '../../components/NewsItem/NewsItem';

import * as newsAction from './../../actions/news'
import { connect } from "react-redux";
import { bindActionCreators, compose } from 'redux';
const News = (props) => {
    useEffect(() => {
        const { newsActionCreaters } = props;
        console.log(props);
        const { fetchListNews } = newsActionCreaters;
        fetchListNews();
      }, []);
      
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
              />
            );
          }))
          
        }
       
        return xhtml;
      }
    return (
        <div className="card shadow mb-4">
            <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
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
        newsActionCreaters : bindActionCreators(newsAction, dispatch)
      }
    }
  
  const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
  )
   
  export default compose(withConnect)(News)
