import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchAllCategories } from "../store/categorySlice";


const CategoryLanding = () => {

    const dispatch = useAppDispatch();
    const { items, loading, error } = useAppSelector((state) => state.categories);

    useEffect(() => {
        dispatch(fetchAllCategories());
    }, [dispatch]);


  return (
    <>
      <h1>Category Landing</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {items.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </>
  );
};
export default CategoryLanding;