import React,{useState} from "react";
import "./Pets.scss";
import Modal from "./Modal";

const Volunteer =  () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        address: '',
        income: '',
        animalExp: 'no',
        expDesc: '',
      });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setShowModal(true);
        setTimeout(() => {
            setShowModal(false);
        }, 3000); 
    };

    /* Handling of Modal */
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => {
        setShowModal(false); // Set the showModal state to false to close the modal
    };
    return(
        <div>
        <div>
            <img src="https://www.doola.com/wp-content/uploads/2023/03/Untitled-design-2023-03-03T084436.732-1080x540.jpg" alt="banner" class="bannerImg"/>
        </div>

        <div class="textContainer">
            <h2 class="titleForm">There are more ways to help than adopting</h2>
        </div>
        <div class="textContainer" style={{ marginBottom: '15px' }}>
            <h2>Volunteer with us today! Fill out the form below</h2>
        </div>

        <div class="formContainer">
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '10px' }}>
                    <label>Full Name:</label>
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required/>
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label>Phone number:</label>
                    <input type="text" name="phoneNumber" value={formData.phoneNumber} pattern="\d{8}" inputMode="numeric" onChange={handleChange} required/>
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label>Address:</label>
                    <input type="text" name="address" value={formData.address} onChange={handleChange} required/>
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label>Availability (days per week):</label>
                    <input type="number" name="avail" value={formData.avail} onChange={handleChange} required />
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label>Do you have experience working with animals ?</label>
                    <select name="animalExp" value={formData.animalExp} onChange={handleChange}>
                        <option value="yes">Yes</option>
                        <option value="no" selected >No</option>
                    </select>
                </div>

               {formData.animalExp === 'yes' && (
                <div style={{ marginBottom: '10px' }}>
                    <label>Tell us more:</label>
                    <input type="text" name="expDesc" value={formData.expDesc} onChange={handleChange} required></input>
                </div>
                )}

                <div class="formContainer">
                    <button type="submit">Submit</button>
                </div>
                <Modal show={showModal} handleClose={handleCloseModal}>
                    <p>Form submitted !</p>
                    <p id="smallText">This window will close in 3 seconds...</p>
                </Modal>
            </form>
        </div>
    </div>
    )
}

export default Volunteer;