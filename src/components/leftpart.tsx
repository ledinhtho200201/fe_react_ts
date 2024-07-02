import eRt from '@/assets/img/logo/eRt.png';
import { TbBrandFacebook } from "react-icons/tb";
import { TfiYoutube } from "react-icons/tfi";
import { GiBirdTwitter } from "react-icons/gi";
import { GiTwister } from "react-icons/gi";
import { ImInstagram } from "react-icons/im";
import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';


interface IProps {
    hideLeftPart: boolean;
    setHideLeftPart: (value: boolean) => void;
}

const LeftPart = (props: IProps) => {
    const [activeTab, setActiveTab] = useState<string>("home");

    useEffect(() => {
        const { hash } = window.location;
        if (hash) {
            const tab = hash.replace('#', "");
            setActiveTab(tab)
            const section = document.querySelector(`${hash}`);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, [])

    const handClickTab = (tab: string, e: React.MouseEvent<HTMLAnchorElement>) => {
        setActiveTab(tab)
        const section = document.querySelector(`#${tab}`);
        if (section) {
            e.preventDefault();
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setTimeout(() => {
                window.location.hash = tab;
            }, 1000)
        }
    }

    return (
        <>
            <div className={props.hideLeftPart ? "arlo_tm_leftpart_wrap" : "arlo_tm_leftpart_wrap opened"}>
                <div className="leftpart_inner">
                    <div className="logo_wrap">
                        <a href="#"><img style={{ width: 100, height: 100, borderRadius: '50%' }} src={eRt} alt="desktop-logo" /></a>
                    </div>
                    <div className="menu_list_wrap">
                        <ul className="anchor_nav">
                            <li>
                                <a href="#home"
                                    className={activeTab === "home" ? 'active' : ""}
                                    onClick={(e) => handClickTab('home', e)}
                                >Home
                                </a>
                            </li>
                            <li>
                                <a href="#about"
                                    className={activeTab === "about" ? 'active' : ""}
                                    onClick={(e) => handClickTab('about', e)}
                                >About
                                </a>
                            </li>
                            <li>
                                <a href="#skill"
                                    className={activeTab === "skill" ? 'active' : ""}
                                    onClick={(e) => handClickTab('skill', e)}
                                >Skills
                                </a>
                            </li>
                            <li>
                                <a href="#project"
                                    className={activeTab === "project" ? 'active' : ""}
                                    onClick={(e) => handClickTab('project', e)}
                                >Projects
                                </a>
                            </li>
                            <li>
                                <a href="#contact"
                                    className={activeTab === "contact" ? 'active' : ""}
                                    onClick={(e) => handClickTab('contact', e)}
                                >Contact
                                </a>
                            </li>
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
                    {!isMobile &&
                        <a className={props.hideLeftPart ? "arlo_tm_resize" : "arlo_tm_resize opened"}
                            href="#"
                            onClick={(e) => {
                                e.preventDefault()
                                props.setHideLeftPart(!props.hideLeftPart)
                            }}
                        >
                            <i className={props.hideLeftPart ? "xcon-angle-left" : "xcon-angle-left opened"}></i>
                        </a>
                    }
                </div>
            </div>
        </>
    )
}

export default LeftPart;