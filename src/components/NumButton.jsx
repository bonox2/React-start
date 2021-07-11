import useNumber from './../hooks/useNumber';


export default function NumButton() {
    const [num, setNum] = useNumber()
    return (
        <button onClick={() => setNum(num + 1)}>Number +1</button>
    )
}
