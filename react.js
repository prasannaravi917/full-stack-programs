import React from'react';
class ColourfulCounter extends React.Component{
state ={count:0};
increment=()=>this.setState*({count:this.state.count+1});
decrement=()=>this.setState({count:this.state.count-1});
reset=()=>this.setstate({count:0});
render(){
return(
<div style={{textAlign:'center',marginTop:'50px'}}>
<h1 style={{color:'#333'}}>Count:
<button
onClick={this.increment}
style={styles.incrementButton}
>
+
</button>
<button>
onClick={this.dectrement}
style={styles.decrementButton}
>
-
</button>
<button
onClick={this.rest}
style={styles.resetButton}
>
Reset
</button>
</div>
);
}
}
const styles={
incrementButton:{
backgroundcolor:'#4CAF0)',//Green
color:'White',
padding:'10px 20px',
margin:'0 5px',
border:'none',
borderRadius:'5px',
fontsize:'16px',
cursor:'pointer'
},
decrementButton:{
backgroundcolor:'#f44336',//Red
color:'White',
padding:'10px 20px',
margin:'0 5px',
border:'none',
borderRadius:'5px',
fontsize:'16px',
cursor:'pointer'
},
resetButton:{
backgroundColor:'#2196F3',//Blue
color:'White',
padding:'10px 20px',
margin:'0 5px',
border:'none',
borderRadius:'5px',
fontsize:'16px',
cursor:'pointer'
}
};
export default colorfulCounter;;