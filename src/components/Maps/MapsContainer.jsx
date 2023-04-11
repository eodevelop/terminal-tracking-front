import React from 'react';
import { useAsync } from "react-async"
import MapsPresenter from './MapsPresenter';
import apiService from '../../service/apiService.js';
import {connect} from 'react-redux';

const MapsContainer = (props) => {
    let { data: vesselList } = useAsync({ promiseFn: apiService.callVesselList, locationId:105160 });
    const { data: portList } = useAsync({ promiseFn: apiService.callPortList });
    let position = [35.0728, 128.8060];
    let changePosition;
    let zoom = 12;

    const purpleOptions = { color: 'purple' }
    
    if(props.vesselList){
        vesselList.data = props.vesselList;

        changePosition = [props.vesselList.latitude, props.vesselList.longitude];
    }

    return (
        <MapsPresenter
            position={position}
            changePosition={changePosition}
            zoom={zoom}
            purpleOptions={purpleOptions}
            vesselList={vesselList}
        />
    );
};

function getVesslList(state) {
    return {
        vesselList : state
    }
} 

export default connect(getVesslList)(MapsContainer);