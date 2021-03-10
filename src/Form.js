import React, { useState } from 'react'

function NewBookForm() {
  const [title, setTitle] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [isbn, setISBN] = useState('')

  return(
    <form>
      <input 
        name='title' 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder='Title' 
      />
      <input 
        name='firstName' 
        value={firstName} 
        onChange={(e) => setFirstName(e.target.value)} 
        placeholder="Author's first name" 
      />
      <input 
        name='lastName' 
        value={lastName} 
        onChange={(e) => setLastName(e.target.value)} 
        placeholder="Author's last name" 
      />
      <input 
        name='isbn' 
        value={isbn} 
        onChange={(e) => setISBN(e.target.value)} 
        placeholder='ISBN (optional)' 
      />
    </form>
  )

}
export default NewBookForm;