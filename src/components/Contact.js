import React from "react";
import './About.css';

const Contact = () => {
    return (
		<>
			<div className="contactPadding">
			</div>
			<div className="contact-container">
            	<h2>Contact Us</h2>
            	<p>If you have any questions or concerns, feel free to reach out to us:</p>
            	<div className="contact-info">
                	<p>Email: <a href="mailto:pet@shelter.com">pet@shelter.com</a></p>
            		<p>Phone: +65 1800 123 1234</p>
            	</div>
        	</div>
		</>
        
    );
}
export default Contact;