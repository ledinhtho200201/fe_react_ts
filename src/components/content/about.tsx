import rabbitLogo from '@/assets/img/about/rabbit.png'
import rabbitCV from '@/assets/img/about/rabbitCV.pdf'
import { TypeAnimation } from 'react-type-animation';

const About = () => {
    return (
        <div className="arlo_tm_section relative" id="about">
            <div className="arlo_tm_about_wrapper_all">
                <div className="container">
                    <div className="arlo_tm_title_holder">
                        <h3>About Me</h3>
                        <span>Main informations about me</span>
                    </div>
                    <div className="arlo_tm_about_wrap">
                        <div className="author_wrap">
                            <div className="leftbox">
                                <div className="about_image_wrap parallax" data-relative-input="true">
                                    <div className="image layer" data-depth="0.1">
                                        <img src="img/about/550x640.jpg" alt="550x640" />
                                        <div className="inner" data-img-url={rabbitLogo}></div>
                                    </div>
                                    <div className="border layer" data-depth="0.2">
                                        <img src="img/about/550x640.jpg" alt="550x640" />
                                        <div className="inner"></div>
                                    </div>
                                </div>

                            </div>
                            <div className="rightbox">
                                <div className="arlo_tm_mini_title_holder">
                                    <h4>I'm Alan Michaelis and
                                        &nbsp;
                                        <TypeAnimation
                                            sequence={[
                                                // Same substring at the start will only be typed out once, initially
                                                'Freelancer',
                                                2000, // wait 1s before replacing "Mice" with "Hamsters"
                                                'UI/UX Designer',
                                                2000,
                                                'Web Developer',
                                                2000
                                            ]}
                                            wrapper="span"
                                            speed={50}
                                            // style={{ fontSize: '2em', display: 'inline-block' }}
                                            repeat={Infinity}
                                            placeholder={undefined}
                                            onPointerEnterCapture={undefined}
                                            onPointerLeaveCapture={undefined}
                                        />
                                    </h4>
                                </div>
                                <div className="definition">
                                    <p>Xin chào, mình là <strong>Thor Lee</strong> là một lập trình viên website,
                                        cơ mà mình có sở thích không thích code.
                                        <br /><br />
                                        Mình đã từng làm lính vực thương mại điện tử
                                        <br />
                                        Và hiện tại, mình đang dev cho công ty nào đó.
                                    </p>
                                </div>
                                <div className="about_short_contact_wrap">
                                    <ul>
                                        <li>
                                            <span><label>Ngày sinh:</label> 18/10/2001</span>
                                        </li>
                                        <li>
                                            <span><label>Giới tính:</label> Nam</span>
                                        </li>
                                        <li>
                                            <span><label>Tốt nghiệp:</label> Đại học Thủy Lợi</span>
                                        </li>
                                        <li>
                                            <span><label>Chuyên ngành:</label> Hệ thống thông tin</span>
                                        </li>
                                        <li>
                                            <span><label>Youtube:</label> <a href="https://www.youtube.com">mymail&#64;gmail.com</a></span>
                                        </li>
                                        <li>
                                            <span><label>Youtube:</label> <a href="https://www.youtube.com" target='_blank'>youtube</a></span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="buttons_wrap">
                                    <ul>
                                        <li>
                                            <a href={rabbitCV} download><span>Download CV</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;