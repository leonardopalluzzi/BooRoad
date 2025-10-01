import { useState, useEffect } from 'react';

export default function StatusTag({ start, end }) {

  const [status, setStatus] = useState('');

  const [messageStatus, setMessageStatus] = useState('')

  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    if (start > today) {
      setStatus('scheduled');
      setMessageStatus('In programma');
    } else if (start < today && end > today) {
      setStatus('inProgress');
      setMessageStatus('In corso');
    } else if (end < today) {
      setStatus('finished');
      setMessageStatus('Terminato');
    }
  }, [start, end, today]);

  return (

    <div className={`badge text-white ${status} p-2`}>

      {messageStatus}

    </div>


  )

}