import Spinner from "./Spinner.jsx";
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem.jsx";
import Message from "./Message.jsx";
import PropTypes from "prop-types";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first Country by clicking on a Country on the map" />
    );

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    } else {
      return arr;
    }
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

CountryList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      country: PropTypes.string.isRequired,
      // Add other City properties here, e.g. name, population, etc.
    })
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default CountryList;
