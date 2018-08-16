import React, { Component } from 'react';
import Category from './category';
import SubCategory from './subCategory';

class Catalog extends Component {    
    componentDidMount() {
        const { token, getCategories } = this.props;
        getCategories(token);
    }

    render() {
        const {
            products,
            categories,
            subCategories,
            token,
            getSubCategories,
            getProducts
        } = this.props;

        return (
            <div className='Catalog'>
                <h1> Каталог товаров</h1>
                <div className="categories">
                    <h2>Категории</h2>
                    {categories.map(category =>
                        <Category
                            key={category.id}
                            id={category.id}
                            title={category.title}
                            token={token}
                            getSubCategories={getSubCategories}
                        />
                    )}
                </div>
                {subCategories.length > 0 ?
                    <div className="sub-categories">
                        <h2>Подкатегории</h2>
                        {subCategories.map(subcategory =>
                            <SubCategory
                                key={subcategory.id}
                                id={subcategory.id}
                                title={subcategory.title}
                                getProducts={getProducts}
                                token={token}
                            />
                        )}
                    </div>
                    :
                    null}
                {products.length ?
                    <div className="products">
                        <h2>Продукты</h2>
                        {products.map(product => <a key={product.id}>{product.title}</a>)}
                    </div>
                    :
                    null
                }
            </div>
        )
    }
}

export default Catalog
