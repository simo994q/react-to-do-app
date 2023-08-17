import style from './List.module.scss'
import { useState } from 'react'

export function List () {

    const [itemArray, setArray] = useState(['opgave 1'])

    const [newItem, addItem] = useState('')

    return (
        <div className={style.container}>
            <h1>To Do</h1>

            <div className={style.itemsContainer}>
                <table>
                    {itemArray.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item}</td>
                                <td>remove</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
            <form className={style.newItemContainer} onSubmit={setArray(newItem)}>
                <input onChange={(event) => {addItem(event.target.value)}}/>
                <input type='submit' value='+ Add ned'></input>
            </form>
        
        </div>  
    )
}