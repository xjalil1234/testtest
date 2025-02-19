

export default function Product(props) {



  return (
    <div className='product' style={{padding:"15px 0px",border:"1px  solid black",width:"20%",height:"300px"}}>
<img style={{width:"100%",height:"80%", marginBottom:"40px"}} src={props.info.image} alt='product' />


<div style={{
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center"
}}>
    <div className='name'>{props.info.title}</div>
    <div className='quantity'>quantity</div>
    <div className='price'>{props.info.price}</div>
</div>
    </div>
  )
}
