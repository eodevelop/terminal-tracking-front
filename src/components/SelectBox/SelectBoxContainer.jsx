import React from 'react';
import { useAsync } from "react-async"
import SelectBoxPresenter from './SelectBoxPresenter';
import apiService from '../../service/apiService.js'
import { connect } from 'react-redux';

const SelectBoxContainer = (props) => {
    const { data: portList } = useAsync({ promiseFn: apiService.callPortList });

    const changePort = async (locationId, latitude, longitude) => {
        const vesselList = await apiService.callVesselList({ locationId: locationId });
        vesselList.data.latitude = latitude;
        vesselList.data.longitude = longitude;
        props.dispatch({ type: 'setVessel', payload: vesselList.data })
    }

    return (
        <SelectBoxPresenter
            portList={portList}
            changePort={changePort}
        />
    );
};

function setVesslList(state) {
    return {
        state: state
    }
}

export default connect(setVesslList)(SelectBoxContainer);