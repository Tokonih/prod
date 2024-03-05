import { Link } from "react-router-dom"
import PublicHeader from "../../components/PublicHeader"
import UserNav from "../../components/UserNav"
import { useEffect, useState } from "react";
import { BASEURL } from "../../common/config";
import axios from "axios";
export default function UserChat() {
    const userDetails = JSON.parse(localStorage.getItem("user-details"));
    const token = localStorage.getItem("token");
    const [messages, setMessages] = useState([]);
    const [chat, setChat] = useState("");
    const [refresh, setRefresh] = useState(0);
    const [selectedUser, setSelectedUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const getMessages = async () => {
            let api_url = BASEURL + "/messages/user/" + userDetails._id;
            const headers = { Authorization: `Bearer ${token}` };
            try {
                const res = await axios.get(api_url, { headers });
                console.log(res.data.data);
                setMessages(res.data.data);
            } catch (err) {
                console.log(err);
            }
            setIsLoading(false);
        };
        getMessages();
    }, refresh);


    const sendMessage = async (event) => {
        event.preventDefault();
        alert("hello")
        let userData = {
            sender_id: "659ad6af441aff27ab0701e0",
            receiver_id:userDetails._id ,
            text: chat
        }
        let api_url = BASEURL + "/message"
        const headers = { Authorization: `Bearer ${token}` };
        await axios.post(api_url, userData, { headers });
        alert("Message Sent")
        setChat("")
        setRefresh(refresh + 1)
        setRefresh(refresh + 1)
    }



    return (
        <div>
            {/* <!-- HEADER START --> */}
            <PublicHeader />
            {/* <!-- HEADER END --> */}
            {/* <!-- CONTENT START --> */}
            <div class="page-content">

                {/* <!-- OUR BLOG START --> */}
                <div class="section-full p-t120  p-b90 site-bg-white">


                    <div class="container">
                        <div class="row">

                            <div class="col-xl-3 col-lg-4 col-md-12 rightSidebar m-b30">

                                <UserNav />

                            </div>

                            <div class="col-xl-9 col-lg-8 col-md-12 m-b30">
                                <div class="twm-right-section-panel candidate-save-job site-bg-gray">
                                    {/* <!--Filter Short By--> */}
                                    <div class="twm-right-section-panel site-bg-gray">
                                        <div class="wt-admin-dashboard-msg-2  twm-dashboard-style-2">
                                            {/* <!--Left Msg section--> */}
                                            <div class="wt-dashboard-msg-user-list">
                                                <div class="user-msg-list-btn-outer">
                                                    <button class="user-msg-list-btn-close">Close</button>
                                                    <button class="user-msg-list-btn-open">User Message</button>
                                                </div>
                                                {/* <!-- Search Section Start--> */}
                                                <div class="wt-dashboard-msg-search">
                                                    <div class="input-group">
                                                        <input class="form-control" placeholder="Search Messages" type="text" />
                                                        <button class="btn" type="button"><i class="fa fa-search"></i></button>
                                                    </div>
                                                </div>
                                                {/* <!-- Search Section End--> */}

                                                {/* <!-- Search Section End--> */}
                                                <div class="msg-find-list">
                                                    <select class="wt-select-box bs-select-hidden">
                                                        <option>Recent Chats</option>
                                                        <option>Short by Time</option>
                                                        <option>Short by Unread</option>
                                                    </select>
                                                </div>
                                                {/* <!-- Search Section End--> */}

                                                {/* <!-- user msg list start--> */}
                                                <div id="msg-list-wrap" class="wt-dashboard-msg-search-list scrollbar-macosx">

                                                    <div class="wt-dashboard-msg-search-list-wrap">
                                                        <a href="javascript:;" class="msg-user-info clearfix">
                                                            <div class="msg-user-timing">Thu</div>
                                                            <div class="msg-user-info-pic"><img src="images/user-avtar/pic4.jpg" alt="" /></div>
                                                            <div class="msg-user-info-text">
                                                                <div class="msg-user-name">Randall Henderson</div>
                                                                <div class="msg-user-discription">All created by our Global</div>
                                                            </div>
                                                        </a>
                                                    </div>

                                                    <div class="wt-dashboard-msg-search-list-wrap">
                                                        <a href="javascript:;" class="msg-user-info clearfix">
                                                            <div class="msg-user-timing">2 hours ago</div>
                                                            <div class="msg-user-info-pic"><img src="images/user-avtar/pic1.jpg" alt="" /></div>
                                                            <div class="msg-user-info-text">
                                                                <div class="msg-user-name">Rustin Duza</div>
                                                                <div class="msg-user-discription">All created by our Global</div>
                                                            </div>
                                                        </a>
                                                    </div>

                                                    <div class="wt-dashboard-msg-search-list-wrap">
                                                        <a href="javascript:;" class="msg-user-info clearfix">
                                                            <div class="msg-user-timing">4 hours ago</div>
                                                            <div class="msg-user-info-pic"><img src="images/user-avtar/pic2.jpg" alt="" /></div>
                                                            <div class="msg-user-info-text">
                                                                <div class="msg-user-name">Peter Hawkins</div>
                                                                <div class="msg-user-discription">All created by our Global</div>
                                                            </div>
                                                        </a>
                                                    </div>





                                                </div>
                                                {/* <!-- user msg list End--> */}

                                            </div>

                                            {/* <!--Right Msg section--> */}
                                            <div class="wt-dashboard-msg-box">
                                                <div class="single-msg-user-name-box">
                                                    <div class="single-msg-short-discription">
                                                        <h4 class="single-msg-user-name">Randall Henderson </h4>
                                                        IT Contractor
                                                    </div>
                                                    <a href="#" class="message-action"><i class="far fa-trash-alt"></i> Delete Conversation</a>
                                                </div>
                                                <div id="msg-chat-wrap" class="single-user-msg-conversation scrollbar-macosx">

                                                    {messages.map((data) => {

                                                        return (<>
                                                            {data.sender_id === userDetails._id ? 
                                                            <div class="single-user-comment-wrap sigle-user-reply">
                                                                <div class="row justify-content-end">
                                                                    <div class="col-xl-9 col-lg-12">
                                                                        <div class="single-user-comment-block clearfix">
                                                                            <div class="single-user-com-pic"><img src="images/user-avtar/pic1.jpg" alt="" /></div>
                                                                            <div class="single-user-com-text">{data.text} <br /> <span className="text-success">{data.receiver_id.fullName}</span></div>
                                                                            <div class="single-user-msg-time">12:37 PM</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div> : <div class="single-user-comment-wrap">
                                                                <div class="row">
                                                                    <div class="col-xl-9 col-lg-12">
                                                                        <div class="single-user-comment-block clearfix">
                                                                            <div class="single-user-com-pic"><img src="images/user-avtar/pic4.jpg" alt="" /></div>
                                                                            <div class="single-user-com-text">{data.text} <br /> <span className="text-warning">{data.sender_id.fullName}</span> </div>
                                                                            <div class="single-user-msg-time">12:13 PM</div>
                                                                        </div>
                                                                    </div>

                                                                </div>

                                                            </div>}
                                                        </>)
                                                    })}

                                                    {/* <div class="single-user-comment-wrap">
                                                        <div class="row">
                                                            <div class="col-xl-9 col-lg-12">
                                                                <div class="single-user-comment-block clearfix">
                                                                    <div class="single-user-com-pic"><img src="images/user-avtar/pic4.jpg" alt="" /></div>
                                                                    <div class="single-user-com-text">Breaking the endless cycle of meaningless text message conversations starts with only talking to someone who offers interesting topics opinions.</div>
                                                                    <div class="single-user-msg-time">12:13 PM</div>
                                                                </div>
                                                            </div>

                                                        </div>

                                                    </div>

                                                    <div class="single-user-comment-wrap sigle-user-reply">
                                                        <div class="row justify-content-end">
                                                            <div class="col-xl-9 col-lg-12">
                                                                <div class="single-user-comment-block clearfix">
                                                                    <div class="single-user-com-pic"><img src="images/user-avtar/pic1.jpg" alt="" /></div>
                                                                    <div class="single-user-com-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</div>
                                                                    <div class="single-user-msg-time">12:37 PM</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div> */}


                                                </div>
                                                <div class="single-msg-reply-comment">
                                                    <div class="input-group">
                                                        <form onSubmit={sendMessage}>
                                                            <textarea class="form-control" placeholder="Type a message here" onChange={(e) => setChat(e.target.value)}
                                                                value={chat}></textarea>
                                                            <button class="btn" type="submit"><i class="fa fa-paper-plane"></i></button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>




                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* <!-- OUR BLOG END --> */}



            </div>
            {/* <!-- CONTENT END --> */}
        </div>)
}