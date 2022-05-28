import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faEnvelope, faMobile, faLocation, faBrain, faBuildingColumns, faGraduationCap, faSchoolFlag, faCode, faCircle } from '@fortawesome/free-solid-svg-icons';


const Portfolio = () => {
    return (
        <div className='py-10'>
            <div className='p-2 max-w-7xl rounded-2xl mx-auto' style={{ backgroundColor: "#F4F8FB" }}>

                <div className='grid grid-cols-4 gap-2'>
                    <div className='col-span-3 flex '>
                        <div className='w-2 mr-2 rounded-md h-full' style={{ backgroundColor: "#1C3244" }}></div>
                        <div className='flex w-full rounded-2xl p-3' style={{ backgroundColor: "#EBEBEB" }}>
                            <div className='ml-3'>
                                <div class="avatar">
                                    <div class="w-24 rounded-full">
                                        <img src="https://i.ibb.co/VJrn4Bw/aa.jpg" alt='' />
                                    </div>
                                </div>
                            </div>
                            <div className='ml-4'>
                                <h3 className='text-4xl font-semibold' style={{ color: "#1C3244" }}>Dipta Saha</h3>
                                <h4 className='text-2xl font-semibold text-primary'>Jr. Front End Developer</h4>
                                <p>Ability to create innovative, creative, & interactive web designs to boost customer engagement. Sound knowledge in HTML5, CSS3, Git, Javascript, ES6, React.js, Node, Express, Mongodb & other UI frameworks like Bootstrap, Tailwindcss. Build reusable code for future use while optimizing web performance.</p>

                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='h-full rounded-2xl text-white p-3' style={{ backgroundColor: "#1C3244" }}>
                            <div className='flex items-center mb-3'>
                                <div className='bg-primary h-9 w-9 flex justify-center items-center rounded-full'>
                                    <span className='text-lg'><FontAwesomeIcon icon={faEnvelope} /></span>
                                </div>
                                <div className='ml-2'>
                                    <span>diptasaha.lpu.cse@gmail.com</span>
                                </div>
                            </div>
                            <div className='flex items-center mb-3'>
                                <div className='bg-primary h-9 w-9 flex justify-center items-center rounded-full'>
                                    <span className='text-lg'><FontAwesomeIcon icon={faMobile} /></span>
                                </div>
                                <div className='ml-2'>
                                    <span>+8801613146412</span>
                                </div>
                            </div>
                            <div className='flex items-center mb-3'>
                                <div className='bg-primary h-9 w-9 flex justify-center items-center rounded-full'>
                                    <span className='text-lg'><FontAwesomeIcon icon={faLocation} /></span>
                                </div>
                                <div className='ml-2'>
                                    <span>Khulna, Bangladesh</span>
                                </div>
                            </div>


                        </div>

                    </div>

                </div>
                <div className='grid grid-cols-4 gap-2 mt-2'>
                    <div className='col-span-3 flex '>
                        <div className='w-2 mr-2 h-full'></div>
                        <div className='w-full p-3'>
                            <div className=' mt-2'>

                                <div className='flex items-center'>
                                    <span className='text-xl' style={{ color: "#1C3244" }}><FontAwesomeIcon icon={faCode} /></span>
                                    <h3 className='ml-2 font-bold text-xl' style={{ color: "#1C3244" }}>Project</h3>
                                </div>

                                <div className=' m-5'>
                                    <div>
                                        <div className='flex items-center'>
                                            <span className='text-sm' style={{ color: "#1C3244" }}><FontAwesomeIcon icon={faCircle} /></span>
                                            <h3 className='ml-2 font-bold text-sm' style={{ color: "#1C3244" }}>Manufacturer website</h3>
                                        </div>

                                        <div className='ml-5'>
                                            <p className='italic text-sm'>This website is all about whole sell (Tools) business website like alibaba. The main concept of this website is, Customer can buy product from minimum quantity to available quantity. To buy any product, Customer have to register in this website then they can buy. In Home page Customer can see some product in tools section. every product contain name, image, short description, min order quantity, available quantity, price and a button named Buy now. when user click on the buy button then this product will show in purchase route or page ( if the customer logged in otherwise it will redirect to login page ) with all product details. In Purchase page user can change quantity (increase/decrease). The Initial value of quantity is the minimum order quantity. user can not able to reduce the quantity below the minimum order quantity and also user can not able to set quantity which is higher than the available quantity. In purchase page user also see delivery info field like phone, address. user have to filled that info to purchase the order. there have a button name Purchase now. if user click on that button, user see a successful message 'You order is successfully added, Please pay for this product from my order page. when user logged in he will see a dashboard. In Dashboard, user can see his profile section, My Order section,Add Review Section. In My Order section, User can see pay or cancel button with his every order. user can pay for his particular order from this page. user can only pay this order with Stripe payment system. In Add review page, user can see or add this review, user profile section user can see his info. One the other hand, This website have admin section, normal user can not see admin info as well as admin can not see customers info. admin can manage, add product. also can handle ann orders.</p>
                                            <div className='flex items-center mt-4'>
                                                <p className='text-sm font-semibold'>Github: </p>
                                                <a className='ml-2 text-sm' href="">Manufacturar</a>
                                            </div>
                                            <div className='flex items-center'>
                                                <p className='text-sm font-semibold'>Site Link: </p>
                                                <a className='ml-2 text-sm' href="">Manufacturar</a>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div className=' m-5'>
                                    <div>
                                        <div className='flex items-center'>
                                            <span className='text-sm' style={{ color: "#1C3244" }}><FontAwesomeIcon icon={faCircle} /></span>
                                            <h3 className='ml-2 font-bold text-sm' style={{ color: "#1C3244" }}>Inventory website</h3>
                                        </div>

                                        <div className='ml-5'>
                                            <p className='italic text-sm'>Short Description about the project</p>
                                            <div className='flex items-center mt-4'>
                                                <p className='text-sm font-semibold'>Github: </p>
                                                <a className='ml-2 text-sm' href="">Inventory</a>
                                            </div>
                                            <div className='flex items-center'>
                                                <p className='text-sm font-semibold'>Site Link: </p>
                                                <a className='ml-2 text-sm' href="">Inventory</a>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                

                            </div>
                            <div className=' mt-2'>

                                <div className='flex items-center'>
                                    <span className='text-xl' style={{ color: "#1C3244" }}><FontAwesomeIcon icon={faBuildingColumns} /></span>
                                    <h3 className='ml-2 font-bold text-xl' style={{ color: "#1C3244" }}>Education</h3>
                                </div>

                                <div className=' m-5'>
                                    <div className='flex items-center'>
                                        <span className='text-sm' style={{ color: "#1C3244" }}><FontAwesomeIcon icon={faGraduationCap} /></span>
                                        <h3 className='ml-2 font-bold text-sm' style={{ color: "#1C3244" }}>Computer Science and Engineering</h3>
                                    </div>
                                    <div className='ml-5'>
                                        <p className='italic text-sm'>Lovely Professional University</p>
                                        <p className='italic text-sm'>Graduation</p>
                                        <p className='italic text-sm'>2017 - 2022</p>

                                    </div>


                                </div>
                                <div className=' m-5'>
                                    <div className='flex items-center'>
                                        <span className='text-sm' style={{ color: "#1C3244" }}><FontAwesomeIcon icon={faSchoolFlag} /></span>
                                        <h3 className='ml-2 font-bold text-sm' style={{ color: "#1C3244" }}>Computer Engineering</h3>
                                    </div>
                                    <div className='ml-5'>

                                        <p className='italic text-sm'>Khanjahan Ali College of Science and Technology</p>
                                        <p className='italic text-sm'>Diploma</p>
                                        <p className='italic text-sm'>2010 - 2014</p>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div>
                        <div className='h-full rounded-2xl p-3 px-4' style={{ backgroundColor: "#EBEBEB" }}>
                            <div>
                                <div className='flex items-center mt-2'>
                                    <span className='text-xl' style={{ color: "#1C3244" }}><FontAwesomeIcon icon={faBrain} /></span>
                                    <h3 className='ml-2 font-bold text-lg' style={{ color: "#1C3244" }}>Skills</h3>
                                </div>

                                <div className='mt-3'>
                                    <div className='mb-2'>

                                        <div class="badge border-0 p-3 m-1" style={{ backgroundColor: "#1C3244" }}>HTML5</div>
                                        <div class="badge border-0 p-3 m-1" style={{ backgroundColor: "#1C3244" }}>CSS3</div>
                                        <div class="badge border-0 p-3 m-1" style={{ backgroundColor: "#1C3244" }}>Git</div>
                                        <div class="badge border-0 p-3 m-1" style={{ backgroundColor: "#1C3244" }}>Bootstrap</div>
                                        <div class="badge border-0 p-3 m-1" style={{ backgroundColor: "#1C3244" }}>Tailwindcss</div>
                                        <div class="badge border-0 p-3 m-1" style={{ backgroundColor: "#1C3244" }}>Javascript</div>
                                        <div class="badge border-0 p-3 m-1" style={{ backgroundColor: "#1C3244" }}>React</div>
                                        <div class="badge border-0 p-3 m-1" style={{ backgroundColor: "#1C3244" }}>Node</div>
                                        <div class="badge border-0 p-3 m-1" style={{ backgroundColor: "#1C3244" }}>Express</div>
                                        <div class="badge border-0 p-3 m-1" style={{ backgroundColor: "#1C3244" }}>Mongodb</div>
                                        <div class="badge border-0 p-3 m-1" style={{ backgroundColor: "#1C3244" }}>C</div>
                                        <div class="badge border-0 p-3 m-1" style={{ backgroundColor: "#1C3244" }}>Java</div>
                                        <div class="badge border-0 p-3 m-1" style={{ backgroundColor: "#1C3244" }}>Python</div>
                                        <div class="badge border-0 p-3 m-1" style={{ backgroundColor: "#1C3244" }}>Android</div>
                                    </div>

                                </div>
                            </div>


                        </div>
                        

                    </div>

                </div>

                <div>

                </div>

            </div>

        </div>
    );
};

export default Portfolio;