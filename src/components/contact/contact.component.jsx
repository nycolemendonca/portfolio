import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.component.css';

export const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.
      sendForm(
        'service_sxy5f69', 
        'template_qouengf', 
        form.current, 'NTDKqj7Xp3LH23sR0')

      .then((result) => {
          console.log(result.text);
          
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <div id='contactContainer'>
      <h2 className='contactTitle'>Contato</h2>
      <p className='contactDescription'>Se você está com uma ideia brilhante para um website ou precisa de ajuda com um trabalho, não hesite em me mandar uma mensagem. Juntos, podemos transformar suas ideias em realidade :D</p>

      <form ref={form} onSubmit={sendEmail}>
      <label>Nome</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Telefone(opcional)</label>
      <input type="tel" name="user_phone" />
      <label>Menssagem</label>
      <textarea name="message" />
      <input type="submit" value="Enviar" />
    </form>

    </div>
  )
}
