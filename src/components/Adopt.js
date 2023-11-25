import React,{useState} from "react";
import "./Pets.scss";
import Modal from "./Modal";

const Adopt =  () => {
    // State to manage form data
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        address: '',
        income: '',
        houseType: 'hdb',
        hdbType: '',
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

    
    return (
        <div>
            <div>
                <img src="https://spcatampabay.org/wp-content/uploads/home_image_banner.jpg" alt="banner" class="bannerImg"/>
            </div>

            <div class="textContainer">
                <h2 class="titleForm">You are one step closer to adopting</h2>
            </div>
            <div class="textContainer" style={{ marginBottom: '15px' }}>
                <h2>Fill out the form below and we will contact you to assess your eligibility</h2>
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
                        <label>Income (per year):</label>
                        <input type="number" name="income" value={formData.income} onChange={handleChange} required />
                    </div>
    
                    <div style={{ marginBottom: '10px' }}>
                        <label>Type of House:</label>
                        <select name="houseType" value={formData.houseType} onChange={handleChange}>
                            <option value="hdb">HDB</option>
                            <option value="condo">Condo</option>
                            <option value="private">Private Property</option>
                        </select>
                    </div>
    
                   {formData.houseType === 'hdb' && (
                    <div style={{ marginBottom: '10px' }}>
                        <label>HDB Type:</label>
                        <select name="hdbType" value={formData.hdbType} onChange={handleChange}>
                            <option value="1-room">1 Room</option>
                            <option value="2-room">2 Room</option>
                            <option value="3-room">3 Room</option>
                            <option value="4-room">4 Room</option>
                            <option value="5-room">5 Room</option>
                        </select>
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
    );
};

export default Adopt;