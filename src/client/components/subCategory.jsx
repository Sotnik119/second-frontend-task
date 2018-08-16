import React, { Component } from 'react';

class SubCategory extends Component {
    onItemClick = () => {
        const { token, id, getProducts } = this.props;
        getProducts(token, id);
    }

    render() {
        const { title } = this.props;
        return (
            <a className="Sub-category-item" onClick={this.onItemClick}>{title}</a>
        )
    }
}

export default SubCategory;