import { connect } from 'react-redux';
import Application from '../components/Application';
import { setId, logout } from '../consts/actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
      token: state.sid
});

export default withRouter(connect(mapStateToProps, { setId, logout })(Application));