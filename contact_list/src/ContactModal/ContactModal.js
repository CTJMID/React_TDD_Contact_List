 
 import { useState } from 'react';
 import styles from './styles.module.css';
 
 export const ContactModal = () => {
     
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    
    return (
     <> 
     <div>I am the contact modal</div>
     
     <div className={styles.main}>
         <form>
        <input 
            required
            value={name}
            placeholder= 'Name'
            onChange={e => setName(e.target.value)}
        />
        <input 
            required
            value={phone}
            placeholder= 'Phone Number'
            onChange={e => setPhone(e.target.value)}
        />
        <input 
            required
            value={email}
            placeholder= 'Email Address'
            onChange={e => setEmail(e.target.value)
        } />

        <buttom> Submit </buttom>
        </form>
     </div>
     </>
     
    )
 };