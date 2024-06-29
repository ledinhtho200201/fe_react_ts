import ProgressBar from "@ramonak/react-progress-bar";

const Skills = () => {
    return (
        <div className="arlo_tm_section" id="skills">
            <div className="arlo_tm_skills_wrap">
                <div className="container">
                    <div className="inner_wrap">
                        <div className="leftbox">
                            <div className="arlo_tm_mini_title_holder">
                                <h4>Kỹ năng Backend</h4>
                            </div>
                            <ul>
                                <li>Ngôn ngữ lập trình: JavaScript</li>
                                <li>Viết Restful APIs</li>
                                <li>Framework: Express, Nest.JS</li>
                                <li>Database: MySql, MongoDB</li>
                            </ul>
                        </div>
                        <div className="rightbox">
                            <div className="progress_bar_wrap_total">
                                <div className="arlo_tm_progress_wrap" data-size="small" data-round="c" data-strip="off">
                                    <div className="arlo_tm_progress" data-value="95" data-color="#000">
                                        <span>
                                            <span className="label">Nest.JS</span>
                                            <span className="number">80%</span>
                                        </span>
                                        <div className="arlo_tm_bar_bg">
                                            <ProgressBar
                                                completed={80}
                                                bgColor="#333"
                                                height="8px"
                                                isLabelVisible={false}
                                            />
                                        </div>
                                    </div>
                                    <div className="arlo_tm_progress" data-value="95" data-color="#000">
                                        <span>
                                            <span className="label">Database MySql/ MongoDB</span>
                                            <span className="number">70%</span>
                                        </span>
                                        <div className="arlo_tm_bar_bg">
                                            <ProgressBar
                                                completed={70}
                                                bgColor="#333"
                                                height="8px"
                                                isLabelVisible={false}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="arlo_tm_skills_wrap">
                <div className="container">
                    <div className="inner_wrap">
                        <div className="leftbox">
                            <div className="arlo_tm_mini_title_holder">
                                <h4>Kỹ năng Frontend</h4>
                            </div>
                            <ul>
                                <li>Cắt/ ghép template Website Responsive</li>
                                <li>Framework/Library: Bootstrap/ React.JS</li>
                            </ul>
                        </div>
                        <div className="rightbox">
                            <div className="progress_bar_wrap_total">
                                <div className="arlo_tm_progress_wrap" data-size="small" data-round="c" data-strip="off">
                                    <div className="arlo_tm_progress" data-value="85" data-color="#000">
                                        <span>
                                            <span className="label">HTML/CSS/JavaScript</span>
                                            <span className="number">85%</span>
                                        </span>
                                        <div className="arlo_tm_bar_bg">
                                            <ProgressBar
                                                completed={85}
                                                bgColor="#333"
                                                height="8px"
                                                isLabelVisible={false}
                                            />
                                        </div>
                                    </div>
                                    <div className="arlo_tm_progress" data-value="95" data-color="#000">
                                        <span>
                                            <span className="label">React.JS(Typescript)</span>
                                            <span className="number">75%</span>
                                        </span>
                                        <div className="arlo_tm_bar_bg">
                                            <ProgressBar
                                                completed={75}
                                                bgColor="#333"
                                                height="8px"
                                                isLabelVisible={false}
                                            />
                                        </div>
                                    </div>
                                    <div className="arlo_tm_progress" data-value="95" data-color="#000">
                                        <span>
                                            <span className="label">Design UI/UX</span>
                                            <span className="number">65%</span>
                                        </span>
                                        <div className="arlo_tm_bar_bg">
                                            <ProgressBar
                                                completed={65}
                                                bgColor="#333"
                                                height="8px"
                                                isLabelVisible={false}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;