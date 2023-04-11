import React from 'react';
import '../../styles/scss/Sidebar.scss'
import VesselList from '../VesselList';
import Title from '../Title';

const SidebarPresenter = (props) => {
    return (
        <div className="Sidebar">
            <Title/>
            <VesselList/>
        </div>
    );
}

export default SidebarPresenter;