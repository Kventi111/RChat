import React from 'react';


const RegisterForm = () => (
    <form>
      <label htmlFor="firstname">firstname</label><br/>
      <input id="firstname" type="text"/> <br />
      <label htmlFor="lastname">lastname</label><br/>
      <input id="lastname" type="text"/> <br />
      <label htmlFor="email">email</label><br/>
      <input id="email" type="text"/> <br />
      <label htmlFor="password">password</label><br/>
      <input id="password" type="text"/> <br />
      <button>Регистарация</button>
    </form>
  )

export default RegisterForm;