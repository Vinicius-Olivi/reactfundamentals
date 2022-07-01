import { Header } from "./components/Header"
import {Post} from "./Post"

import './global.css'

export function App() {

  return (
    <div>
      <Header/>
   <Post 
      author="Vini Olivi"
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sit saepe deleniti autem in tempora vero nobis aliquam quae. Rerum cupiditate veniam suscipit ullam maiores quia consequuntur quas. Temporibus, earum?"
   />
  
   </div>
  )
}


