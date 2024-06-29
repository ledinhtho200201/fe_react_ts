import eRt from '@/assets/img/logo/eRt.png';
import { TbBrandFacebook } from "react-icons/tb";
import { TfiYoutube } from "react-icons/tfi";
import { GiBirdTwitter } from "react-icons/gi";
import { GiTwister } from "react-icons/gi";
import { ImInstagram } from "react-icons/im";



const LeftPart = () => {
    return (
        <>
            <div className="arlo_tm_leftpart_wrap">
                <div className="leftpart_inner">
                    <div className="logo_wrap">
                        <a href="#"><img style={{ width: 100, height: 100, borderRadius: '50%' }} src={eRt} alt="desktop-logo" /></a>
                    </div>
                    <div className="menu_list_wrap">
                        <ul className="anchor_nav">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#skill">Skills</a></li>
                            <li><a href="#project">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="leftpart_bottom">
                        <div className="social_wrap">
                            <ul>
                                <li><a href="#">
                                    <TbBrandFacebook />
                                </a></li>
                                <li><a href="#">
                                    <TfiYoutube />
                                </a></li>
                                <li><a href="#">
                                    <GiBirdTwitter />
                                </a></li>
                                <li><a href="#">
                                    <GiTwister />
                                </a></li>
                                <li><a href="#">
                                    <ImInstagram />
                                </a></li>
                            </ul>
                        </div>
                    </div>
                    <a className="arlo_tm_resize" href="#"><i className="xcon-angle-left"></i></a>
                </div>
            </div>
        </>
    )
}

export default LeftPart;