import axios from "axios";
import "./App.css";
import Dropdown from "./components/dropdown/dropdown";
import CountryInfo from "./components/countryinfo/countryinfo";
import countries from "./json/countries.json";
import { useState } from "react";


function App() {
  const URL = "https://api.zippopotam.us";

  const onChange = (e) => {
    const value = e.target.value;

    if (value === "") {
      setData(null);
    } else {
      const link = `${URL}/${value}`;
      console.log(link);
      load(link);
    }
  };

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const load = (link) => {
    setLoading(true);
    axios
      .get(link)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err.message);
        setLoading(false);
      });
  };

  return (
    <>
      <div className="bg-light vh-100 d-flex flex-column">
        <div className="container py-5 d-flex flex-column align-items-center">
          <div className="text-center mb-5">
            <h1 className="text-primary fw-bold anton display-3 mb-3">
              Explore Country
            </h1>
            <p className="text-muted lead">
              Select a country to know detailed information.
            </p>
          </div>
          <div className="w-50">
            <Dropdown
              id="countries"
              label="Country"
              options={countries}
              containerClass="d-flex flex-column align-items-center"
              onSelectChange={onChange}
            />
          </div>
          {loading ? (
            <div className="w-75 mt-5">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="placeholder-glow mb-3">
                  <span
                    className="placeholder bg-secondary rounded-2"
                    style={{ height: "4vh", display: "block" }}
                  ></span>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-75 mt-4">
              <CountryInfo data={data} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
