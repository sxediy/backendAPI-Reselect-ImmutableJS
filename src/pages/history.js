import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { SIGN_OUT } from '../store/actionTypes';


class Profile extends React.Component {
  static propTypes = {
    signOut: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired
  };

  render() {
    return (
      <div className='profile'>
        <div className='profile-info'>
          <div className='group'>
            <h3>{this.props.username}</h3>
          </div>
          <Button
            type="danger"
            className="button"
            onClick={this.signOut}
          >
          Sign out
          </Button>
        </div>
      </div>
    );
  }

  signOut = () => {
    this.props.signOut();
  };
}

const mapStateToProps = ({ auth }) => (
  {
    username: auth.username
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    signOut: () => dispatch({ type: SIGN_OUT })
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
