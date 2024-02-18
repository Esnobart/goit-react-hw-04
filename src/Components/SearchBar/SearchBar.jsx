import { Field, Form, Formik } from "formik"
import css from "./SearchBar.module.css"

export const SearchBar = ({onSearch}) => {
    return (
        <header>
            <div className={css.headContainer}>
                <Formik initialValues={{ search: '' }} onSubmit={(values) => {
                    if (values.search.trim() === '') { return }
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