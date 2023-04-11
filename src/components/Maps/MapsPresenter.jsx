import { React } from 'react';
import '../../styles/scss/Maps.scss'
import { MapContainer, TileLayer, Polygon, Circle, Tooltip, useMap } from "react-leaflet";

function ChangeLocation(props) {
  const {
    changePosition
  } = props;

  const map = useMap();

  if (!isNaN(changePosition[0]) && !isNaN(changePosition[1])) {
    map.locate()
    map.flyTo(changePosition, 12)
  }

  return null;
}

const MapsPresenter = (props) => {
  const {
    position,
    changePosition,
    zoom,
    purpleOptions,
    vesselList
  } = props;

  return (
    <div>
      <MapContainer
        className="Maps"
        center={changePosition ? changePosition : position}
        zoom={zoom}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
          vesselList ? vesselList.data.map((vessel, index) => {
            const multiPolygon = [
              [
                [vessel.latitude + 0.0012 * Math.sin(vessel.heading), vessel.longitude + 0.0012 * Math.cos(vessel.heading)],
                [vessel.latitude, vessel.longitude],
                [vessel.latitude, vessel.longitude],
                [vessel.latitude, vessel.longitude],
                [vessel.latitude, vessel.longitude],
              ],
            ]
            return (
              // <Polygon key={index} pathOptions={purpleOptions} positions={multiPolygon} />
              <Circle key={index} center={[vessel.latitude, vessel.longitude]} radius={60}>
                <Tooltip>{vessel.vesselNm}</Tooltip>
              </Circle>
            )
          }) : <div></div>
        }

        {
          changePosition ? <ChangeLocation
            changePosition={changePosition}
          /> : null
        }
      </MapContainer>
    </div>
  );
}

export default MapsPresenter;
