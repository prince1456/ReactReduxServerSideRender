import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../actions';
import requireAuth from '../compoents/hocs/requireAuth';

class AdminsListPage extends Component {
    componentDidMount() {
        this.props.fetchAdmins();
    }

    renderAdmins() {
        return this.props.admins.map(admin => {
            return <li key={admin.id}>{admin.name}</li>
        });
    }

    render() {
    
        return (
            <div >
                <h3> Protected list of admins</h3>
                
                <ul>{this.renderAdmins()}</ul>
            </div>
        )
    }
}
//mapStateToProps
function mSTP(state) {
    return { admins: state.admins };
}


export default 
{
    loadData: ({dispatch})=> dispatch(fetchAdmins()),
    component: connect(mSTP, { fetchAdmins })( requireAuth( AdminsListPage)),
} 