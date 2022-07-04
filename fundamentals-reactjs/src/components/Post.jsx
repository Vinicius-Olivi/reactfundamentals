import styles from './Post.module.css';
import mah from '../assets/mah.svg'
import { Comment } from './Comment';
import { Avatar } from './Avatar';

export function Post() {
    return (
    <article  className={styles.post}>
        <header>
            <div className={styles.author}>
                <Avatar src={mah}/>
            <div className={styles.authorInfo}>
                <strong>Mah Olivi</strong>
                <span>QA Engineer</span>
            </div>
            </div>

            <time title="2022-04-07 at 11:25" dateTime= "2022-04-07" >Posted 1 hour ago</time>
        </header>

        <div className={styles.content}>
           <p> Hey Guys! 👋</p>

           <p> I've just posted a new project on my portfolio. Is a project that a did in my Software tester course from Rocketseat.</p>

           <p>👉 <a href=""> mah.gol.tester/spaapp </a></p>

           <p>
            <a href=""> 
            #newcareer 
            </a> {" "}
            <a href=""> 
             #newlife 
            </a>{" "}
            <a href=""> 
             #firstproject
            </a>{" "}
            </p>

        </div>

        {/* Feedback Section */}
        <form className={styles.commentForm}>
            <strong>Give us your feedback!</strong>
            <textarea placeholder="Type your comment..."/>
           
           <footer>
            <button type="submit">Send</button>
            </footer>
            </form>

        {/* Comments Section */}
            <div className="commentList">
                <Comment/>
                <Comment/>
                <Comment/>
            </div>

    </article>

    
    )
}