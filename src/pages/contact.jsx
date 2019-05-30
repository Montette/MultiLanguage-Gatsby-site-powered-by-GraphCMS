import React, { Component } from 'react';
import withLayout from '../layout';
import styles from '../styles/contact.module.scss';
import Button from '../components/Button';
import cx from 'classnames';
import SectionHeading from '../components/SectionHeading';
import { Formik, Field, Form, ErrorMessage } from 'formik';
<<<<<<< HEAD
// import portfolioImg from '../images/services2.jpg'

class ContactPage extends Component  {

	state = {
		name: '',
		phone: '',
		email: '',
		message: ''
	}
	submitHandler = (event) => {
		event.preventDefault();
		console.log(this.state);
		fetch('https://usebasin.com/f/1fa9d4146a4f', {
			method: 'post',
			headers: {
				"Content-type": "application/json"
			},
			body: JSON.stringify(this.state)
		})
		.then(res => res.json())
		.then(res => {
			console.log(res);
<<<<<<< HEAD
			this.setState({
				name: '',
				phone: '',
				email: '',
				message: ''
			})
=======
>>>>>>> da25c5af94fe6a910b58b732b4995cabf1c6edbe
		})
	}

	onInputHandler = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	render() {
  return (
  <>
  <main className='main'>
  <SectionHeading subtitle='home.Read' title='home.What we can do for you' />
  <div className={styles.container}>
  <Formik
      initialValues={{ name: '', email: '', phone: '', message: '' }}
      validate={values => {
		let errors = {};

		if (!values.name) {
			errors.name = 'Required';
		  } else if (
			!/^[a-zA-ZąćęłńóśźżĄĘŁŃÓŚŹŻ]+(?:[\s-][a-zA-ZąćęłńóśźżĄĘŁŃÓŚŹŻ]+)*$/i.test(values.name)
		  ) {
			errors.name = 'The name must consist only of the alphabet characters';
		  } else if (
			  values.name.length < 3
		  ) {
			  errors.name = 'The name must consist minimum 3 characters'
		  }
		
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
		}

		if (!values.phone) {
			errors.phone = 'Required';
		  } else if (
			!/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g.test(values.phone)
		  ) {
			  errors.phone = 'Enter the valid phone number'
		  }

		if (!values.message) {
			errors.message = 'Required';
		  } else if (
			  values.message.length < 10
		  ) {
			  errors.message = 'The message must consist minimum 3 characters'
		  }
        return errors;
      }}
      onSubmit={(values, { setSubmitting, resetForm, setErrors, setStatus }) => {
		// fetch('https://usebasin.com/f/1fa9d4146a4f', {
			const message = `${values.message}, \n \n ${values.name}\n adres mailowy: ${values.email}, \n numer telefonu: ${values.phone}`;
			console.log(message);
			fetch('https://hygczlirsj.execute-api.us-east-1.amazonaws.com/default/my_lambda_email', {
			method: 'post',
			headers: {
				"Content-type": "application/json"
			},
			body: message
		}).then(
            response => {
			  console.log(response);
			  if (response.ok) {
				  console.log('message was sent')
			  } else {
				  console.log('error')
			  }
			  setSubmitting(false);
			  resetForm();
            },
            error => {
            //  setSubmitting(false);
            //   actions.setErrors(transformMyRestApiErrorsToAnObject(error));
			//   actions.setStatus({ msg: 'Set some arbitrary status or data' });
			console.log(error);
			setSubmitting(false);

            }
          );
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (

		
		<form className={styles.form} id="form" onSubmit={handleSubmit}>

		<div className={styles.form__col}>
			<input type="text" className={styles.form__input} name="name" id="name" onChange={handleChange} onBlur={handleBlur} value={values.name} required />
			<label htmlFor="name" className={styles.form__label}>Imię i nazwisko</label>
			<ErrorMessage name="name" component="div" className={styles.form__warning}/>  
		</div>
		<div className={styles.form__col}>
			<input type="text" className={styles.form__input} name="email" id="email" onChange={handleChange} onBlur={handleBlur} value={values.email} required />
			<label htmlFor="email" className={styles.form__label}>Adres e-mail</label>
		
            <ErrorMessage name="email" component="div" className={styles.form__warning}/>  
		</div>
		<div className={styles.form__col}>
			<input type="text" className={styles.form__input} name="phone" id="phone" onChange={handleChange} onBlur={handleBlur} value={values.phone} required />
			<label htmlFor="phone" className={styles.form__label}>Numer telefonu</label>
			<ErrorMessage name="phone" component="div" className={styles.form__warning}/>  
		</div>
		<div className={cx(styles.form__col, styles.textarea)}>
			<textarea className={cx(styles.form__input, styles.textarea)} name="message" id="message" onChange={handleChange} onBlur={handleBlur} value={values.message} required></textarea>
			<label htmlFor="message" className={cx(styles.form__label, styles.textarea)}>Jak możemy pomóc?</label>
			<ErrorMessage name="message" component="div" className={styles.form__warning}/> 
		</div>
		<div className={cx(styles.form__col, styles.form__button)}>
	   <Button  text="Wyślij wiadomość" type="submit"/>
		</div>

	</form>

      )}
    </Formik>



  </div>
=======
import { FormattedMessage } from 'react-intl';
import {useState} from 'react';
import contact from '../i18n/translations/de/contact';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
		backgroundColor       : '#FCFBF3',
		padding							: '40px'
  },
  overlay : {
    zIndex                : '1000'
  }
};


const ContactPage = ()=> {

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isError, setIsError] = useState(false);
 
    return (
      <>
        <main className="main">
				<Modal
                isOpen={isModalOpen}
                onRequestClose={()=> setIsModalOpen(false)}
                contentLabel='test'
                style={customStyles}
              >
            <div className={styles.container}>
							{isError ? <FormattedMessage id='contact.An error has occurred in the connection. Please try again later.' /> : <FormattedMessage id='contact.Message was sent successfully.' />}
							
						</div>
          
          </Modal>
          <SectionHeading subtitle="contact.Interested in cooperation?" title="contact.Send us a message" />
          <div className={styles.container}>
            <Formik
              initialValues={{ name: '', email: '', phone: '', message: '' }}
              validate={values => {
                let errors = {};

                if (!values.name) {
                  errors.name = 'Required';
                } else if (
                  !/^[a-zA-ZąćęłńóśźżĄĘŁŃÓŚŹŻ]+(?:[\s-][a-zA-ZąćęłńóśźżĄĘŁŃÓŚŹŻ]+)*$/i.test(
                    values.name,
                  )
                ) {
                  errors.name = 'The name must consist only of the alphabet characters';
                } else if (values.name.length < 3) {
                  errors.name = 'The name must consist minimum 3 characters';
                }

                if (!values.email) {
                  errors.email = 'Required';
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                  errors.email = 'Invalid email address';
                }

                if (!values.phone) {
                  errors.phone = 'Required';
                } else if (!/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g.test(values.phone)) {
                  errors.phone = 'Enter the valid phone number';
                }

                if (!values.message) {
                  errors.message = 'Required';
                } else if (values.message.length < 10) {
                  errors.message = 'The message must consist minimum 3 characters';
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting, resetForm, setErrors, setStatus }) => {
                const message = `${values.message}, \n \n ${values.name}\n adres mailowy: ${
                  values.email
                }, \n numer telefonu: ${values.phone}`;
                console.log(message);
                fetch(
                  'https://hygczlirsj.execute-api.us-east-1.amazonaws.com/default/my_lambda_email',
                  {
                    method: 'post',
                    headers: {
                      'Content-type': 'application/json',
                    },
                    body: message,
                  },
                ).then(
                  response => {
                    console.log(response);
                    if (response.ok) {		
                    } else {
                      setIsError(true);
										}
										setIsModalOpen(true);
										setSubmitting(false);
										
                    resetForm();
                  },
                  error => {
										console.log(error);
										setIsError(true);
										setIsModalOpen(true);
                    setSubmitting(false);
                  },
                );
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form className={cx(styles.form, 'wow fadeInUp')} id="form" onSubmit={handleSubmit}>
                  <div className={styles.form__col}>
                    <input
                      type="text"
                      className={styles.form__input}
                      name="name"
                      id="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      required
                    />
                    <label htmlFor="name" className={styles.form__label}>
										<FormattedMessage id='contact.Your name' />
                    </label>
                    <ErrorMessage name="name" component="div" className={styles.form__warning} />
                  </div>
                  <div className={styles.form__col}>
                    <input
                      type="text"
                      className={styles.form__input}
                      name="email"
                      id="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      required
                    />
                    <label htmlFor="email" className={styles.form__label}>
										<FormattedMessage id='contact.E-mail adress' />
                    </label>

                    <ErrorMessage name="email" component="div" className={styles.form__warning} />
                  </div>
                  <div className={styles.form__col}>
                    <input
                      type="text"
                      className={styles.form__input}
                      name="phone"
                      id="phone"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phone}
                      required
                    />
                    <label htmlFor="phone" className={styles.form__label}>
										<FormattedMessage id='contact.Phone number' />
                    </label>
                    <ErrorMessage name="phone" component="div" className={styles.form__warning} />
                  </div>
                  <div className={cx(styles.form__col, styles.textarea)}>
                    <textarea
                      className={cx(styles.form__input, styles.textarea)}
                      name="message"
                      id="message"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.message}
                      required
                    />
                    <label htmlFor="message" className={cx(styles.form__label, styles.textarea)}>
										<FormattedMessage id='contact.How can we help you?' />
                    </label>
                    <ErrorMessage name="message" component="div" className={styles.form__warning} />
                  </div>
                  <div className={cx(styles.form__col, styles.form__button)}>
                    <Button text="contact.Send a message" type="submit" />
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </main>
      </>
    );
  }
>>>>>>> develop


const customProps = {
  localeKey: 'contact', // same as file name in src/i18n/translations/your-lang/index.js
};

export default withLayout(customProps)(ContactPage);
