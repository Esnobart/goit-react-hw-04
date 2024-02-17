import { Field, Form, Formik } from "formik";

export const SearchBar = ({onSearch}) => {
    return (
        <header>
            <Formik initialValues={{ search: '' }} onSubmit={(values) => {
                if (values.search.trim() === '') { return }
                onSearch(values.search.trim())
            }}>
                <Form>
                    <Field type="text" autoComplete="off" name="search" autoFocus placeholder="Search images and photos" />
                    <button type="submit">Search</button>
                </Form>
            </Formik>
                
        </header>
    )
}