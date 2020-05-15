import React from 'react';
import { MailOutlined, GithubOutlined} from '@ant-design/icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

import Images from "../../data/images";

import './intro.css';

const Intro = () => (
    <Row id="intro">
        <Col>
            <div id="my-info">
                <h1 id="my-name">Daniel Mossie</h1>
                <h3 id="my-job">Software Developer</h3>
                <h5 id="my-home">Victoria, BC</h5>
                <a href="mailto:mail@danielmossie.com" target="__blank">
                    <MailOutlined
                        className="social-icon"
                    />
                </a>
                <a href="https://github.com/dmossie" target="__blank">
                    <GithubOutlined
                        className="social-icon"
                    />
                </a>
            </div>
        </Col>
        <Col>
            <Image
                id="me"
                rounded
                src={ Images["me.jpg"] }
            />
        </Col>
    </Row>
);

export default Intro;