import React from 'react'
import asa from '../assets/img/asa.jpg'
import cv from '../assets/cv.pdf'

const About = () => {
  return (
    <section className="about" id="about">
		<div className="container">
			<div className="about-content">
				<div>
					<img src={asa} alt='rasm' />
				</div>
				<div className="about-text">
					<div className="title">
						<h1>Asadbek Muydinov</h1>
					</div>
					<div>
						<h3>About Me</h3>
						<p className='justify'>
							With a solid foundation in React and Express technologies, I embarked on my journey in web development, fueled by curiosity and a drive for excellence. Over time, my skills evolved, and I gained enough experience in crafting dynamic web solutions. However, as the landscape of technology continuously evolves and Reactjs supporting is discontinued, I found myself drawn to explore emerging tools like NestJs and NextJs. Embracing these new technologies has not only broadened my skill set but also enriched my approach to problem-solving in web development.
						</p>
						<h3 className='mt-3'>Portfolio Highlights</h3>
						<p className='justify'>
							Dive into a diverse array of projects that epitomize my journey and expertise in the MERN stack. From intuitive user interfaces developed with React to robust backend solutions powered by Express, each project showcases my ability to translate complex concepts into seamless digital experiences. With a keen eye for detail and a commitment to excellence, I leverage the latest tools and methodologies to deliver innovative solutions tailored to meet the unique needs of each project.
						</p>
						<h3 className='mt-3'>Services Offered</h3>
						<p className='justify'>
							<i>I offer a comprehensive range of web development services, including but not limited to:</i>
							<ul>
								<li>Custom web application development</li>
								<li>Frontend and backend development</li>
								<li>API integration and optimization</li>
								<li>Website maintenance and support</li>
							</ul>
						</p>
					</div>
					<div>
						<p className='d-flex align-items-center'>
							<h3>My cv:</h3>
							<a href={cv} title='view' className='cv'>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" cv w-6 h-6">
									<path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
									<path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clip-rule="evenodd" />
								</svg>
							</a> 
							<a href={cv} title='download' className='cv' download >
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" cv w-6 h-6">
									<path fill-rule="evenodd" d="M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z" clip-rule="evenodd" />
								</svg>
							</a>
						</p>
						<h3 className='mt-3'>Contact Me</h3>
						<p>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cv">
							<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
						</svg>
						010-4698-4777
						</p>
						<p>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cv">
							<path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
						</svg>
						asasedmor@gmail.com
						</p>
						
					</div>
				</div>
			</div>
		</div>
	</section>
  )
}

export default About
