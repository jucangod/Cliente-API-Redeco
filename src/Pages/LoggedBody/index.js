import React from 'react'
import { SeeComplaints } from '../SeeComplaints';
import { CreateComplaints } from '../CreateComplaints';

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