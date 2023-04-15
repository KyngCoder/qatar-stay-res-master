
import { FaFacebook, FaPinterestP, FaTwitter, FaYoutube} from 'react-icons/fa'
import { Link } from 'react-router-dom'


function links(list) {
    const res = list.map( (link, index) => {

        return (
            <li key={index}>
                <p className="hover:text-white cursor-pointer">
                {link}
                </p>
            </li>
        )
    })

        return res
    }

export default function Footer() {

    const images = [ <FaFacebook size={20}/>, <FaPinterestP size={20}/>, <FaTwitter size={20}/>, <FaYoutube size={20}/>]

    const socialIcons = images.map( (image, index) => {

        return (
            <>
                {image}
            </>
        )
    })

    const navLinks = ["Home", "Pricing", "Products", "About Us"]
    const navLinks2 = ["Careers", "Community", "Privacy Policy"]

    const res = links(navLinks)
    const res2 = links(navLinks2)

    return (
        <footer className="text-white py-12 ">
            <div className="container mx-auto flex justify-between flex-col md:flex-row gap-6">
                <div className="flex flex-col justify-between">
                    <img src="src/assets/images/LOGO.png" alt="Manage Logo" width="128px" />

                    <div className="flex space-x-6">
                        {socialIcons}
                    </div>
                

                </div>

                <div>
                    <ul className="space-y-3">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/book">Book Stay</Link></li>
                        <li><Link to="/articles">Articles</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
                <div>
                    <ul className="space-y-3">
                        <li> <Link to='/appartments'>Apartments </Link> </li>
                        <li> <Link to='/signup'>SignUp </Link> </li>
                        <li> <Link to='/villas'>Villas </Link> </li>
                        <li> <Link to='/login'>Login </Link> </li>
                    </ul>
                </div>

                <div className="flex justify-between flex-col">

                    <form action="" className="flex gap-4">

                        
                            <input 
                            className="rounded-3xl outline-none border-none py-2 inline px-4 bg-white text-bright-red"
                            type="email"
                            placeholder="Updates in your inbox"
                            />

                            <button className="btn-primary  ">Go</button>
                        

                    </form>

                    <p className="text-sm text-right">Copyright 2023. All rights reserved</p>

                </div>
            </div>
        </footer>
    )

}