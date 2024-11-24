import React from 'react'
import { SeeComplaints } from '../SeeComplaints';
import { CreateComplaints } from '../CreateComplaints';
import { AppContext } from '../../Services/ChangeUserView';

function LoggedBody() {
    const {
        loggedUserView
    } = React.useContext(AppContext);

    return (
        <>
            {loggedUserView === 'ver' ? <SeeComplaints /> : 
            loggedUserView === 'crear' ? <CreateComplaints /> : null}
        </>
    )
}

export { LoggedBody }