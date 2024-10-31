import { IoSearch } from "react-icons/io5";
import { Field, Form, Formik } from "formik";
import css from './SearchBar.module.css';

import * as Yup from "yup";

export const SearchPhotosSchema = Yup.object({
  searchTerm: Yup.string(),
});

const SearchBar = ({ onSearch }) => {
  const INITIAL_VALUES = {
    searchTerm: "",
  };
  const handleSubmit = (values, actions) => {
    if (values.searchTerm.trim() === "") {
      toast.error(
        "Sorry, you cant search without query term! Please enter search word first!"
      );
      return;
    }

    onSearch(values.searchTerm);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={SearchPhotosSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <header className={css.header}>
          <div className={css.inputWrapper}>
            <button type="submit" className={css.inputBtn}>
              <IoSearch />
            </button>
            <Field
              style={{ width: "100%", paddingLeft: 64, height: 41 }}
              name="searchTerm"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              className={css.headerInput}
            />
          </div>
        </header>
      </Form>
    </Formik>
  );
};

export default SearchBar;
