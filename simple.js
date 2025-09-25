import React,{useState}from'react';
function SinmpleForms(){
const[formData,setFormData]=useState({name:"email:"});
const[submitted,setsubmitted]=useState(false);
const handleSubmit=(e)=>{
e.preventDefault();
setSubmitted(true);}
};
consthandleChange=(e)=>{
setFormData({...formData,[e.target.name]:e.target.value});
};
if(submitted){
return(
<div style={{padding:'20px',textalign:'senter'}}>
<h2>Thank you for submitting!</h2>
<p>we received your details.</p>
<button
onClick={()=>setsubmitted(false)}
style={{padding:'px 16ox',marginTop:'10px'}}
>
submit again
</button>
</div>
);
}
return(
<form onsubmit={handleSubmit}style={{padding:'20px'}}>
<input
type="text"
name="name"
value={formData.name}
onChange={handleChange}
placeholder="Your Name"
required
style={{display:'block',margin:'10px 0',padding:'8px',width:'100%'}}
/>
<input
type="email"
name="email"
value={formData.email}
onChange={handleChange}
placeholder="your Email"
required
style={{display:'black',margin:'10px 0',padding:'8px',width:100%}}
/>
<button type="submit"style={{padding:'8px 16px',marginTop:'10px'}}>
submit
</button>
</from>
);
}
export default simpleForm; 