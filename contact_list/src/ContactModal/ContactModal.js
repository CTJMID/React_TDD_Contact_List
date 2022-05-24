 
 import { useEffect, useState } from 'react';
 import styles from './styles.module.css';
 
 export const ContactModal = () => {
    const [isValid, setIsValid] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        setIsValid(
            !!name && 
            !!phone && 
            !!email && 
            /^[0-9]{5}-[0-9]{6}$/.test(phone) &&
            /^\w+([.-]?\w+)*@\w+([.-]?w+)*(\.\w{2,3})+$/.test(email)
        )
    }, [name, phone, email])
    
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

        <button disabled={!isValid}> Submit </button>
        </form>
     </div>
     </>
     
    )
 };