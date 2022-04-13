import Card from '../components/Card';



const Home = ({ searchValue, setSearchValue, items, onAddtoCart, onAddToFavorite, itemsForCard, isLoading }) => {
  const renderItems = () => {
    const filteredItmes = items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
    console.log("isLoading", isLoading)
    return (isLoading ? [...Array(10)] : filteredItmes).map((item, index) => (
      <Card
        key={index}
        {...item}
        onClickAdd={obj => { onAddtoCart(obj) }}
        onClickFavorite={obj => { onAddToFavorite(obj) }}
        added={itemsForCard.some(obj => Number(obj.id) === Number(item.id))}
        loading={isLoading}
      />
    ))
  };
  return (

    <section className='content p-40'>
      <div className='d-flex align-center justify-between mb-40'>
        <h1>{searchValue ? `Search: ${searchValue}` : 'All Shoes'}</h1>
        <div className='search-block d-flex'>
          <img src='/img/search.svg' alt='Search' />
          {searchValue ? <img onClick={() => setSearchValue('')} className='clear remove-btn cu-p' src='/img/btn-remove.svg' alt='Clear' /> : null}
          <input onChange={(event) => setSearchValue(event.target.value)} value={searchValue} placeholder='Search'></input>
        </div>
      </div>
      <div className='allSneackers d-flex justify-between flex-wrap '>
        {renderItems()}
      </div>
    </section>

  )
}


export default Home