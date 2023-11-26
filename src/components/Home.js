import React from 'react'
import './Pets.scss';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
  <div class="mainContainer">
	<div class="banner">
		<img class="bannerImg" src="https://www.princeton.edu/sites/default/files/styles/1x_full_2x_half_crop/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=Bg2K7j7J" alt="banner"/>
		<h2 class="bannerText">Adopt a life-long friend today</h2>
	  </div>
	  <div class="centredText">
		<h2>Why Adopt from Pet Heaven?</h2>
	  </div>

	  <div>
		<div class="cols3">
		  <div>
			<img src="https://spca.org.sg/wp-content/uploads/2022/10/feature-icon1-hover.png" alt="icon1"/>
			<h2>Save lives</h2>
		  </div>
		  <div>
			<img src="https://spca.org.sg/wp-content/uploads/2022/10/feature-icon2-hover.png" alt="icon2"/>
			<h2>Enriching bond</h2>
		  </div>
		  <div>
			<img src="https://spca.org.sg/wp-content/uploads/2022/10/feature-icon4-hover.png" alt="icon3"/>
			<h2>Fuss-free</h2>
		  </div>
		</div>
	  </div>

	  <div class="textWithImage">
		<div>
		  <img src="https://media.istockphoto.com/id/1202354967/photo/cat-checks-out-miniature-golden-doodle-puppy-asleep-with-his-owner.jpg?s=612x612&w=0&k=20&c=h_3C_RGSKCkKolSRgCcvJpmkyRyT6rPj2RdYmPtykgE=" alt="cat and dog"></img>
		</div>
		<div>
		  <h2>Explore your options before adopting!</h2>
		  <h2>Explore <Link to="/funcat"><i>cats</i></Link> and <Link to="/fundog"><i>dogs</i></Link></h2>
		</div>
	  </div>

	  <div class="textWithImage">
		<div>
		  <h2>Ready to adopt ?</h2>
		  <h2>Click <Link to="/Adopt"><i>here</i></Link> to get started !</h2>
		</div>
		<div>
		  <img src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/03/happy_dog_being_held_by_woman.jpeg.jpg" alt="woman holding dog"></img>
		</div>
	  </div>

	  <div class="textWithImage">
		<div>
		  <img src="https://cheerfuldogs.com/wp-content/uploads/2016/08/Cheerful-Dogs-Kiyo-Piko-23-of-42-1080x675.jpg" alt="volunteer"/>
		</div>
		<div>
		  <h2>You can contribute in more ways than one!</h2>
		  <h2><Link to="/volunteer"><i>Volunteer</i></Link> with us today</h2>
		</div>
	  </div>

	  <div class="textWithImage">
		<div>
		  <h2>Due to circumstances beyond your control,</h2>
		  <h2><Link to="/release"><i>Reach out</i></Link> to us</h2>
		</div>
		<div>
		  <img src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/04/24144817/American-Staffordshire-Terrier-lying-outdoors-next-to-a-kitten-that-is-playing-with-the-dogs-nose.jpg" alt="release"/>
		</div>
	  </div>
  </div>
  )
}
export default Home