import React,{useState} from "react";
import "./Pets.scss";
import Modal from "./Modal";

const Release =  () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber:'',
        address: '',
        reason: '',
        petType: 'dog',
        othersType: '',
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
        <>
            <div class="textContainer">
                <h2 class="titleForm">We are here to help</h2>
            </div>
            <div class="textContainer" style={{ marginBottom: '15px' }}>
                <h2>Fill out the form below and we will contact you</h2>
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
                        <label>Reason for release:</label>
                        <input type="text" name="reason" value={formData.reason} onChange={handleChange} required />
                    </div>
    
                    <div style={{ marginBottom: '10px' }}>
                        <label>Pet being released:</label>
                        <select name="petType" value={formData.petType} onChange={handleChange}>
                            <option value="dog">Dog</option>
                            <option value="car">Cat</option>
                            <option value="others">Others</option>
                        </select>
                    </div>
    
                   {formData.petType === 'others' && (
                    <div style={{ marginBottom: '10px' }}>
                        <input type="text" name="otherType" value={formData.otherType} onChange={handleChange}></input>
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

        </>
    )
}

export default Release;