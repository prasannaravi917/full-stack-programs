import React,{useState}from'react';
export deafault function ToggleMessage(){
const[show,setshow]=useState(false);
return(
<div style={{
minHeight:'100vh';
display:'grid';
placeItems:'centre',
background:'linear-gradient(to bottom,#1e3c720%,#2a5298 100%)',
padding:20,
color:''white',
fontfamily:'Arial,sans-serif'
}}>
<div style={{textAlign:'center'}}>
<h1 style={{marginBottom:20}}>Rainy Day Toggle</h1>
<button
onClick={0=>setShow(!show)}
style={{
padding:'12px 24px',
background:'rgba(255,255,255,0.15)',
color:'white',
border:'1px solid rgba(255,255,255,0.3)',
borderRadius:8,
cursor:'pointer',
backdropFilter:'blur(5px)',
fontSize:16
}}
>
{show?'stop Rain':start Rain'}
</button>
{show &&(
<div style={{marginTop:30}}>
<div style={{fontSixe:40}}>*</div>
<p style={{marginTop:10}}>The rain is falling specially...</p>
</div>)}
</div>
);
}