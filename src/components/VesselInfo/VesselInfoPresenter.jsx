import React from "react";
import "../../styles/scss/VesselInfo.scss";

const VesselInfoPresenter = (props) => {
  const {
    berthNo,
    berthnDtm,
    closingDtm,
    depDtm,
    disCnt,
    heading,
    imoNo,
    latitude,
    lodCnt,
    longitude,
    mmsi,
    navCode,
    recvDtm,
    shftCnt,
    speed,
    terminal,
    turn,
    vesselId,
    vesselNm,
  } = props;

  return (
    <div className="VesselInfo">
      <div className="Card" href="">
        <div className="Vessel-Info">
          <p className="Vessel-Name"> {vesselNm} </p>
        </div>
        <div className="Terminal-Info">
          <ul>
            <li> 터미널 </li>
            <li> {terminal} </li>
          </ul>
          <ul>
            <li> 상태 </li>
            <li> {berthNo ? "접안중" : "향해중"} </li>
          </ul>
          <ul>
            <li> 선석정보 </li>
            <li> {berthNo ? berthNo : "없음"} </li>
          </ul>

        </div>
        <div className="Vessel-State">
          <ul>
            <li> 양하수량 </li>
            <li> {disCnt.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} </li>
          </ul>
          <ul>
            <li> 적하수량 </li>
            <li> {lodCnt.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} </li>
          </ul>
          <ul>
            <li> 컨테이너 마감시간 </li>
            <li> {closingDtm ? closingDtm.replace(/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1/$2/$3 $4:$5') : "마감"} </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default VesselInfoPresenter;
