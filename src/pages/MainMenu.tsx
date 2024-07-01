import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

interface FormValues {
 
  password: string;
}

const MainMenu: React.FC = () => {
  const navigate = useNavigate();
  const initialValues: FormValues = {
    
    password: '',
  };

  const validationSchema = Yup.object({

    password: Yup.string()
      .required('Password is required'),
  });

  const onSubmit = (values: FormValues, { setSubmitting, setErrors }) => {
    setSubmitting(true);

    // Custom validation for username and password
    if (values.password !== 'truthwelltold') {
      setErrors({ password: 'Invalid Password' });
    } else {
      navigate('/mainmenupage');
      alert('Welcome! Press `OK` to continue.');
    }

    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>

       <h2>Please enter password</h2><br/>
          <div>
            <label htmlFor="password"></label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
          </div> <br/><br/>
          <div className='center'>
          <button className="submitBtn" type="submit" disabled={isSubmitting}>Submit</button>
          </div>

        </Form>
      )}
    </Formik>
  );
};



  // return (
  //   <div>
  //     <h1>Main Menu</h1>
  //     <button onClick={() => navigate('/home')}>Enter</button>
  //     <button onClick={() => navigate('/info')}>Instructions</button>
  //   </div>
  // );


export default MainMenu;