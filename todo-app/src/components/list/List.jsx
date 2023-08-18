import { useState } from 'react'
import style from './List.module.scss'

export function List() {

    const [itemArray, setArray] = useState([])
    const [newItem, addItem] = useState('')

    const removeItem = (index) => {
        const updatedArray = itemArray.filter((_, i) => i !== index);
        setArray(updatedArray);
    };

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
                        setArray([...itemArray, newItem]);
                        addItem('');
                    }}
                >
                    <input onChange={(event) => { addItem(event.target.value) }} value={newItem} />
                    <input type='submit' value='+ Add new' />
                </form>

            </div>
        </div>
    )
}