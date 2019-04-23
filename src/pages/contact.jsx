import React, {Component} from 'react';
import { FormattedMessage } from 'react-intl';
import { graphql } from 'gatsby'
import withLayout from '../layout'
import Link from '../components/Link';
import Image from '../components/Image';
import HomeHero from '../components/HomeHero'
import styles from '../styles/contact.module.scss'
import Button from '../components/Button'
import GraphImg from 'graphcms-image'
import cx from 'classnames'
import SectionHeading from '../components/SectionHeading'
import needle from '../images/needle.svg'
import diddly from '../images/nic.svg'
import Section from '../components/Section'
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
  <form className={styles.form} id="form" onSubmit={this.submitHandler}>

				<div className={styles.form__col}>
					<input type="text" className={styles.form__input} name="name" id="name" required value={this.state.name} onChange={this.onInputHandler}/>
					<label htmlFor="name" className={styles.form__label}>Imię i nazwisko</label>
				</div>
				<div className={styles.form__col}>
					<input type="text" className={styles.form__input} name="email" id="email" required value={this.state.email} onChange={this.onInputHandler}/>
					<label htmlFor="email" className={styles.form__label}>Adres e-mail</label>
				</div>
				<div className={styles.form__col}>
					<input type="text" className={styles.form__input} name="phone" id="phone" required value={this.state.phone} onChange={this.onInputHandler}/>
					<label htmlFor="phone" className={styles.form__label}>Numer telefonu</label>
				</div>
				<div className={cx(styles.form__col, styles.textarea)}>
					<textarea className={cx(styles.form__input, styles.textarea)} name="message" id="message" required value={this.state.message} onChange={this.onInputHandler}></textarea>
					<label htmlFor="message" className={cx(styles.form__label, styles.textarea)}>Jak możemy pomóc?</label>
				</div>
				<div className={cx(styles.form__col, styles.form__button)}>
               <Button  text="Wyślij wiadomość" type="button"/>
				</div>

			</form>
  </div>

  </main>
  </>
)}
  };

const customProps = {
  localeKey: 'contact', // same as file name in src/i18n/translations/your-lang/index.js
};




export default withLayout(customProps)(ContactPage);
