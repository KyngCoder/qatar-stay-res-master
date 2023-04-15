import {Link} from 'react-router-dom'

export default function BannerCTA() {

    return (
        <div className='cta bg-fixed'>
            <div className="container mx-auto p-6  text-center flex flex-col md:flex-row md:flex  justify-between items-center h-96 md:h-auto">

                <h2 className="max-w-md text-4xl text-white/80 font-bold "
                    >
                    Your greatest <br />
                        <span className="heading-text text-6xl text-white mr-2">experience</span> <br />
                     awaits you.
                </h2>

                <Link  to='/book'>
                    <button className="bg-blue-500/40 py-2 px-6 scale-150 text-white font-semibold text-xl">
                        Book Now
                    </button>
                </Link>

            </div>
        </div>
    )
}