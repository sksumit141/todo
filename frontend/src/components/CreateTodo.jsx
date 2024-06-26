
export function CreateTodo(){

    const [title,setTitle] = useState("");
    const[description, setDescription] = useState("");

    return <div>
    <input id="title"style={{
        padding: 10,
        margin: 10}} type="text" placeholder="title" onChange={function(e){
            const value = e.target.value;
            setTitle(e.target.value);}}/><br />

    <input id ="description" style={{
        padding:10,
        margin:10
    }} type="text" placeholder="description" onChange={function(e)
    {
        const value = e.target.value;
        setDescription(e.target.value);
    }} /><br />

    <button style={{
        margin:10,
        padding:10
    }} onclick={()=>{
        fetch(" http://localhost:5175/",{
            method: "POST",
            body: JSON.stringify({
                title: title,
                description: description
            }),
            headers: {
                "contentType": "application/json"
            }
        })
        .then(async function(res){
            const json = await res.json();
            alert("Todo added");
        })
    }}>Add a Todo</button>
    </div>
}