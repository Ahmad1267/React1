import "./Home.css"
import React from 'react'


export default function Home() {

    // array mein ager object ho to wo represent kerne ke leye map used kerte hai 
  let a = 10;
  let b = 20;
  let  c = [20, 30, "Apple",]
  let arr1 = [
    {name : "Ali", age : 21, gender : "male"},
    {name : "John", age : 22, gender : "male"},
    {name : "Sara", age : 23, gender : "female"},
    {name : "Smih", age : 24, gender : "male"},
    {name : "Zoi", age : 25, gender : "female"}
  ]
  let user = arr1.map((obj, index)=><h1>{index} {obj.name} {obj.age} {obj.gender}</h1>)

  let status = true
  return (
    <>
    {c}
    {user}
    {arr1.map((obj, index)=>{
      return(
        <h2>{obj.name} {obj.age} {obj.gender}</h2>
      )
    })}
    {
      arr1.map((obj, index)=><h3>{index+1} {obj.name} {obj.age} {obj.gender}</h3>)
    }
    {status ? <p>Welcome</p> : ''}
    <section>
      <h1>My first component {a + b}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci minima, placeat itaque temporibus atque soluta exercitationem aut porro nemo ipsum! Architecto autem ea animi voluptatem recusandae nostrum. Vitae, exercitationem cupiditate!</p>
    </section>
    <section className="productSection">
        <h2>Our Product</h2>
        <div className="productMid">
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
        </div>
    </section>
    </>
  )
}
function Product(){
  return(
    <div className="productItem">
            <img src="/40.jpg" alt="" />
            <h3>Clock Tower</h3>
          </div>
  )
}
