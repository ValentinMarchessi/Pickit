import styles from "./UserArea.module.scss";
import avatarFallback from "../../Assets/images/avatarFallback.png";
import Avatar from "../Avatar/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { Dropdown, Modal } from "../";
import { useState } from "react";
import { Link } from "react-router-dom";
import { logOut } from "../../Redux/Reducers/User";
import Login from "../../Pages/Auth/Login";

export default function UserArea() {
    const dispatch = useDispatch()
    const user = useSelector((store: RootState) => store.user.user);
    const [logoutModal, setLogoutModal] = useState(false);
    const [authModal, setAuthModal] = useState(false);

	const userArea = (
		<div className={styles.container}>
			<h1 id={styles.username}>{user ? user.name : "Guest"}</h1>
			<Avatar src={user?.avatar} id={styles.avatar} />
		</div>
    );
    
    function handleLogout() {
        dispatch(logOut());
        setLogoutModal(false);
    }

	return user ? (
		<Dropdown element={userArea} className={styles.dropdown}>
			<Link to="settings">
				<span className="material-icons">settings</span>
				Settings
			</Link>
			<Link to="history">
				<span className="material-icons">history</span>
				History
			</Link>
			<button id={styles.logout} onClick={() => setLogoutModal(true)}>
				<span style={{ color: "rgb(255, 78, 78)" }} className="material-icons">
					logout
				</span>
				Log Out
            </button>
            <Modal visible={logoutModal} backdrop>
                <h1>Are you sure?</h1>
                <button onClick={handleLogout}>Yes</button>
                <button onClick={() => setLogoutModal(false)}>No</button>
            </Modal>
		</Dropdown>
    ) : (
            <>
                <div id={styles.guestArea} onClick={() => setAuthModal(true)}>
                    {userArea}
                </div>
                <Modal visible={authModal} backdrop onBackdropClick={()=>setAuthModal(false)}>
                    <Login/>
                </Modal>
            </>
    );
}
