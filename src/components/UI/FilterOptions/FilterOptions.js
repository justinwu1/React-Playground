const FilterOptions = ({ onMenuOptions }) => {
  const handleMenuFilter = (event) => {
    onMenuOptions(event.target.value)
  }

  return (
    <>
      <label>Filter items</label>
      <select onChange={handleMenuFilter}>
        <option value='default'>Default</option>
        <option value='L-H'>Lowest to Highest Price</option>
        <option value='H-L'>Highest to Lowest Price</option>
      </select>
    </>
  )
}

export default FilterOptions
