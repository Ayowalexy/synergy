import React from 'react';
import Navbar from '../landingPage/navbar';
import { AboutStyles } from '../../styles/pages/aboutUsstyles';
import Wallet from '../../assets/svgs/others/wallet_.svg';
import Location from '../../assets/svgs/others/location_.svg';
import Contact from '../../assets/svgs/others/contact.svg';
import Benefits from '../../assets/svgs/others/benefits.svg';
import Logo from '../../assets/svgs/others/logo_.svg';
import M_logo from '../../assets/svgs/others/M_logo.svg';
import Twitter from '../../assets/svgs/others/twitter.svg';
import Highlight from '../../assets/svgs/others/highlight.svg';
import H_2 from '../../assets/svgs/others/H_2.svg';
import Facebook from '../../assets/svgs/others/facebook.svg';
import LinkedIn from '../../assets/svgs/others/linkenin.svg';
import Instagram from '../../assets/svgs/others/instagram.svg';
import Imaage1 from '../../assets/pngs/others/1.png';
import Imaage2 from '../../assets/pngs/others/2.png';
import Imaage3 from '../../assets/pngs/others/3.png';
import Imaage4 from '../../assets/pngs/others/4.png';
import Imaage5 from '../../assets/pngs/others/5.png';
import Imaage6 from '../../assets/pngs/others/6.png';
import Imaage7 from '../../assets/pngs/others/7.png';
import Imaage8 from '../../assets/pngs/others/8.png';
import Imaage0 from '../../assets/pngs/others/0.png';
import { useMediaQuery } from '@mui/material';


const AboutUs = () => {
    const matches = useMediaQuery("(max-width:600px)");

    return (
        <>
            <Navbar />
            <AboutStyles>

                {
                    matches && (
                        <>
                            <div className='_container'>
                                <div className='_our_mission'>Our Mission</div>
                                <div className='_sub_text'>To Democratize Opportunity for Youth <br />
                                    to achieve their full potential</div>
                            </div>
                            <div className='_our_story'>
                                <div className='_our_mission'>Our Story</div>
                                <div className='_span'>
                                    Synergy is an African technology startup dedicated to helping young Nigerians navigate life and achieve their full potential in the digital era. Our trusted community provides our young people with the vital resources, opportunities and connections to thrive and win.
                                </div>
                                <div className='_span'>
                                    At the heart of our mission is a belief that all innovation should stand upon the Youth. Keeping true to our convictions, we are revolutionizing NYSC for young graduates by making it easier, better, exciting and more rewarding.
                                     <span style={{ color: 'rgba(51, 202, 95, 1)' }}>Make the most of your Youth Service Adventure!</span>
                                </div>
                            </div>
                            <div className='_inspiration text_'>
                                <div>
                                    “Our aspiration is to deliver life transforming opportunities, valuable skills and connectivity to 30 million young Nigerians by 2030”
                                </div>
                                <div>
                                    Alexander, Synergy NG
                                </div>
                            </div>
                            <div className='_team'>
                                <div className='_team_box'>
                                    <div className='_our_team' style={{ justifyContent: 'center' }}>
                                        <div className='_our_mission'>
                                            Our Rockstar Team
                                        </div>
                                        <div>
                                            <img src={H_2} alt='hightlight' />
                                        </div>
                                    </div>
                                    <div className='_box'>
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                width: '80%',
                                                flexWrap: 'wrap'
                                            }}
                                        >
                                            {
                                                [
                                                    {
                                                        name: 'Shalom Mathew',
                                                        title: 'Frontend Developer',
                                                        img: Imaage1
                                                    },
                                                    {
                                                        name: 'Tosin Joshua',
                                                        title: 'Product Designer',
                                                        img: Imaage2
                                                    },
                                                    {
                                                        name: 'Johnie Obiechina',
                                                        title: 'Head of Partnerships',
                                                        img: Imaage3
                                                    },
                                                    {
                                                        name: 'Segun Babalola',
                                                        title: 'Mobile Devloper',
                                                        img: Imaage3
                                                    },
                                                    {
                                                        name: 'Valerie Ohams',
                                                        title: 'Head, People & Culture',
                                                        img: Imaage4
                                                    },
                                                    {
                                                        name: 'Jane Doe',
                                                        title: 'Product Designer',
                                                        img: Imaage1
                                                    },
                                                    {
                                                        name: 'John Doe',
                                                        title: 'Product Designer',
                                                        img: Imaage3
                                                    },
                                                    {
                                                        name: 'Jane Doe',
                                                        title: 'Product Designer',
                                                        img: Imaage3
                                                    },
                                                    {
                                                        name: 'Prince Abdul-Fatah',
                                                        title: 'Co-Founder & CFO',
                                                        img: Imaage3
                                                    },
                                                    {
                                                        name: 'Daniel Ishola',
                                                        title: 'Backend Engineer',
                                                        img: Imaage1
                                                    },
                                                    {
                                                        name: 'Olalode Kolape',
                                                        title: 'Customer Experience',
                                                        img: Imaage3
                                                    },
                                                    {
                                                        name: 'Alexander',
                                                        title: 'Founder & CEO',
                                                        img: Imaage3
                                                    },
                                                ].map((element, idx) => (
                                                    <div className='_element' key={idx}>
                                                        <div className='_img'>
                                                            <img src={element.img} alt={element.title} />
                                                        </div>
                                                        <div className='_name'>{element.name}</div>
                                                        <div className='_title'>{element.title}</div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='_sponsor'>
                                <div className='_our_sponsor'>Our Friends & Sponsors</div>
                                <div className='_sponsor_container'>
                                    {
                                        [Imaage5, Imaage6, Imaage7, Imaage8, Imaage0]
                                            .map((element, idx) => (
                                                <img
                                                    key={idx} src={element} className={`_sponsor_box`} />

                                            ))
                                    }
                                </div>
                            </div>
                            <div className='_socials'>
                                <div className='_socials_icons'>
                                    {
                                        [
                                            {
                                                number: "3k+",
                                                icons: Contact,
                                                text: 'Members'
                                            },
                                            {
                                                number: "20k+",
                                                icons: Location,
                                                text: 'States'
                                            },
                                            {
                                                number: "N5m",
                                                icons: Wallet,
                                                text: 'In Benefits'
                                            },
                                            {
                                                number: "12k+",
                                                icons: Benefits,
                                                text: 'Opportunities'
                                            },

                                        ].map((element, idx) => (
                                            <div className='_flex_' key={idx}>
                                                <div >
                                                    <img src={element.icons} alt={element.text} />
                                                </div>
                                                <div className='_flex'>
                                                    <div className='_number'>{element.number}</div>
                                                    <div className='_title'>{element.text}</div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>

                            </div>
                            <div className='_about_section'>
                                <img src={M_logo} alt='logo' />
                                <div className='_our_mission' style={{ fontSize: 16 }}>Get Exclusive Opportunities </div>
                                <div>
                                    <input type='text' placeholder='Enter your Email' />
                                    <button>Let&quot;s Go</button>
                                </div>
                                <div className='about_footer'>
                                    <div>
                                        {
                                            [
                                                "Company",
                                                'About',
                                                'Careers',
                                                'Legal'
                                            ].map((element, idx) => (
                                                <div className={`_links ${idx == 0 && '_header'}`} key={idx}>{element}</div>
                                            ))
                                        }
                                    </div>
                                    <div>
                                        {
                                            [
                                                "Resources",
                                                'Blog',
                                                'Nysc Explorer',
                                                'Partnership'
                                            ].map((element, idx) => (
                                                <div className={`_links ${idx == 0 && '_header'}`} key={idx}>{element}</div>
                                            ))
                                        }
                                    </div>
                                    <div>
                                        {
                                            [
                                                "Get Support",
                                                'Help Center',
                                                'FAQ',
                                                'Contact us'
                                            ].map((element, idx) => (
                                                <div className={`_links ${idx == 0 && '_header'}`} key={idx}>{element}</div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className='_social_media'>
                                    <img src={Twitter} alt='twitter_icon' />
                                    <img src={Facebook} alt='twitter_icon' />
                                    <img src={Instagram} alt='twitter_icon' />
                                    <img src={LinkedIn} alt='twitter_icon' />
                                </div>
                                <div className='_year'>
                                    © 2022 Synergy NG, Inc.
                                </div>
                            </div>


                        </>
                    )
                }

                {
                    !matches && (
                        <>
                            <div className='container'>
                                <div className='our_mission'>Our Mission</div>
                                <div className='sub_text'>To Democratize Opportunity for Youth <br />
                                    to achieve their full potential</div>
                            </div>
                            <div className='our_story'>
                                <div className='our_mission'>Our Story</div>
                                <div className='span'>
                                    Synergy is an African technology startup dedicated to helping young Nigerians navigate life and achieve their full potential in the digital era. Our trusted community provides our young people with the vital resources, opportunities and connections to thrive and win.
                                </div>
                                <div className='span'>
                                    At the heart of our mission is a belief that all innovation should stand upon the Youth. Keeping true to our convictions, we are revolutionizing NYSC for young graduates by making it easier, better, exciting and more rewarding.
                                    <span> Make the most of your Youth Service Adventure!</span>
                                </div>
                            </div>
                            <div className='inspiration text_'>
                                <div>
                                    “Our aspiration is to deliver life transforming opportunities, valuable skills and connectivity to 30 million young Nigerians by 2030”
                                </div>
                                <div>
                                    Alexander, Synergy NG
                                </div>
                            </div>
                            <div className='team'>
                                <div className='team_box'>
                                    <div className='our_team' style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', padding: '20px 0px' }}>
                                        <div>
                                            Our Rockstar Team
                                        </div>
                                        <div>
                                            <img src={Highlight} alt='hightlight' />
                                        </div>
                                    </div>
                                    <div className='box'>
                                        {
                                            [
                                                {
                                                    name: 'Shalom Mathew',
                                                    title: 'Frontend Developer',
                                                    img: Imaage1
                                                },
                                                {
                                                    name: 'Tosin Joshua',
                                                    title: 'Product Designer',
                                                    img: Imaage2
                                                },
                                                {
                                                    name: 'Johnie Obiechina',
                                                    title: 'Head of Partnerships',
                                                    img: Imaage3
                                                },
                                                {
                                                    name: 'Segun Babalola',
                                                    title: 'Mobile Devloper',
                                                    img: Imaage3
                                                },
                                                {
                                                    name: 'Valerie Ohams',
                                                    title: 'Head, People & Culture',
                                                    img: Imaage4
                                                },
                                                {
                                                    name: 'Jane Doe',
                                                    title: 'Product Designer',
                                                    img: Imaage1
                                                },
                                                {
                                                    name: 'John Doe',
                                                    title: 'Product Designer',
                                                    img: Imaage3
                                                },
                                                {
                                                    name: 'Jane Doe',
                                                    title: 'Product Designer',
                                                    img: Imaage3
                                                },
                                                {
                                                    name: 'Prince Abdul-Fatah',
                                                    title: 'Co-Founder & CFO',
                                                    img: Imaage3
                                                },
                                                {
                                                    name: 'Daniel Ishola',
                                                    title: 'Backend Engineer',
                                                    img: Imaage1
                                                },
                                                {
                                                    name: 'Olalode Kolape',
                                                    title: 'Customer Experience',
                                                    img: Imaage3
                                                },
                                                {
                                                    name: 'Alexander',
                                                    title: 'Founder & CEO',
                                                    img: Imaage3
                                                },
                                            ].map((element, idx) => (
                                                <div className='element' key={idx}>
                                                    <div className='img'>
                                                        <img src={element.img} alt={element.title} />
                                                    </div>
                                                    <div className='name'>{element.name}</div>
                                                    <div className='title'>{element.title}</div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className='sponsor'>
                                <div className='our_sponsor'>Our Friends & Sponsors</div>
                                <div className='sponsor_container'>
                                    {
                                        [Imaage5, Imaage6, Imaage7, Imaage8, Imaage0]
                                            .map((element, idx) => (
                                                <img
                                                    key={idx} src={element} className={`sponsor_box ${idx % 2 == 0 ? 'self' : ''}`} />

                                            ))
                                    }
                                </div>
                            </div>
                            <div className='socials'>
                                <div className='socials_icons'>
                                    {
                                        [
                                            {
                                                number: "3k+",
                                                icons: Contact,
                                                text: 'Members'
                                            },
                                            {
                                                number: "3k+",
                                                icons: Location,
                                                text: 'States'
                                            },
                                            {
                                                number: "3k+",
                                                icons: Wallet,
                                                text: 'In Benefits'
                                            },
                                            {
                                                number: "3k+",
                                                icons: Benefits,
                                                text: 'Opportunities'
                                            },

                                        ].map((element, idx) => (
                                            <div className='flex_' key={idx}>
                                                <div >
                                                    <img src={element.icons} alt={element.text} />
                                                </div>
                                                <div className='flex'>
                                                    <div className='number'>{element.number}</div>
                                                    <div className='title'>{element.text}</div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>

                            </div>

                            <div className='footer'>
                                <div className='footer_'>
                                    <div>
                                        <img src={Logo} alt='logo' />
                                    </div>
                                    <div>
                                        {
                                            [
                                                "Company",
                                                'About',
                                                'Careers',
                                                'Legal'
                                            ].map((element, idx) => (
                                                <div className={`links ${idx == 0 && 'header'}`} key={idx}>{element}</div>
                                            ))
                                        }
                                    </div>
                                    <div>
                                        {
                                            [
                                                "Resources",
                                                'Blog',
                                                'Nysc Explorer',
                                                'Partnership'
                                            ].map((element, idx) => (
                                                <div className={`links ${idx == 0 && 'header'}`} key={idx}>{element}</div>
                                            ))
                                        }
                                    </div>
                                    <div>
                                        {
                                            [
                                                "Get Support",
                                                'Help Center',
                                                'FAQ',
                                                'Contact us'
                                            ].map((element, idx) => (
                                                <div className={`links ${idx == 0 && 'header'}`} key={idx}>{element}</div>
                                            ))
                                        }
                                    </div>
                                    <div>
                                        <div className='header'>Get Socials</div>
                                        <div className='social_media'>
                                            <img src={Twitter} alt='twitter_icon' />
                                            <img src={Facebook} alt='twitter_icon' />
                                            <img src={Instagram} alt='twitter_icon' />
                                            <img src={LinkedIn} alt='twitter_icon' />
                                        </div>
                                        <div className='header'>Get Access to Opportunities</div>
                                        <div>
                                            <input type='text' placeholder='Enter your Email' />
                                            <button>Let&quot;s Go</button>
                                        </div>


                                    </div>
                                </div>
                                <div className='year'>
                                    © 2022 Synergy NG, Inc.
                                </div>
                            </div>

                        </>
                    )
                }


            </AboutStyles>

        </>
    )
}

export default AboutUs