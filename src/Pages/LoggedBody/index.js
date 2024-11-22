import React from 'react'
import { SeeComplaints } from '../SeeComplaints';
import { CreateComplaints } from '../CreateComplaints';
import { AppContext } from '../../Services/ChangeUserView';

function LoggedBody() {
    const {
        logedUserView
    } = React.useContext(AppContext);

    return (
        <>
            {logedUserView === 'ver' ? <SeeComplaints /> : 
            logedUserView === 'crear' ? <CreateComplaints /> : null}
        </>
    )
}

export { LoggedBody }