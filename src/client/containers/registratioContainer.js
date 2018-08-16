import { connect } from 'react-redux';
import Registration from '../components/reg'
import { registerUser } from '../consts/actions'

export default connect(null, {registerUser})(Registration);