import { useState, useEffect, ChangeEvent } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './PersonalInfo.scss';

function PersonalInfo({ onDataSubmit, isSubmitted }: PersonalInfoProps) {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ address, setAddress ] = useState('');

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const handleAddressChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };

  useEffect(() => {
    if (isSubmitted) {
      setName('');
      setEmail('');
      setPhone('');
      setAddress('');
    }
  }, [isSubmitted]);

  useEffect(() => {
    onDataSubmit({ name, email, phone, address });
  }, [ name, email, phone, address ]);

  return(
    <Box
      component='form'
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        'display': 'flex',
        'flexDirection': 'column',
      }}
      noValidate
      autoComplete='off'
    >
      <TextField id='standard-basic' label='Name' variant='standard' value={name} onChange={handleNameChange} required />
      <TextField id='standard-basic' label='Email' variant='standard' value={email} onChange={handleEmailChange} required />
      <TextField id='standard-basic' label='Phone' variant='standard' value={phone} onChange={handlePhoneChange} required />
      <TextField id='standard-basic' label='Address' variant='standard' value={address} onChange={handleAddressChange} required />
    </Box>
  )
}

export default PersonalInfo;