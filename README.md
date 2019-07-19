What is it?

This is a clone of the Home Depot reviews section.

Combined with components built by my teammates, a simple clone of Home Depot's site is rendered.

Technologies

I deployed with Docker and AWS Elastic Beanstalk. My database was MongoDB Atlas, and the client side was rendered with Webpack, Babel, and React. The coding language is Javascript. 

Styling was mostly pure CSS for my component. After rendered with my teammates, their Bootstrap CSS files clashed with mine, causing some unusual style changes. To compensate, I had to tweak some of my CSS. Because of this, the component does not look as inteded on its own, but rather only correct when rendered with all other components.

How To Render on its Own

After cloning the repository, it can be rendered on its own by running "npm run start-server" and going to your localhost at port 3000. To render the reviews of a specific product, add /products/100087613 (or any product id). I have data for roughly 100 reviews scraped from Home Depot's website. 

Tidying Up

This was my first time using Visual Studio Code, so indention is not consistent throughout. I also code in Java and Python, so my choice of quotes are also not consistent.