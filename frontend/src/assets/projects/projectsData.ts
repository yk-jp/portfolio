import IProject from '../../interfaces/IProject';
import Img from '../img/Img';

const projectsData: IProject[] = [{
    "image": Img.codenames,
    "title": "Codenames",
    "description": "Codenames is a wordplay game for 4 to 10 players. You can play it with your friends by sending a invite URL.",
    "whatILearnt": "This was my first OSS project!. I was able to learn how to connect frontend to backend, how to use websocket, you name it! I tried hard to make my code readable and maintainable. To do that, I applied a dependency injection, MVC model, OOP.",
    "projectDifficulties": "This project was really challenging for me. Maintaining and updating player and table data in each room every time players take an action was the most difficult part. What I focused on was to utilize same functions and classes and test functions that deal with complicated data flow between frontend and backend. I solved a lot of struggles and have my project done.",

    "techStack": ["HTML", "CSS", "Bootstrap", "React", "TypeScript", "Node.js", "Socket.io", "Sequelize", "MySQL", "Jest"],
    "link": {
        "visitWebsite": "https://www.codenames.ml/",
        "gitHub": "https://github.com/yk-jp/Codenames"
    }
},
{
    "image": Img.blackjack,
    "title": "blackjack",
    "description": "This is a board game widely played all over the world. You can play it with 2 cpu.",
    "whatILearnt": "I learnt OOP and MVC model from this project. I figured that splitting code into specific components or class was easy to maintain. I was able to add multiple functions and fix some code without any problems!",
    "projectDifficulties": "I struggled with how model should be implemented. At first, some main function were not understandable and difficult to fix code. So, I restarted entire the model component from architecuture. I could work on that more efficiently in the end.",
    "techStack": ["HTML", "CSS", "Bootstrap", "JavaScript"],
    "link": {
        "visitWebsite": "https://yk-jp.github.io/blackjack/",
        "gitHub": "https://github.com/yk-jp/blackjack"
    }
},
{
    "image": Img.cli,
    "title": "Command Line Interface",
    "description": "This is a Command Line Interface app that can handle general commands. This supports both Absolute path and relative path to some commands.",
    "whatILearnt": "Implementing tree structure was essential for this project to manage each file and folder when it comes to thinking about complexity. I was able to apply the doubly linked list to manage file and folder inside a directory. and to organaize all in a hierarchical directory. Also, I learnt how validations for commands work to user's input.",
    "projectDifficulties": "At first, I implemented a dynamic array to organize file and folder inside a directory although the other part were structured by the doubly linked list. I didn't assume how complicated the code for mv command is with dynamic array. I realized that It was not optimized in terms of complexity. I should've suppose various feature and use cases",
    "techStack": ["HTML", "CSS", "Bootstrap", "JavaScript"],
    "link": {
        "visitWebsite": "https://yk-jp.github.io/CLI/",
        "gitHub": "https://github.com/yk-jp/CLI"
    }
},
{
    "image": Img.portfolio,
    "title": "portfolio website",
    "description": "This is my portfolio site",
    "whatILearnt": "I learnt responsive design and styled-components. I've been using plain css method or css module in react. So, I tried styled-components this time.",
    "projectDifficulties": "I struggled to make sentences fit in the image size when zooming in.",
    "techStack": ["HTML", "CSS", "Materialize", "styled-components", "React", "TypeScript","webpack","Babel"],
    "link": {
        "visitWebsite": "https://www.yusuk82.com/",
        "gitHub": "https://github.com/yk-jp/portfolio"
    }
},
{
    "image": Img.passwordmanager,
    "title": "password manager",
    "description": "This is a web app to manage your password.",
    "whatILearnt": "I was able to learn the basic authentication system. This is my first authentication project. I was happy to grash the understandings of where to store and manage both token(e.g. cookie or local storage in frontend), how privacy data should be more secure and why exactly JWT is used.",
    "projectDifficulties": "I couldn't grasp how refresh token works and how each request and response has to be authorized at first. I searched quite a lot of articles on the internet and learnt from those resorces enough. In addition to those things, I checked the system in a frontend side,backend side separately. In the backend side, I especially utilized a rest api testing quite enough. I finally was able to see the big picture.",
    "techStack": ["HTML", "CSS", "Bootstrap", "React", "TypeScript","Node.js","Postman","Jest","Redis","MySQL","JWT"],
    "link": {
        "visitWebsite": null,
        "gitHub": "https://github.com/yk-jp/PasswordManager"
    }
}
];

export default projectsData;