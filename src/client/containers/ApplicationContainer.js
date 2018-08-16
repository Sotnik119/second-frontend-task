import { connect } from 'react-redux';
import Application from '../components/Application';
import { setId } from '../consts/actions';

const mapStateToProps = (state) => ({
      token: state.sid
})

export default connect(mapStateToProps, { setId })(Application);