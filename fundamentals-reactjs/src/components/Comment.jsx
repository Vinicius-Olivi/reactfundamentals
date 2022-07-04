import styles from './Comment.module.css'

import mah from '../assets/mah.svg'
import { ThumbsUp, Trash } from 'phosphor-react'


export function Comment() {
    return (
        <div className={styles.comment}>
            <img className={styles.avatar} src={mah}  />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Vini Olivi</strong>
                            <time title="2022-04-07 at 11:25" dateTime= "2022-04-07" >About 1 hour ago</time>
                    </div>

                    <button title="comment delete">
                         <Trash size={24}/>
                    </button>
                </header>

                <p>Great! Congratulations! 👏</p>
            </div>
            
            <footer>
               <button>
                <ThumbsUp />
                Aimer <span>20</span>
               </button>
            </footer>
        </div>
        </div>
    )
}