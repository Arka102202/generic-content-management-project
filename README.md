# generic-content-management-project

This template project serves as a versatile foundation, ideal for various applications such as managing and updating a school's information, creating blogs, overseeing a company's product management, and more. It is designed to handle tasks including:

- Home page with basic information
- Publishing news and blogs
- Managing the admission process
- Providing contact and about information
- Detailing staff and faculty information
- Managing and updating the inventory information
- listing new products
- Gathering different information using form and sending sms, email in response
  

The project is built using a cutting-edge tech stack to ensure efficiency, flexibility, and maintainability:

-   Backend: NodeJS for a robust and scalable server environment
-   Frontend: ReactJS for a dynamic and responsive user interface
-   Databases: MySQL or MongoDB to cater to different data management needs

    With this modern approach, the project aims to deliver a state-of-the-art website that meets contemporary standards and user expectations.

## Detail information about different pages of the website:

The website will have the following pages:

Site root URL = `xyz.com`

| page-name                     | page-slug                              | what will be visible                             |
|-------------------------------|----------------------------------------|--------------------------------------------------|
| home or landing page          | `/`                                    | Basic information about the                      |
| About us                      | `/about-us`                            | Basic information about the company              |
| Blog                          | `/blog`                                | To list all the blogs and also sort and filter   |
| Event                         | `/event`                               | To list all the events and also sort and filter  |
| Single Event                  | `/event/{event-name}`                  | To show a single event                           |
| Single Blog                   | `/event/{blog-name}`                   | To show a single blog                            |
| Gallery                       | `/gallery`                             | To showcase images of something important        |
| CMS                           | `/{cms-slug}`                          | To create a temporary or permanent CMS page      |
| Contact us                    | `/contact-us`                          | contact form and some other contact information  |
|-------------------------------|----------------------------------------|--------------------------------------------------|
|                                               Admin Routes                                                                |
|-------------------------------|----------------------------------------|--------------------------------------------------|
| admin blog                    | `admin/blogs`                          | to view all blogs that are available             |
| admin blog create/modify      | `admin/blogs/{blog-id}/create-modify`  | to edit or modify a single blog                  |
| admin event                   | `admin/events`                         | to view all events that are available            |
| admin event create/modify     | `admin/events/{event-id}/create-modify`| to edit or modify a single event                 |
| admin CMS                     | `admin/CMS`                            | to view all CMS pages that are available         |
| admin CMS create/modify       | `admin/CMS/{CMS-id}/create-modify`     | to edit or modify a single CMS page info         |
| admin Gallery                 | `admin/gallery`                        | to edit or modify upload images                  |

## DataBase Tables and their fields

- `USER`:
  
  ```js

    user = {
        id: "ojsiwnshyeis836nsksls",
        f_name: "first name",
        l_name: "last name",
        email: "example.id@xyz.com",
        phoneNumber: 1234567890,
        cDate: 20240517000000,
        mDate: 20240517000000,
        status: "active", // should be an Enum : ["active", "suspended", "deleted"]
        permissionLevel: "read-only", // should be an Enum: ["read-only", "write-only", "read-write"]
        post: "Admin", // should be an Enum: ["Admin", "developer" .....],
        userName: "user-name1001",
        password: "password",
        profileImg: "link to the URL",
    }
  ```
- `BLOG`: 
  
  ```js

    blog = {
        id: "kajshsgdbhdyoiq73nsjh@@gssozs",
        name: "blog name",
        slug: "blog-slug",
        status: "publish", //should be an Enum : ["publish", "draft", "deleted"]
        cDate: 20240517000000,
        mDate: 20240517000000,
        bannerImgDesk: "http://link-desk",
        bannerImgMob: "http://link-mob",
        thumbnail: "http://thumb",
        headline: "Main headline of the blog for h1",
        description: "brief summary of the blog",
        content: "html formatted text",
        author: "author name",
        publishedDate: 20240517000000,
    }
  ```
- `EVENT`: 
  
  ```js

    event = {
        id: "kajshsgdbhdyoiq73nsjh@@gssozs",
        name: "event name",
        slug: "event-slug",
        status: "publish", //should be an Enum : ["publish", "draft", "deleted"]
        cDate: 20240517000000,
        mDate: 20240517000000,
        bannerImgDesk: "http://link-desk",
        bannerImgMob: "http://link-mob",
        thumbnail: "http://thumb",
        headline: "Main headline of the event for h1",
        description: "brief summary of the event",
        content: "html formatted text",
        eventDate: 20240517000000,
    }
  ```
- `CMS`: 
  
  ```js

    event = {
        id: "kajshsgdbhdyoiq73nsjh@@gssozs",
        name: "CMS page name",
        slug: "CMS-slug",
        status: "publish", //should be an Enum : ["publish", "draft", "deleted"]
        cDate: 20240517000000,
        mDate: 20240517000000,
        bannerImgDesk: "http://link-desk",
        bannerImgMob: "http://link-mob",
        thumbnail: "http://thumb",
        headline: "Main headline of the CMS for h1",
        description: "brief summary of the CMS",
        content: "html formatted text",
    }
  ```

- `IMAGE-CAT`:
  
  ```js
    
    imageCat = {
        id: "i9uhwc0qwnqw0-kIOJDOKN_3N*Y",
        label: "category name",
        value: "categoryName",
        cDate: 20240517000000,
        mDate: 20240517000000,
    }

  ```


- `GALLERY`: 
  
  ```js

    event = {
        id: "kajshsgdbhdyoiq73nsjh@@gssozs",
        name: "CMS page name",
        cDate: 20240517000000,
        mDate: 20240517000000,
        imgCatId: "aspkojcdij(*6jwijhd)**",
        type: "img-thumb", // should be Enum : ["img-desk", "img-mob", "img-thumb"]
        imageLink: "http://img-link",
        name: "display name",
    }
  ```

