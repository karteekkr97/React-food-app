const Contact=()=>{
    return(
        <div>
            <h1 className="m-2 p-2 font-bold text-3xl">Contact Us</h1>
            <form>
                <input type="text" className="border border-black p-2 m-2" placeholder="Name"/>
                <input type="text" className="border border-black p-2 m-2" placeholder="Message"/>
                <button className="border border-black p-2 m-2 bg-gray-200">Submit</button>
            </form>
        </div>
    )
}

export default Contact;