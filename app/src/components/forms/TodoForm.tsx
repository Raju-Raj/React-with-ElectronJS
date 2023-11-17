import { Formik,Form,Field,ErrorMessage } from 'formik'
import React from 'react';
import * as Yup from "yup";

interface Ivalue{
    description:string;
}

const TodoForm:React.FC = () => {

    const ipcRenderer = (window as any).ipcRenderer

    const initialvalue : Ivalue ={
        description:''
    }
    const onSubmit = (values:Ivalue) => {
        console.log('Values : ', values)
        ipcRenderer.send('submit:todoForm',values)
    }
    const validationSchema = Yup.object().shape({
        description:Yup.string().required(),
    })
  return (
    <div>
        <Formik initialValues={initialvalue} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form>
                <div>
                <Field name="description" id="description"/>
                <ErrorMessage name="description"/>
                </div>
                <button type='submit'>Save</button>
            </Form>
        </Formik>
    </div>
  )
}

export default TodoForm