import React from 'react';
import VesselInfoPresenter from './VesselInfoPresenter';

const VesselInfoContainer = (props) => {
    const {
        vessel,
    } = props;

    if (!vessel) return null;

    const berthNo = vessel.berthNo;
    const berthnDtm = vessel.berthnDtm;
    const closingDtm = vessel.closingDtm;
    const depDtm = vessel.depDtm;
    const disCnt = vessel.disCnt;
    const heading = vessel.heading;
    const imoNo = vessel.imoNo;
    const latitude = vessel.latitude;
    const lodCnt = vessel.lodCnt;
    const longitude = vessel.longitude;
    const mmsi = vessel.mmsi;
    const navCode = vessel.navCode;
    const recvDtm = vessel.recvDtm;
    const shftCnt = vessel.shftCnt;
    const speed = vessel.speed;
    const terminal = vessel.terminal;
    const turn = vessel.turn;
    const vesselId = vessel.vesselId;
    const vesselNm = vessel.vesselNm;

    return (
        <VesselInfoPresenter
            berthNo={berthNo}
            berthnDtm={berthnDtm}
            closingDtm={closingDtm}
            depDtm={depDtm}
            disCnt={disCnt}
            heading={heading}
            imoNo={imoNo}
            latitude={latitude}
            lodCnt={lodCnt}
            longitude={longitude}
            mmsi={mmsi}
            navCode={navCode}
            recvDtm={recvDtm}
            shftCnt={shftCnt}
            speed={speed}
            terminal={terminal}
            turn={turn}
            vesselId={vesselId}
            vesselNm={vesselNm}
        />
    );
};

export default VesselInfoContainer;