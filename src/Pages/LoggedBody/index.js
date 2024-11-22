import React from 'react'
import { SeeComplaints } from '../SeeComplaints';
import { CreateComplaints } from '../CreateComplaints';
import { AppContext } from '../../Services/ChangeUserView';

function LoggedBody() {
    const {
        loggedUserView
    } = React.useContext(AppContext);

    switch (loggedUserView) {
        case 'ver':
            return (
                <SeeComplaints />
            );
        case 'crear':
            return (
                <CreateComplaints />
            );
    }
}

export { LoggedBody }