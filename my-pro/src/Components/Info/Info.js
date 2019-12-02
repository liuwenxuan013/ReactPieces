
import React from 'react';


export const myInfo = {
    name: 'Wenxuan Liu',
    title: 'Web Developer',
    tel: '647-554-2862',
    email: 'liuwenxuan013@gmail.com',
    education: [{
        degree: 'Bachelor\'s',
        school: 'Nanjing Institute of Technology',
        major: 'Electrical Engineering and Automation',
        city: 'Nanjing, Jiangsu',
        country: 'China',
        start: '2009-09',
        end: '2013-06'
    },
    {
        degree: 'Diploma',
        school: 'Seneca College',
        major: 'Computer Programming',
        city: 'Toronto, ON',
        country: 'Canada',
        start: '2017-12',
        end: '2019-10'
    },
    ],
    workExperience: [{
        jobTitle: 'Software Engineer&Project Manager',
        company: 'Jiangsu Smart Software Engineering Company',
        city: 'Nanjing, Jiangsu',
        country: 'China',
        start: '2013-09',
        end: '2017-08',
        description:
        {
            overall: 'Web platform development and project management related to the software application platform of the State Grid Corporation from the Architecture Design phase for a new project to final platform launch, and support nationwide.',
            responsibilities:

                ['- Co-authored high-quality documents based on user requirements, including requirements analysis, outline design, detailed design documents',
                    '- The sole responsibility for the on-site operation and maintenance of the SG186 platform. Supporting the smoothness of the users’ workflow, solving platform operation problems in time and improving the web platform met all user demands.',
                    '- Attend project and team meetings, interact and collaborate with team members and other third-party vendors to resolve platform issues and meet customer requirements',
                    '- Contribute to successful project delivery',
                    '- Provided data support for other departments through SQL Query',
                ]
        }
    },
    {
        jobTitle: 'Sql Server DBA',
        company: 'Nanjing Panneng Electric Power Technology Co., Ltd',
        city: 'Nanjing, Jiangsu',
        country: 'China',
        start: '2013-05',
        end: '2013-08',
        description:
        {
            overall: 'Responsible for performing data quality, check and update data directly with SQL statements. Worked with back-office personnel to resolve issues and provide improvements.',
            responsibilities:

                ['- Design, write, test and implement SQL solutions for reporting and updates',
                    '- Provide data support',
                    '- Work with vendors to resolve problems and to implement new software solutions',
                ]
        }
    },
    ],
    skills: [{ title: 'JavaScript | JAVA | C/C++ | JSX | JSON | Bootstrap | Node' },
    { title: 'React | Angular | jQuery ' },
    { title: 'HTML/HTML5 | XML | CSS/SCSS ' },
    { title: 'Node | Linux | Unix | Git | GitHub ' },
    { title: 'Oracle SQL | MySQL | MangoDB' },
    { title: 'Experience with SQL, Stored Procedures and Database Development' },
    { title: 'Extensive experience with strong organizational skills and problem-solving.' }

    ],
    awards: [{ title: 'President Honour (Seneca College)' },
    { title: 'National' }],

    arts: [{
        desc: 'Hands',
        imgUrl: "/images/arts/hands.jpg",
        time: '2019'

    },
    {
        desc: 'Tree',
        imgUrl: '/images/arts/tree.jpg',
        time: '2019',

    },

    {
        desc: 'Portrait 001',
        imgUrl: '/images/arts/portrait1.jpg',
        time: '2019',

    },
    // {
    //     desc: 'Zhong Kui',
    //     imgUrl: '/images/arts/zhongkui.jpg',
    //     time: '2015',

    // },

    {
        desc: 'Nature 002',
        imgUrl: '/images/arts/nature2.jpg',
        time: '2017',

    },
    {
        desc: 'Nature 001',
        imgUrl: '/images/arts/nature1.jpg',
        time: '2017',

    },
    {
        desc: 'Vision',
        imgUrl: '/images/arts/vision.jpg',
        time: '2019',

    },

    ]




}

export const InfoContext = React.createContext({ info: myInfo });