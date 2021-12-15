import React, { useState } from "react";
import EXAppBar from "./EXAppBar";
export default function Home() {
    const [user,setUser]=useState({
        name:"",
        mail:"",
        pass:"",
        tag :""

    })
    return (
        <div>
            <EXAppBar/>
            <div class="oya2">
            <br></br>
                <e>アカウント作成</e>
                <br></br>
                <c>ユーザ名</c>
                <input type="text" class="txa"></input>
                <c>メールアドレス</c>
                <input type="text" class="txa"></input>
                <c>パスワード</c>
                <input type="password" class="txa"></input>
                <c>パスワード(確認)</c>
                <input type="password" class="txa"></input>
                <c>タグの入力</c>
                <textarea class="intag" placeholder="例：#～高専　#～学科　#～年入学　　　今学んでいることなど" />
            </div>
            <div align="center">
            <button class="iconbutton" ><img src="accounticon.png" width="100%" height="100%" ></img></button>
            <br></br>
            <button class="iconbutton" ><img src="accountcomp.png" width="100%" height="100%" ></img></button>
            </div>
        </div>
      )
  }