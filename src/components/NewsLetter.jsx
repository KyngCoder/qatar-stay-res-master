

export default function NewsLetter() {

    return (

        <div className="NewsLetter p-12">
            
            <div 
                className="w-3/5 mx-auto text-center p-12 bg-purple-100  rounded-2xl shadow-3xl drop-shadow-xl"
            >
                <h2 className="text-3xl font-semibold">Get The Latest <span className="text-blue-500">Hotel Book</span> Update</h2>
                <p >We'll Send you some updates and special offers</p>

                <input type="text" className="py-2 px-4 mt-4 rounded border bg-slate-100"  placeholder="Enter your email address"/>
                <button className="bg-blue-500 py-2 px-4 border uppercase text-white font-bold hover:bg-green-700 transition">
                    Get Updates
                </button>

                <p>Become a Part of our Ever-Growing Community.</p>
            </div>

        </div>
    )
}