import style from './NewList.module.scss'
import { useState } from 'react'

export function NewList() {

    const [itemArray, setArray] = useState([])

    const [newItem, setNewItem] = useState('')

    function addItem (item) {
        setArray([...itemArray, item])
    }

    function removeItem (index) {
        const updatedArray = itemArray.filter((_, i) => i !== index);
        setArray(updatedArray)
    }

    return (
        <div className={style.fullContainer}>
            <div className={style.container}>
                <h1>To Do</h1>

                <div className={style.itemsContainer}>
                    <table>
                        <tbody>
                            {itemArray.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item}</td>
                                        <td onClick={() => { removeItem(index) }}>remove</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <form
                    className={style.newItemContainer}
                    onSubmit={(event) => {
                        event.preventDefault();
                        setArray([...itemArray, item])
                        addItem(newItem);
                    }}
                >
                    <input type='text' onChange={(event) => setNewItem(event.target.value)}/>
                    <input type='submit' value='+ Add new' />
                </form>

            </div>
        </div>
    )
}