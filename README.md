# EtsyBitsy (System Design Capstone Project)

<img alt="AWS" src="https://img.shields.io/badge/AWS%20-%23FF9900.svg?&style=for-the-badge&logo=amazon-aws&logoColor=white"/><img alt="Nginx" src="https://img.shields.io/badge/nginx%20-%23009639.svg?&style=for-the-badge&logo=nginx&logoColor=white"/><img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/><img alt="NodeJS" src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/><img alt="Express.js" src="https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge"/><img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/><img alt="Webpack" src="https://img.shields.io/badge/webpack%20-%238DD6F9.svg?&style=for-the-badge&logo=webpack&logoColor=black" /><img alt="HTML5" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/><img alt="CSS3" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/><img alt="Postgres" src ="https://img.shields.io/badge/postgres-%23316192.svg?&style=for-the-badge&logo=postgresql&logoColor=white"/><img alt="GitHub" src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/>
<img alt="CircleCI" src="https://img.shields.io/badge/CIRCLECI-%23161616.svg?style=for-the-badge&logo=circleci&logoColor=white"/><br></br>

<a href="https://www.linkedin.com/in/alee74" target="_blank">
  <img alt="Anthony Lee" src="https://img.shields.io/badge/-
  Anthony%20Lee-blue?&style=for-the-badge&logo=linkedin&logoColor=white"/>
</a>


## About

This application is the project that I worked during Hack Reactor. With given front end lagacy code, I reconstructed the backend for ecommerce website which is a replication of Etsy. I was  responsible for the review component, which displays users ratings, comments, and pictures for the item.
I scaled this application with using Nginx load balancer/rever proxy server and 5 servers (Node.js/Express) with 1 database(Postgres SQL). All of my services are deployed through AWS EC2 instances and hold all static files in S3 buckets and distributed with CloudFront.
With this setup I was able to achieve 4,530 rps, 300 ms latency, and under 1% error rates.


## Installation

To get started install the packages!
```
npm install
```
then to bundle this application run:

```
npm run build
```

then start the server!

```
npm start
```

Navigate to http://localhost/ to see the page in action