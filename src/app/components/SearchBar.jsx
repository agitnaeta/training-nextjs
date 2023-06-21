export default function SearchBar({title}){
    return (
        <div className="p-2">
            <label htmlFor="">{title}</label>
            <input 
            name="searchbar" 
            className="form-control rounded block" 
            placeholder="Masukan nama musik"
            type="text"/>
        </div>
    )
}