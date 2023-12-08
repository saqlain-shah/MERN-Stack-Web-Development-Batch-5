import './MyFirstComp.css'
import MySecondComponent from './MySecondComponent'

export default function MyFirstComp() {
    const parentText = "this is from parent"
    return (
        <>
            <div className='div1' style={{ backgroundColor: 'gray' }} >myFirstComp</div>
            <MySecondComponent data={parentText} />
        </>
    )
}

