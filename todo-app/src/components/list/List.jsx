import { useState } from 'react'
import style from './List.module.scss'

export function List() {

    const [itemArray, setArray] = useState([])
    const [newItem, addItem] = useState('')

    const [progressArray, setProgressArray] = useState([])

    const [doneArray, setDoneArray] = useState([])


    const removeItem = (index, array, arrayNumber) => {
        const updatedArray = array.filter((_, i) => i !== index);

        if (arrayNumber == 1) {
            setArray(updatedArray);
        }
        if (arrayNumber == 2) {
            setProgressArray(updatedArray);
        }
        if (arrayNumber == 3) {
            setDoneArray(updatedArray);
        }
    }

    const moveItem = (fromArray, toArray, index, setArrayFrom, setArrayTo) => {
        const movedItem = fromArray.filter((_, i) => i == index);
        setArrayTo([...toArray, movedItem])
        const updatedArray = fromArray.filter((_, i) => i !== index);
        setArrayFrom(updatedArray)
    }

    const deleteAll = () => {
        setArray([])
        setProgressArray([])
        setDoneArray([])
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
                                    <div key={index} className={style.item}>
                                        <div className={style.itemTitle}>{item}</div>
                                        <figure className={style.buttonsContainer}>
                                            <div onClick={() => { removeItem(index, itemArray, 1) }} className={style.listButton}>➖</div>
                                            <div onClick={() => { moveItem(itemArray, progressArray, index, setArray, setProgressArray) }} className={style.listButton}>➡️</div>
                                        </figure>
                                    </div>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <form
                    className={style.newItemContainer}
                    onSubmit={(event) => {
                        if (event.target.inputField.value.length == 0) {
                            event.preventDefault();
                            return
                        } else {
                            event.preventDefault();
                            setArray([...itemArray, newItem]);
                            addItem('');
                        }

                    }}
                >
                    <input onChange={(event) => { addItem(event.target.value) }} value={newItem} className={style.newItem} name='inputField' />
                    <input type='submit' value='Add new' className={style.submitButton} />
                    <input type='button' onClick={() => deleteAll()} value='Delete all' className={style.deleteAll} />
                </form>

            </div>

            <div className={style.container}>
                <h1>In Progress</h1>
                <div className={style.itemsContainer}>
                    <table>
                        <tbody>
                            {progressArray.map((item, index) => {
                                return (
                                    <div key={index} className={style.item}>
                                        <div className={style.itemTitle}>{item}</div>
                                        <figure className={style.buttonsContainer}>
                                            <div onClick={() => { moveItem(progressArray, itemArray, index, setProgressArray, setArray) }} className={style.listButton}>⬅️</div>
                                            <div onClick={() => { removeItem(index, progressArray, 2) }} className={style.listButton}>➖</div>
                                            <div onClick={() => { moveItem(progressArray, doneArray, index, setProgressArray, setDoneArray) }} className={style.listButton}>➡️</div>
                                        </figure>
                                    </div>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className={style.container}>
                <h1>Done</h1>
                <div className={style.itemsContainer}>
                    <table>
                        <tbody>
                            {doneArray.map((item, index) => {
                                return (
                                    <div key={index} className={style.item}>
                                        <div className={style.itemTitle}>{item}</div>
                                        <figure className={style.buttonsContainer}>
                                            <div onClick={() => { moveItem(doneArray, progressArray, index, setDoneArray, setProgressArray) }} className={style.listButton}>⬅️</div>
                                            <div onClick={() => { removeItem(index, doneArray, 3) }} className={style.listButton}>➖</div>
                                        </figure>
                                    </div>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}