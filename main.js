var htmlBootcamp = document.getElementById("html-bootcamp"),
    cssBootcamp = document.getElementById("css-bootcamp"),
    jsBootcamp = document.getElementById("js-bootcamp"),
    reactBootcamp = document.getElementById("react-bootcamp"),
    angularBootcamp = document.getElementById("angular-bootcamp"),
    pythonBootcamp = document.getElementById("python-bootcamp"),
    graphicBootcamp = document.getElementById("graphic-bootcamp");
let bootcampDuration = document.getElementById("bootcamp-duration"),
    bootcampTiming = document.getElementById("bootcamp-timing"),
    bootcampMeetingLink = document.getElementById("bootcamp-meeting-link"),
    bootcampDetailIntro = document.getElementById("bootcamp-detail-intro"),
    bootcampIntros = {
        html: "HTML, short for HyperText Markup Language, is code for web pages. It uses tags to instruct browsers on content display. HTML structures text, adds images, links, and more for website creation.",
        css: "CSS, or Cascading Style Sheets, styles web content. It controls text, colors, and layout for attractive websites. CSS creates consistent styles across a site for a polished appearance",
        js: "JavaScript adds interactivity to websites, making them dynamic. It responds to user actions like clicks and form submissions, bringing web pages to life with functionality and engagement.",
        python: "Python, a versatile and beginner-friendly programming language, is used for web development, data analysis, and artificial intelligence. Write code in a text editor, then execute it for computer instructions.",
        react: "React, a JavaScript library for UI development, creates dynamic components without page reloads. Its component-based approach streamlines development for faster, efficient interfaces.",
        angular: "Angular simplifies web development with TypeScript, crafting dynamic, single-page apps. Its modular design enhances scalability and efficiency for robust web applications.",
        graphic: "Graphic design is the art of visual communication. It uses typography, photography, and illustration to create logos, brochures, and more. Graphic design combines creativity and technology to produce captivating visuals.",
    },
    bootcampDurationObj = { html: "2 Weeks", css: "2 Weeks", js: "2 Weeks", react: "1 Month", angular: "1 Month", python: "4 Weeks", graphic: "2 Months" },
    bootcampTimingObj = {
        html: "Monday - Wednesday, 09:00 PM- 10:00 PM",
        css: "Monday - Wednesday, 09:00 PM- 10:00 PM",
        js: "Monday - Wednesday, 09:00 PM- 10:00 PM",
        react: "Monday - Wednesday, 09:00 PM- 10:00 PM",
        angular: "Monday - Wednesday, 09:00 PM- 10:00 PM",
        python: "Thursday - Saturday, 09:00 PM- 10:00 PM",
        graphic: "Monday - Wednesday, 09:00 PM- 10:00 PM",
    },
    bootcampMeetingLinkObj = {
        html: "https://meet.google.com/lookup/abc",
        css: "https://meet.google.com/lookup/abc",
        js: "https://meet.google.com/lookup/abc",
        react: "https://meet.google.com/lookup/abc",
        angular: "https://meet.google.com/lookup/abc",
        python: "https://meet.google.com/lookup/abc",
        graphic: "https://meet.google.com/lookup/abc",
    };
htmlBootcamp.addEventListener(
    "click",
    function () {
        (bootcampDetailIntro.textContent = bootcampIntros.html),
            (bootcampDuration.textContent = bootcampDurationObj.html),
            (bootcampTiming.textContent = bootcampTimingObj.html),
            (bootcampMeetingLink.href = bootcampMeetingLinkObj.html),
            (bootcampMeetingLink.textContent = bootcampMeetingLinkObj.angular);
    },
    !1
),
    cssBootcamp.addEventListener(
        "click",
        function () {
            (bootcampDetailIntro.textContent = bootcampIntros.css),
                (bootcampDuration.textContent = bootcampDurationObj.css),
                (bootcampTiming.textContent = bootcampTimingObj.css),
                (bootcampMeetingLink.href = bootcampMeetingLinkObj.css),
                (bootcampMeetingLink.textContent = bootcampMeetingLinkObj.angular);
        },
        !1
    ),
    jsBootcamp.addEventListener(
        "click",
        function () {
            (bootcampDetailIntro.textContent = bootcampIntros.js),
                (bootcampDuration.textContent = bootcampDurationObj.js),
                (bootcampTiming.textContent = bootcampTimingObj.js),
                (bootcampMeetingLink.href = bootcampMeetingLinkObj.js),
                (bootcampMeetingLink.textContent = bootcampMeetingLinkObj.angular);
        },
        !1
    ),
    reactBootcamp.addEventListener(
        "click",
        function () {
            (bootcampDetailIntro.textContent = bootcampIntros.react),
                (bootcampDuration.textContent = bootcampDurationObj.react),
                (bootcampTiming.textContent = bootcampTimingObj.react),
                (bootcampMeetingLink.href = bootcampMeetingLinkObj.react),
                (bootcampMeetingLink.textContent = bootcampMeetingLinkObj.angular);
        },
        !1
    ),
    pythonBootcamp.addEventListener(
        "click",
        function () {
            (bootcampDetailIntro.textContent = bootcampIntros.python),
                (bootcampDuration.textContent = bootcampDurationObj.python),
                (bootcampTiming.textContent = bootcampTimingObj.python),
                (bootcampMeetingLink.href = bootcampMeetingLinkObj.python),
                (bootcampMeetingLink.textContent = bootcampMeetingLinkObj.angular);
        },
        !1
    ),
    angularBootcamp.addEventListener(
        "click",
        function () {
            (bootcampDetailIntro.textContent = bootcampIntros.angular),
                (bootcampDuration.textContent = bootcampDurationObj.angular),
                (bootcampTiming.textContent = bootcampTimingObj.angular),
                (bootcampMeetingLink.href = bootcampMeetingLinkObj.angular),
                (bootcampMeetingLink.textContent = bootcampMeetingLinkObj.angular);
        },
        !1
    ),
    graphicBootcamp.addEventListener(
        "click",
        function () {
            (bootcampDetailIntro.textContent = bootcampIntros.graphic),
                (bootcampDuration.textContent = bootcampDurationObj.graphic),
                (bootcampTiming.textContent = bootcampTimingObj.graphic),
                (bootcampMeetingLink.href = bootcampMeetingLinkObj.graphic),
                (bootcampMeetingLink.textContent = bootcampMeetingLinkObj.angular);
        },
        !1
    );
let enrollBootcampBtn = document.getElementById("enroll-bootcamp-btn"),
    enrollStatusDisplay = document.getElementById("enroll-status-el"),
    enrollStatusAdmin = "open";
"open" === enrollStatusAdmin
    ? ((enrollStatusDisplay.innerHTML = '<span class="open-enroll">Enrollment Is Opened</span>'), (enrollBootcampBtn.innerHTML = '<a href="https://forms.gle/PW3bczbzqSBuLP3Z6" target="_blank">Enroll Here</a>'))
    : (enrollStatusDisplay.innerHTML = '<span class="close-enroll">Enrollment Is Closed</span>');
