import { format, formatDistanceToNow } from "date-fns";
import enGB from "date-fns/locale/en-GB";

import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import { useState } from "react";

// author: { avatar_url: "", name: "", role:""}
// publishedAt: Date
// content: String

// state = variables that the component will monitor

export function Post({ author, content, publishedAt}) {

    const [comments, setComments ] = useState([
        1,
        2
    ] )

        {/* Set DataTime using date-fns*/}
    const publishedDateFormatted = format(publishedAt, "dd LLLL HH:mm", 
    {locale: enGB}
    )

    const publishDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: enGB,
        addSuffix: true, //add ago or about at time
    })


        function handleCreateNewComment() {
            setComments([...comments, comments.length + 1])
        }
    return (
    <article  className={styles.post}>
        <header>
            <div className={styles.author}>
                <Avatar src={author.avatarUrl}/>
            <div className={styles.authorInfo}>
                <strong>{author.name}</strong>
                <span>{author.role}</span>
            </div>
            </div>

        {/* Set DataTime */}
            <time title={publishedDateFormatted} dateTime= {publishedAt.toISOString()}>{publishDateRelativeToNow}</time>
        </header>

            
        <div className={styles.content}>
            {content.map(line => {
               if (line.type === 'paragraph') {
                return <p>{line.content}</p>;
               } else if (line.type === 'link') {
                return <p><a href="#">{line.content}</a></p>;
               }
            })} 

        </div>

        {/* Feedback Section */}
        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
            <strong>Give us your feedback!</strong>
            <textarea placeholder="Type your comment..."/>
           
           <footer>
            <button type="submit">Send</button>
            </footer>
            </form>

        {/* Comments Section */}
            <div className="commentList">
               {comments.map(comment => {
                return <Comment/>
               })}
            </div>

    </article>

    
    )
}