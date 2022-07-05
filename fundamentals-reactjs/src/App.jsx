import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"



import styles from "./App.module.css"
import './global.css'


// author: { avatar_url: "", name: "", role:""}
// publishedAt: Date
// content: String


const posts = [
  {
  id: 1,
  author: {avatarUrl: "https://github.com/Vinicius-Olivi.png",
  name: "Vinicius Olivi",
  role: "Web Developer"  
  },
  content: [
        { type: 'paragraph', content: 'Hey Guys! 👋', },
        { type: 'paragraph', content: "I've just posted a new project on my portfolio. It's a project that a did in my Software tester course from Rocketseat." },
        { type: 'link', content: '👉  mah_gol.tester/spaapp ' },
  ],
  publishedAt: new Date('2022-07-05 11:25:00'),
},
{
  id: 2,
  author: {avatarUrl: 'https://scontent-lcy1-1.xx.fbcdn.net/v/t1.6435-9/67828565_3046158035398461_760008597764571136_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=unC5klrJaPEAX93wqmT&_nc_ht=scontent-lcy1-1.xx&oh=00_AT-kuEIBHBDlmFsOYkee9JYeZIJxbmjI7gLSy6_2i6JKBg&oe=62E83383',
  name: "Mah Olivi",
  role: "QA Tester"  
  },
  content: [
        { type: 'paragraph', content: 'Hey Guys! 👋', },
        { type: 'paragraph', content: "I've just posted a new project on my portfolio. It's a project that a did in my Software tester course from Rocketseat." },
        { type: 'link', content: '👉  mah_gol.tester/spaapp ' },
  ],
  publishedAt: new Date('2022-07-05 11:45:00'),
},
]

export function App() {

  return (
    <div>
      <Header/>
  <div className={styles.wrapper}>
    <Sidebar/>
    <main>
      {posts.map(post => {
        return( 
          <Post
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
          />
      )
      })  }
    </main>
  </div>
  
   </div>
  )
}


