import { Field, Form, Formik } from "formik"
import css from "./SearchBar.module.css"
import toast from "react-hot-toast"

export const SearchBar = ({onSearch}) => {
    return (
        <header>
            <div className={css.headContainer}>
                <Formik initialValues={{ search: '' }} onSubmit={(values) => {
                    if (values.search.trim() === '') {
                        toast.error("Please, write something for search");
                        return
                    }
                    onSearch(values.search)
                }}>
                    <Form className={css.form}>
                        <button type="submit">Search</button>
                        <Field type="text" autoComplete="off" name="search" autoFocus placeholder="Search images and photos" />
                    </Form>
                </Formik>
            </div>
        </header>
    )
}