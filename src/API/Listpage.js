import React from 'react'
import {Link} from 'react-router-dom'


const Listpage = () => {
    return (
        <div className="list-container">
         <h1>英語フレーズ管理アプリ</h1>
        <ul  className="listpage">
        <Link   to='/socializingandrelationship'>
        <li className="box">人間関係・社交</li>
        </Link>
        <Link  to='/travel'>
        <li className="box">旅行・海外</li>
        </Link>
        <Link  to='/schoollife'>
        <li className="box">学校生活・職場</li>
        </Link>
        <Link  to='/healthandbody'>
        <li className="box">健康・食・体</li>
        </Link>
        <Link  to='/natureandenvironment'>
        <li className="box">気候・動物・公害</li>
        </Link>
        <Link  to='/allpurpose'>
        <li className="box">その他</li>
        </Link>
        </ul>
        </div>
    )
}

export default Listpage
