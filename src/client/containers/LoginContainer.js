import { connect } from 'react-redux';
import Login from '../components/login'
import { loginUser } from '../consts/actions'
import { bindActionCreators } from 'redux'

const mapDispatchToProps = (dispatch) => bindActionCreators({
    loginUser,
}, dispatch)

export default connect(null, mapDispatchToProps)(Login);