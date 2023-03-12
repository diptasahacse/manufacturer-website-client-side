
Live Site Link [useTools](https://manufacturer-website-client-side-smoky.vercel.app/).

## All Features
> This website is all about whole sell (Tools) business website like alibaba. The main concept of this website is, Customer can buy product from minimum quantity to available quantity. To buy any product, Customer have to register in this website then they can buy. In Home page Customer can see some product in tools section. every product contain name, image, short description, min order quantity, available quantity, price and a button named Buy now. when user click on the buy button then this product will show in purchase route or page ( if the customer logged in otherwise it will redirect to login page ) with all product details. In Purchase page user can change quantity (increase/decrease). The Initial value of quantity is the minimum order quantity. user can not able to reduce the quantity below the minimum order quantity and also user can not able to set quantity which is higher than the available quantity. In purchase page user also see delivery info field like phone, address. user have to filled that info to purchase the order. there have a button name Purchase now. if user click on that button, user see a successful message 'You order is successfully added, Please pay for this product from my order page. when user logged in he will see a dashboard. In Dashboard, user can see his profile section, My Order section,Add Review Section. In My Order section, User can see pay or cancel button with his every order. user can pay for his particular order from this page. user can only pay this order with Stripe payment system. In Add review page, user can see or add this review, user profile section user can see his info. One the other hand, This website have admin section, normal user can not see admin info as well as admin can not see customers info. admin can manage, add product. also can handle ann orders.' 

* Home Page : Home Page designed with some section like, Banner Section, Tools section (where user can see all products), My Review Section (where logged in user can see his all review), Business summery section (where a visitor can see the current status of the website),  Request a quote section (visitor can communicate with the website owner.), why us section (where present some honesty text)
* Dashboard: Dashboard is design with both user and admin. user can access some page as well as admin can access some page.
* Purchase: This page is a dynamic route for purchase any order. user can confirm order from there.
* Login Page : User can Login
* Register Page : user can register.
* Forget Password Page : user can reset his password.
* Dashboard>Profile : user can see his/her info and update his profile picture, city, phone etc.
* Dashboard>My Orders : Customer can see his/her all order which ha paid or non paid. customer can cancel or pay any order according to to status.
* Dashboard>Manage All Orders : admin can manage all orders.
* Dashboard>Products : admin can add any products.





## All Tools and Technology I Have used in this project
* React 18
* React Router
* React Query
* React form hook
* React Firebase Hooks
* Tailwind css
* Daisy UI
* Firebase
* React Toastify
* JWT
* Date fns
* Stripe ( Payment System )