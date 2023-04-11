import React from 'react';
import '../../styles/scss/VesselList.scss'
import VesselInfo from '../VesselInfo';

const VesselListPresenter = (props) => {
    const {
        vesselList,
        vesselList2
    } = props;

    return (
        <div className="VesselList">
            {
                vesselList ? vesselList.data.map((vessel, index) => {
                    return (
                        <VesselInfo
                            vessel={vessel}
                            key={index}
                        />
                    )
                })
                    : <div></div>
            }
        </div>
    );
}

export default VesselListPresenter;