import { assets } from "../../assets/assets"
import "./AppDownload.css"

function AppDownload() {
    return (
        <>
            <div className="app-download" id="app-download">
                <p>For Better experience Download <br /> FreshBite App</p>
                <div className="app-download-platforms">
                    <img src={assets.play_store} />
                    <img src={assets.app_store} />
                </div>
            </div>
        </>
    )
}

export default AppDownload