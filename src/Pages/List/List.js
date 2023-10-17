import Header from "../../Components/Header/Header";
import "./List.css";
import Navbar from "../../Components/Navbar/Navbar";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../Components/SearchItem/SearchItem";
const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);

  return (
    <div className="list">
      <Navbar />
      <Header type="list" />
      <div className="listcontainer">
        <div className="listwrapper">
          <div className="listsearch">
            <h1 className="istitle">Search</h1>
            <div className="lsitem">
              <label htmlFor="">Destination</label>
              <input type="text" name="" id="" placeholder={destination} />
            </div>
            <div className="lsitem">
              <label htmlFor="">Check-in date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "mm/dd/yyyy"
              )} to ${format(date[0].endDate, "mm/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsitem">
              <label htmlFor="">Options</label>
              <div className="lsoptionitem">
                <span className="lsoptiontext">
                  Min price<small>per night</small>
                </span>
                <input type="number" className="lsoptioninput" />
              </div>
              <div className="lsoptionitem">
                <span className="lsoptiontext">
                  Max price<small>per night</small>
                </span>
                <input type="number" className="lsoptioninput" />
              </div>
              <div className="lsoptionitem">
                <span className="lsoptiontext">Adult</span>
                <input
                  min={1}
                  type="number"
                  className="lsoptioninput"
                  placeholder={options.adult}
                />
              </div>
              <div className="lsoptionitem">
                <span className="lsoptiontext">Children</span>
                <input
                  min={0}
                  type="number"
                  className="lsoptioninput"
                  placeholder={options.children}
                />
              </div>
              <div className="lsoptionitem">
                <span className="lsoptiontext">Room</span>
                <input
                  min={1}
                  type="number"
                  className="lsoptioninput"
                  placeholder={options.room}
                />
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listresult">
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
