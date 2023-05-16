import React from 'react';
import { useHistory } from 'react-router-dom';



export default function BaseApp({tittle,  styles, children}){
         const history = useHistory();
    return(
        <div>
             <div>
             <span>
                    <button
                    onClick={() => history.push('/student')}
                    >student</button>
                </span>
                <span>
                    <button
                    onClick={() => history.push('/teacher')}
                    >teacher</button>
                </span>
             </div>
           
            <div className={styles}>{tittle}</div>
            <div className='childran'>{children}</div>
            <footer>contact Us 
                <div>email: react@gmail.com</div>
                <div>phone: 7010*****51</div>
            </footer>
        </div>
    )
}
