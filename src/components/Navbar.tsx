import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="navbar bg-base-100">
            {/* navbar title */}
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Minecraft Shop</a>
            </div>

            {/* navbar links */}
            <div className="navbar-center">
                <ul className="menu menu-horizontal p-0 gap-x-2">
                    <li><Link to="/">    Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                </ul>
            </div>

            <div className="flex-none gap-x-2">

                {/*shopping cart*/}
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <div className="w-10">
                                <img src="/img/site/cart_empty.png" />
                            </div>
                            <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </label>
                    <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div className="card-body">
                            <span className="font-bold text-lg">8 Items</span>
                            <span className="text-info">Subtotal: $999</span>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block">View cart</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/*user tab*/}
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="/img/site/user_unregistered.webp" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
