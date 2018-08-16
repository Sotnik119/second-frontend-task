import React, { Component } from 'react';

class Category extends Component {
    onItemClick = () => {
        const { token, id, getSubCategories } = this.props;
        getSubCategories(token, id);
    }

    render() {
        const { title } = this.props;
        return (
            <a className="category-item" onClick={this.onItemClick}>{title}</a>
        )
    }
}

export default Category;