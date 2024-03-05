import { Navigate } from "react-router-dom"

export default function Logout_Pop() {

    const logoutProfile = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("user-details");
        localStorage.removeItem("com-details");
        window.location.href="/"
    }

    return (
        <div class="modal fade twm-model-popup" id="logout-dash-profile" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <h4 class="modal-title">Do you want to Logout your profile?</h4>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="site-button" data-bs-dismiss="modal">No</button>
                        <button type="button" class="site-button outline-primary"  onClick={logoutProfile}>Yes</button>
                    </div>
                </div>
            </div>
        </div>)
}