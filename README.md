<div id="top" align="center">
  <img src="https://i.postimg.cc/PfwHcbbw/logo.png" width="200px"/>
  <h2>Lose the mop and we'll clean the slop :soap:</h2>
</div>
<br/>
<div align="center">
  <a href="https://github.com/GSG-G11/CleanStead/contributors"><img alt="GitHub contributers" src="https://img.shields.io/github/contributors/GSG-G11/CleanStead?color=%2300ADEE&style=for-the-badge"></a>
  <a href="https://github.com/GSG-G11/CleanStead/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/GSG-G11/CleanStead?color=red&style=for-the-badge"></a>
  <a href="https://github.com/GSG-G11/CleanStead/network"><img alt="GitHub forks" src="https://img.shields.io/github/forks/GSG-G11/CleanStead?color=%2344cc11&style=for-the-badge"></a>
  <a href="https://github.com/GSG-G11/CleanStead/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/GSG-G11/CleanStead?color=yellow&style=for-the-badge"></a>
</div>

<div>
  <p align="center">
      <br />
  <div align='center'>
    <h3><a href="https://cleanstead.herokuapp.com/">Visit CleanStead</a></h3>
    <h4><a href="https://www.figma.com/file/x4SwUXvOFq3012pYy1lhPw/CleanStead?node-id=80%3A335">Figma Design</a></h4>
  </p>
  </div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#problem">Problem</li> 
        <li><a href="#solution">Solution</li> 
        <li><a href="#built-with">Built With</li> 
        <li><a href="#database-schema">Database Schema</li> 
      </ul>
    </li>
    <li>
      <a href="#user-stories">User Stories</a>
      <ul>
        <li><a href="#as-a-user-story">User</a></li>
        <li><a href="#as-an-admin-story">admin</a></li>        
      </ul>
    </li>
    <li>
      <a href="#user-journey">User Journey</a>
      <ul>
        <li><a href="#as-a-user-journey">User</a></li>
        <li><a href="#as-an-admin-journey">Admin</a></li>        
      </ul>
    </li>
      <li>
      <a href="#install-repo">Install application</a>
       <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>        
      </ul>
    </li>
    <li><a href="#contributers">Contributers</a></li>
  </ol>
</details>

<br>

## About The Project <span id="about-the-project"></span>
<div align='center'>
  <img src="https://i.postimg.cc/xd35qZSz/header.png"/>
</div>

<p align="right"><a href="#top">back to top</a></p>

### Problem :tornado: <span id="problem"></span>
The difficulty of getting a place that provides different cleaning services, also the lack of time available for cleaning, the difficulty of doing all the cleaning work, and the need for another place to clean some things. People coming to do the cleaning service must be confident and find someone responsible for them to review whether the service is fully appreciated or not.

### Solution :snowflake: <span id="solution"></span>
Our website provides people with the ability to request different types of cleaning services from a trusted place and people.

### Built With <span id="built-with"></span> 	:computer:

* [Express.js](https://expressjs.com/)
* [React.js](https://reactjs.org/)
* [Typescript](https://www.typescriptlang.org/)
* [PostgreSQL](https://www.postgresql.org/docs/)
* [Ant Design](https://ant.design/)
* [Cloudinary](https://cloudinary.com/)
* [React Leaflet Map](https://react-leaflet.js.org/)
* [Nodemailer](https://nodemailer.com/about/)
* [Chart.js](https://www.chartjs.org/)

<p align="right"><a href="#top">back to top</a></p>

### Database Schema <span id="database-schema"></span> 	:computer:
<div align='center'>
  <img src="https://i.postimg.cc/HsCLtWcX/draw-SQL-export-2022-05-28-05-47.png"/>
</div>
<p align="right"><a href="#top">back to top</a></p>


## User Stories 📔 <span id="user-stories"></span>
### `As a user:` <span id="as-a-user-story"></span>
- I can see all kinds of services available
- I can see more details of any services
- I can book online for Home service. 
- I can add my location using google map
- I can see the reviews from other peoples
- I can book the service one time or regular

### `As an Admin:` <span id="as-an-admin-story"></span>
- I can view all service requests.
- I receive a notification when a user requests any services.
- I can view all my services

<p align="right"><a href="#top">back to top</a></p>

## User Journey 🚀 <span id="user-journey"></span>
### `As a user:` <span id="as-a-user-journey"></span>
### `As an Admin:` <span id="as-an-admin-journey"></span>

## Getting Started <span id="install-repo"></span>

To get a local copy up and running follow these simple example steps.

### Prerequisites <span id="prerequisites"></span>

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation <span id="installation"></span>

1. Create a free account at [Cloudinary](https://cloudinary.com/)
2. Clone the repo
   ```sh
   git clone https://github.com/GSG-G11/CleanStead.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. In the project root folder, rename `.env.example` file to `.env` and fill in the environment variables
   ```sh
   SECRET_KEY='<your secret key>'
   DEV_DB_URL=postgres://<username>:<password>@localhost:<port || 5432>/<development database>
   TEST_DB_URL=postgres://<username>:<password>@localhost:<port || 5432>/<test database>
   APP_MAIL='<your email>'
   MAIL_PASSWORD='<your password>'
   ```
5. In the `client` folder, renmae `.env.example` file to `.env` and fill in the environment variables
    ```sh
    REACT_APP_CLOUDINARY_UPLOAD_PRESET='<Your cloudinary upload preset>'
    REACT_APP_CLOUDINARY_CLOUD_NAME='<Your cloudinary cloud name>'
    ```
<p align="right">(<a href="#top">back to top</a>)</p>


## Contributers: 👥 <span id="contributers"></span>

### Team Leader :tophat:
* [Muhammad Amin Abdulhadi](https://github.com/Mu7ammadAbed) 

### Team Members :gem:
* [Israa Hamdi Abu Rayya](https://github.com/IsraaHamdi)
* [Mohammad Maher AlHabil](https://github.com/MohammadAlHabil)
* [Mostafa Naeem Qanoo](https://github.com/MostafaQanoo)
* [Jehad Jawad Abushaqra](https://github.com/Jehad91)