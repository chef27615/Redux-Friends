import React, { Component } from 'react';
import { connect } from 'react-redux';
import Friend from './Friend';
import { withRouter } from 'react-router-dom';

import { getFriends } from '../action';

class FriendsList extends Component {

    componentDidMount(){
        this.props.getFriends();
    }


    render(){
        console.log('friendslist', this.props)
        return(
            <div>
                {/* {this.props.getFriends.map(friend => (
                    <Friend friend={friend} />
                ))} */}
            </div>
        )}
}

const mapStateToProps = ({ FriendsList, getFriends }) => ({
    FriendsList,
    getFriends
})

export default withRouter(
    connect(
        mapStateToProps,
        { getFriends }
    )(FriendsList)
);