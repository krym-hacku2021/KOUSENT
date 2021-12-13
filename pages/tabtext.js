import React, { useState } from "react";
export default function Txtarea(props){
    const[text,setText]=useState("");
    const update=function(){
        props.update(text);
    }

    return (
        <>
        <div>入力された内容をそのまま表示する</div>
        <div>{text}</div>
        <div class="b">
        <textarea class="txt" placeholder="3文字以上入力してください" onChange={event => setText(event.target.value)} /><br></br>
        </div></>
        // <>
        // <div class="flame02"><font size="5"><a href="https://www.figma.com/file/cKvJp37NE5Sv1Caxgc5Dcz/UI%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3?node-id=0%3A1">
        //     C言語の二分探索木がわかりませんわかるふといますか？</a></font><br></br>
        // <time>12月08日12：09</time>
        // <button class="kadomaru">#高専</button>
        // <button class="kadomaru">#流通情報工学科</button>
        // <button class="kadomaru">#C言語</button>
        // </div>
        // </>
    )
}