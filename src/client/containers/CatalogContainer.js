import { connect } from 'react-redux';
import catalog from '../components/catalog';
import { getCategories, getSubCategories, getProducts } from '../consts/actions';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => ({
    categories: state.categories,
    subCategories: state.subCategories,
    products: state.products,
    token: state.sid
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getCategories,
    getSubCategories,
    getProducts,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(catalog);