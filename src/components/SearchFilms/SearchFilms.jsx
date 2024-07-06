import { useSearchParams } from 'react-router-dom';


function SearchFilms() {
  const [params, setParams] = useSearchParams();

  const changeSearchFilter = newFilter => {
    params.set('query', newFilter) ?? '';
    setParams(params);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const query = form.elements.query.value;
    changeSearchFilter(query);
    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Поиск"
          type="text"
          name="query"
          onChange={e => changeSearchFilter(e.target.value)}
        />
        {/* <button type="submit">Search</button> */}
      </form>
    </div>
  );
}

export default SearchFilms;