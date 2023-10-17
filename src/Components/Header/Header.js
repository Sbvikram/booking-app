import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({type}) => {
  const [destination,setDestination]=useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
 const navigate=useNavigate();
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch =()=>{
  navigate("/hotel",{state:{destination,date,options}})
  }
  return (
    <div className="header">
      <div className={type==="list"?"headercontainer listmode":"headercontainer" }>
        <div className="headerlist">
          <div className="headerlistitem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerlistitem ">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerlistitem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rental</span>
          </div>
          <div className="headerlistitem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attraction</span>
          </div>
          <div className="headerlistitem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Car Rental</span>
          </div>
        </div>
       {type !== "list" &&
       <>
        <h1 className="headertitle">A lifetime of discounts? It's Genius.</h1>
        <p className="headerdesc">
          Get rewarded for your travels – unlock instant savings of 10% or more
          with a free Lamabooking account
        </p>
        <button className="headerbutton">Sign In/Register</button>
        <div className="headersearch">
          <div className="headersearchitem">
            <FontAwesomeIcon icon={faBed} className="headericon" />
            <input
              type="text"
              placeholder="where are you going?"
              className="headersearchinput"
              onChange={(e)=>setDestination(e.target.value)}
            />
          </div>
          <div className="headersearchitem">
            <FontAwesomeIcon icon={faCalendarDays} className="headericon" />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headersearchtext"
            >{`${format(date[0].startDate, "mm/dd/yyyy")} to ${format(
              date[0].endDate,
              "mm/dd/yyyy"
            )}`}</span>{" "}
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
                minDate={new Date()}
              />
            )}
          </div>
          <div className="headersearchitem">
            <FontAwesomeIcon icon={faPerson} className="headericon" />
            <span className="headersearchtext" onClick={()=>setOpenOptions(!openOptions)}>{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
            {openOptions && (
              <div className="options">
                <div className="optionitem">
                  <span className="optiontext">Adult</span>
                  <div className="optioncounter">
                    <button
                      className="optioncounterbutton"
                      onClick={() => handleOption("adult", "d")}
                      disabled={options.adult <= 1}
                    >
                      -
                    </button>
                    <span className="optioncounternumber">{options.adult}</span>
                    <button
                      className="optioncounterbutton"
                      onClick={() => handleOption("adult", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionitem">
                  <span className="optiontext">Children</span>
                  <div className="optioncounter">
                    <button
                      className="optioncounterbutton"
                      onClick={() => handleOption("children", "d")}
                      disabled={options.children <= 0}
                    >
                      -
                    </button>
                    <span className="optioncounternumber">
                      {options.children}
                    </span>
                    <button
                      className="optioncounterbutton"
                      onClick={() => handleOption("children", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionitem">
                  <span className="optiontext">Room</span>
                  <div className="optioncounter">
                    <button
                      className="optioncounterbutton"
                      onClick={() => handleOption("room", "d")}
                      disabled={options.room <= 1}
                    >
                      -
                    </button>
                    <span className="optioncounternumber">{options.room}</span>
                    <button
                      className="optioncounterbutton"
                      onClick={() => handleOption("room", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="headersearchitem">
            <button className="headerbutton" onClick={()=>handleSearch()}>Search</button>
          </div>
        </div>
        </>
       }
      </div>
    </div>
  );
};

export default Header;
