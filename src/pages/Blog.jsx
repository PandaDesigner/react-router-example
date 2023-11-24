import { Link, useSearchParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { useEffect } from 'react';

const Blog = () => {
  const { datas, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  );
  const [searchParams, setSearchParams] = useSearchParams();

  if (loading)
    return (
      <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
        <h1>Loading...</h1>
      </div>
    );
  if (error)
    return (
      <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
        <h1>{error}</h1>
      </div>
    );

  const handleChange = (e) => {
    let filter = e.target.value;
    if (filter) {
      setSearchParams({ filter });
    } else {
      setSearchParams({});
    }
  };

  return (
    <>
      <h1 className="mt-4">Blog</h1>
      <input
        type="text"
        placeholder="Buscar"
        value={searchParams.get('filter') || ''}
        className="form-control mt-4"
        onChange={handleChange}
      />
      <ul className="list-group my-4">
        {datas
          .filter((item) => {
            let filter = searchParams.get('filter');
            if (!filter) return true;
            return item.title.toLowerCase().includes(filter.toLowerCase());
          })
          .map(({ id, title }) => {
            return (
              <Link className="list-group-item" to={`/blog/${id}`} key={id}>
                <span>{id + '.- '}</span> {title}
              </Link>
            );
          })}
      </ul>
    </>
  );
};

export default Blog;
