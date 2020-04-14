import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'moment';

const Article = ({ article }) => {
    return (
        <section>
            <span>
                <img src={article.image} width="250" alt="{article.title}" />
            </span>
            <h3>{article.title}</h3>
            <p>
                {article.body}
            </p>
            <sub>{Moment(article.created).format('MMMM Do YYYY')}</sub>
            <p>
                <a className="article-source" target="_blank" rel="noopener noreferrer" href={article.source}>source</a>
            </p>
        </section>
    );
};

const Articles = ({ articles }) => {
    return articles.map(article => <Article key={article.title} article={article} />);
};

Articles.propTypes = {
    articles: PropTypes.array.isRequired
};

const mapStateToProps = state => {
    return ({
        articles: state.article.articles
    });
};

export default connect(mapStateToProps, null)(Articles);
