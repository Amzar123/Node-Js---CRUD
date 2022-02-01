
Run Project pada minikube

<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#Run-project-secara-local">Run project secara local</a></li>
        <li><a href="#Run-project-menggunakan-docker">Run project menggunakan docker</a></li>
        <li><a href="#Deploy-docker-image-ke-kubernetes">Deploy docker image ke kubernetes</a></li>
      </ul>
    </li>
    <li><a href="#Kredential-Admin">Kredential Admin</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Project ini merupakan project CRUD dan login user dengan dengan menggunakan user token yaitu jwt 

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [Exprees.js](https://expressjs.com/)
* [MongoDB.js](https://www.mongodb.com/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

Sebelum menjalankan project ini pastikan sudah memiliki aplikasi mongodb server atau dapat menjalankannya pada image docker 

### Installation

_Dibawah ini merupakan langkah - langkah untuk menginstall aplikasi._
#### Run project secara local

1. Clone the repo
   ```sh
   git clone https://github.com/Amzar123/CRUD-NodeJs.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Jalankan project
   ```sh
   npm run dev
   ```
   
#### Run project menggunakan docker 
1. Clone the repo
   ```sh
   git clone https://github.com/Amzar123/CRUD-NodeJs.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Jalankan project
   ```sh
   docker-compose.up
   ```
 #### Deploy docker image ke kubernetes
1. Clone the repo
   ```sh
   git clone https://github.com/Amzar123/CRUD-NodeJs.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Ambil kode yang akan digenerate
   ```sh
   cat ~/.docker/config.json | base64 -w0
   ```
4. Copy kode yang digenerate ke my-secret.yml file
5. Buat source secret pada kubernetes
   ```sh
   kubectl create -f my-secret.yaml && kubectl get secrets
   ```
6. Buat pod curd-nodejs
   ```sh
   kubectl create -f podcrud_nodejs.yml
   ```
7. Buat service curd-nodejs
   ```sh
   kubectl create -f servicecrud.yml
   ```
8. Buat pod mongodb
   ```sh
   kubectl create -f podmongo.yml
   ```

9. Buat service mongodb
   ```sh
   kubectl create -f servicemongo.yml
   ```


<p align="right">(<a href="#top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Kredential Admin

1. Username
   ```sh
   admin
   ```
2. Password
   ```sh
   admin123
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png

