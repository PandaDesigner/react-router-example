import { Link, useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

export const BlogDetails = () => {
  const { id } = useParams();
  const { datas, error, loading } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
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

  return (
    <div className="w-100 vh-100 d-flex flex-column justify-content-start align-items-center mb-5">
      <h1 className="mt-4">
        <span>{datas.id}.- </span> {datas.title}
      </h1>
      <p>{datas.body}</p>
      <p>Author: {datas.userId}</p>
      <div className="mt-4 d-md-flex justify-content-center">
        <Link className="btn btn-outline-dark px-5" to={'/blog'}>
          volver
        </Link>
      </div>
    </div>
  );
};
