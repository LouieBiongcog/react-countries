import React from "react";

function CountryInfo(props) {
  const { data } = props;

  return (
    <>
      {data ? (
        <div className="d-flex flex-column bg-light p-2 text-dark roboto fs-3 text-capitalize justify-content-center align-items-start">
          <div>
            {data.country && (
              <h1 className="m-0" style={{ fontSize: "1.5em" }}>
                Country: {data.country}
              </h1>
            )}
          </div>

          <div className="d-flex flex-column justify-content-center align-items-start" style={{ fontSize: "0.8em" }}>
            <div>
              {data["country abbreviation"]
                ? `COUNTRY ABBREVIATION: ${data["country abbreviation"]}`
                : ""}
            </div>
            <div>{data["post code"] && `POST CODE: ${data["post code"]}`}</div>
            <div>
              {data.places[0].state ? `STATE: ${data.places[0].state}` : ""}
            </div>
            <div>
              {data.places[0]["state abbreviation"]
                ? `STATE ABBREVIATION: ${data.places[0]["state abbreviation"]}`
                : ""}
            </div>
            <div>
              {data.places[0]["place name"]
                ? `PLACE NAME: ${data.places[0]["place name"]}`
                : ""}
            </div>
            <div>
              {data.places[0].longitude
                ? `LONGITUDE: ${data.places[0].longitude}`
                : ""}
            </div>
            <div>
              {data.places[0].latitude
                ? `LATITUDE: ${data.places[0].latitude}`
                : ""}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default CountryInfo;
