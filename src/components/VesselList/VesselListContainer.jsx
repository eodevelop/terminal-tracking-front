import React from 'react';
import { useAsync } from "react-async"
import VesselListPresenter from './VesselListPresenter';
import apiService from '../../service/apiService.js';
import {connect} from 'react-redux';

const VesselListContainer = (props) => {
    const { data: vesselList } = useAsync({ promiseFn: apiService.callVesselList, locationId:105160 });
    
    if(props.vesselList){
        vesselList.data = props.vesselList;
    }

    return (
        <VesselListPresenter
            vesselList={vesselList}
        />
    );
};

function getVesslList(state) {
    return {
        vesselList : state
    }
}

export default connect(getVesslList)(VesselListContainer);