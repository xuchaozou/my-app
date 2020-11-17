import './App.css';

// let name = '邹绪超'
// let fruits = ['苹果', '西瓜', '橙子']
// let style ={
//   color : 'red'
// }
// let className = 'header'
// let dom = fruits.map((item,index) => {
//   return <div key={index}>{item}</div>
// })

// function Component(){
//   return <div onClick={() => {console.log('点击')}}>我是子组件</div>
// }

// function FatherComponent(){
//   return (<div>
//      <Component />
//       <Component />
//       <Component />
//   </div>)
// }



let fruits = ['苹果', '西瓜', '橙子']
let currenIndex = -1


function clickItem(index){
  currenIndex = index
  console.log(currenIndex)
  App()
}
function RenderFruits(){
  return (<ul>
  {fruits.map((item, index) => {return <li style={{color : index == currenIndex ? 'red' : 'hotPink'}} onClick={() => clickItem(index)}  key={index}>{item}</li>})}
  </ul>)
}

function App() {
  return (
    <RenderFruits />
  );
}

export default App;
