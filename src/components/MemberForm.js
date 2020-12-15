import React, {useState} from 'react'

const initialValues = {memberFname:'', memberLname:'', email:'', role:'', strengths:'', weaknesses:''}

function MemberForm(props) {
const {teamMembers, setTeamMembers} = props
const [formValues, setFormValues] = useState(initialValues)

const change = (evt) => {
    const {name, value} = evt.target;
    setFormValues( {...formValues, [name]:value.trim()} )
}

const submit = (evt) => {
    evt.preventDefault()
    setTeamMembers( [...teamMembers, formValues] );
    setFormValues(initialValues);
}

// const edit = (evt) => {
//     evt.preventDefault()
//     const{name, value} = evt.target;
//     teamMembers.map( member => {
//         if (member.name = )
//     }

// )

// }
  
  return (
    <form className="MemberForm" onSubmit={submit}>
      <input
      name='memberFname'
      type='text'
      value={formValues.memberFname}
      onChange={change}
      placeholder='First Name'
      ></input><br/>
      <input
      name='memberLname'
      type='text'
      value={formValues.memberLname}
      onChange={change}
      placeholder='Last Name'
      ></input><br/>
      <input
      name='email'
      type='text'
      value={formValues.email}
      onChange={change}
      placeholder='E-mail Address'
      ></input><br/>
       <input
      name='role'
      type='text'
      value={formValues.role}
      onChange={change}
      placeholder='Team Role'
      ></input><br/>
       <input
      name='strengths'
      type='text'
      value={formValues.strengths}
      onChange={change}
      placeholder='Strengths'
      ></input><br/>
         <input
      name='weaknesses'
      type='text'
      value={formValues.weaknesses}
      onChange={change}
      placeholder='Weaknesses'
      ></input><br/>
      <button>submit</button>
      
     
    </form>
  );
}

export default MemberForm;
