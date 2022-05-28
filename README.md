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
    <a href="https://cleanstead.herokuapp.com/">Demo CleanStead</a> |
<a href="https://www.figma.com/file/x4SwUXvOFq3012pYy1lhPw/CleanStead?node-id=80%3A335">Figma Design</a>
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

## 👩‍💻 About The Project <span id="about-the-project"></span>
<div align='center'>
  <img src="https://i.postimg.cc/6QF8G8r8/header.png"/>
</div>

<p align="right"><a href="#top">back to top</a></p>

### ⁉ Problem <span id="problem"></span>
The difficulty of getting a place that provides different cleaning services, also the lack of time available for cleaning, the difficulty of doing all the cleaning work, and the need for another place to clean some things. People coming to do the cleaning service must be confident and find someone responsible for them to review whether the service is fully appreciated or not.

### 💡 Solution <span id="solution"></span>
Our website provides people with the ability to request different types of cleaning services from a trusted place and people.

### :computer:Built With <span id="built-with"></span>

* [Express.js](https://expressjs.com/)
* [React.js](https://reactjs.org/)
* [Typescript](https://www.typescriptlang.org/)
* [PostgreSQL](https://www.postgresql.org/docs/)
* [Ant Design](https://ant.design/)
* [Cloudinary](https://cloudinary.com/)
* [React Leaflet Map](https://react-leaflet.js.org/)
* [Nodemailer](https://nodemailer.com/about/)
* [Chart.js](https://www.chartjs.org/)
* [WebSocket](https://socket.io/)

<p align="right"><a href="#top">back to top</a></p>

### 🔗 Database Schema <span id="database-schema"></span>
<div align='center'>
  <img src="https://i.postimg.cc/HsCLtWcX/draw-SQL-export-2022-05-28-05-47.png"/>
</div>
<p align="right"><a href="#top">back to top</a></p>


## 📔 User Stories <span id="user-stories"></span>
### `As a user:` <span id="as-a-user-story"></span>
- I can see many categories that include services.
- I can see all kinds of services available.
- I can see more details of any services.
- I can book online for Home service. 
- I can signup to book services.
- I can select my city with multi option.
- I can search for my location on the map.
- I can add my location using google map.
- I can book the service one time or regular.
- I can add the date that I want.
- I can open my profile page and see all my books.
- I can recive email after book accepted or decline.

### `As an Admin:` <span id="as-an-admin-story"></span>
- I can view all books requests.
- I can delete any book request.
- I can send email that book is accepted or decline.
- I receive a notification when a user requests any services.
- I can see chart for all today books or for the month.
- I can view all categories.
- I can add/delete new category.
- I can view all my services.
- I can add/delete/edit sercives.
- I can view all contacts mesaages.
- I can delete any message.
- I can reply to the message and change the status from pending to reply.


<p align="right"><a href="#top">back to top</a></p>

## 🚀 User Journey <span id="user-journey"></span>
### `As a user:` <span id="as-a-user-journey"></span>
Once user visit our website he can see home page that contain navbar, header and other section. At navbar user can select any page he wants to see and two buttons for booking and for registering, when user scroll down in homepage he will see the categories that our website provide, and he can click on see more page with category details will open, and he can see all services included in this category, he can go back to home page by click on the logo or main tab, and he can scroll more and see multisection like why choose us, what clients say and the footer.
Any visitor can send message to administrator if he wants to know more details about any services.
If user want to book services he has to resist and sign in, so he can open book page and see three steps to book, first he can select services that he want and the quantity for each one, and during the steps' user can see summary for each selection, the second step that he can select how many he wants to repeat it and add the time that he want our team to come to clean, and the last step that he have to enter his information name, phone, email and add his location from map then he can submit the book.

### `As an Admin:` <span id="as-an-admin-journey"></span>
When admin open dashboard he can see chart that appear how many books on the day or on the month, he can go to contacts section and see messages sent from users, and he can change the status when he replied to message, and also he can delete any message, another section in dashboard is categories, he can see all categories that he have added before, and can add new category or edit old one, also at services section he can see all services, add new service, edit/delete any service.
And the most important section in dashboard is books, that he can see all books that user make and see the details for each book, he can accept or decline the book so user will receive email for his books' status, and also admin can delete any fake book.

## 🚩 Getting Started <span id="install-repo"></span>

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
3. Install NPM packages (in project root folder)
   ```sh
   npm install
   ```
4. Install NPM packages (in client folder)
   ```sh
   cd client && npm install
   ```
5. In the project root folder, rename `.env.example` file to `.env` and fill in the environment variables
   ```sh
   SECRET_KEY='<your secret key>'
   DEV_DB_URL=postgres://<username>:<password>@localhost:<port || 5432>/<development database>
   TEST_DB_URL=postgres://<username>:<password>@localhost:<port || 5432>/<test database>
   EMAIl='<your email>'
   EMAIL_PASSWORD='<your password>'
   ```

* To get the login admin page you can type `/login/admin` as the endpiont of url then write
 ```sh
 Email= admin@gmail.com
 Password= admin@password.com
 ```
<p align="right"><a href="#top">back to top</a></p>


## 👥 Contributers: <span id="contributers"></span>

### Team Leader 
[Muhammad Amin Abdulhadi](https://github.com/Mu7ammadAbed) 

### Team Members
* [Israa Hamdi Abu Rayya](https://github.com/IsraaHamdi)
* [Mohammad Maher AlHabil](https://github.com/MohammadAlHabil)
* [Mostafa Naeem Qanoo](https://github.com/MostafaQanoo)
* [Jehad Jawad Abushaqra](https://github.com/Jehad91)