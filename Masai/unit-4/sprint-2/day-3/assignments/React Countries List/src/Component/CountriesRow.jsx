function CountriesRow({ country, population }) {
  return (
    <tr data-testid="country-card">
      <td></td>
      <td data-testid="country-card-name">{country}</td>
      <td data-testid="country-card-population">{population}</td>
      <td></td>
    </tr>
  );
}

export default CountriesRow;
