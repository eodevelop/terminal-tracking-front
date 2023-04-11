import React from "react";
import '../../styles/scss/SelectBox.scss'

const SelectBoxPresenter = (props) => {
  
  const {
    portList,
  } = props;

  if(!portList) return null;

  return (
    <div className="SelectBox">
      <div className="Current" tabIndex="1" onChange={ (e) => props.changePort(portList.data[e.target.id].locationId, portList.data[e.target.id].latitude, portList.data[e.target.id].longitude)}>
        {
          portList.data.map((list, index) => {
            return (
              <div className="Value" key={index}>
                <input
                  className="Input"
                  type="radio"
                  id={index}
                  value={list.value}
                  name="Ben"
                  defaultChecked={index === 0 ? "checked" : ""}
                />
                <p className="Input-Text">{list.name}</p>
              </div>
            )
          })
        }
        <img
          className="Icon"
          src="http://cdn.onlinewebfonts.com/svg/img_295694.svg"
          alt="Arrow Icon"
          aria-hidden="true"
        />
      </div>
      <ul className="List">
        {
          portList.data.map((list, index) => {
            return (
              <li key={index}>
                <label className="Box_Option"  htmlFor={index} aria-hidden="true">
                  {list.name}
                </label>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default SelectBoxPresenter;
