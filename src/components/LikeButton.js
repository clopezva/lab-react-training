import { useState } from "react"

export default function LikeButton(){
    
    const [likes, setLikes] = useState(0)
    const colors = ['purple','blue','green','yellow','orange','red']


    // const [indexColor, setIndexColor] = useState(0);
    
    //   function handleClick() {
    //     setLikes(likes + 1);
    //     if (indexColor == colors.length - 1) {
    //       setIndexColor(0);
    //     } else {
    //       setIndexColor(indexColor + 1);
    //     }
    //   }

    function handleClick(){
        setLikes(likes + 1)
    }
    
    return (
        <>
        <button onClick={handleClick} style={{backgroundColor: colors[likes % colors.length], color: "white"}}>{likes} Likes</button>
        </>
    )
}

