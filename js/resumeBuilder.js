/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    name: "Zhongyuan Zhou",
    role: "Software Engineer",
    contacts: {
        mobile: "13052058085",
        email: "yawenzhongyuan@gmail.com",
        github: "https://github.com/zhouzhongyuan",
        twitter: "https://twitter.com/zhouzhongyuan",
        location: "Tianjie Dasha 7 floor,Yangpu Qu,Shanghai, China",
    },
    welcomeMessage: "你好",
    skills: ["Javascript", "nodejs", "html", "css"],
    biopic: "images/fry.jpg",
    display: function () {

    },
};
var education = {
    schools: [
        {
            name: "University of Shanghai for Science and Technolgy",
            location: "Shanghai, China",
            degree: "Master",
            majors: "Image processing, Digital watermark",
            dates: "20120901-20150701",
            url: "http://zhouzhongyuan.com"
        }, {}
    ],
    onlineCourses: [
        {
            title: "JavaScript Basics",
            school: "Udacity",
            dates: "20160901-20161001",
            url: "https://www.udacity.com/course/javascript-basics--ud804",
        }
    ],
    display: function () {

    }
};
var work = {
    jobs: [
        {
            employer: "Shanghai Boke Software",
            title: "Front-end Enginner",
            location: "Shanghai, China",
            dates: "in progress",
            description: "build apps with Cordova",
        }
    ],
    display: function () {

    }
};
var project = {
    projects: [
        {
            title: "App pack website",
            dates: "20150901-20161001",
            description: "a tools just like \"Phonegap Builds\"",
            images: ["url1", "url2"],
        }
    ],
    display: function () {

    }
};
