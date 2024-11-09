function Formss(propt:{title: string, requiredd?: boolean,type?: string, onChangee?: (value: string) => void, val?: string})
{
    const { title, onChangee,val, type = "text"} = propt;   
    return(
        <div>
            <div>
                        <label htmlFor="email"
                        className="block text-sm font-medium leading-9 text-gray-900"
                        >  {title}
                        </label>
                    </div>
                    <div>
                        <input 
                        type={type} 
                        id={title}
                        name={title}
                        autoComplete={title}
                        required
                        value={val}
                        onChange={(e) => onChangee && onChangee(e.target.value)}
                        className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 sm:text-sm shadow-sm ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-400 sm-leanding-6 ring-1 ring-inset focus:ring-2 focus-ring-inset transition-all duration-200 ease-in-out"
                        />
                    </div>
                    
        </div>
    )
}

export default Formss;