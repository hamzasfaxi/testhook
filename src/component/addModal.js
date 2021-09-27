 import React, {component} from "react";
 import { Modal } from "react-bootstrap";
 





 class AdddModal extends component {
     constructor(props) {
         super(props);
         this.state = {
             show: false,
         };
     }
     handleSHow = () => {
         this.setState({ show: !this.state.show });
     };
     handleChange = (event) => {
         this.setState({
             [event.target.name] : event.target.value,
         })
     }
     render() {
         return (
             <div>
                 <button variant="primary" onClick={this.handleSHow}>
                     +
                 </button>

                 <Modal show={this.state.show} onHide={this.handleSHow}>
                     <Modal.Header closeButton>
                         <Modal.Title>Add new movies</Modal.Title>
                     </Modal.Header>
                     <Modal.Body>
                         <div>
                             <div>
                                 <label className='input'>Tilte:</label>
                                 <iput type="text" name="name" />
                            </div>
                         </div>
                         <div>
                             <div>
                                 <label className='input'>image:</label>
                                 <iput type="text" name="image" />
                            </div>
                         </div>
                         <div>
                             <div>
                                 <label className='input'>Rating:</label>
                                 <iput type="text" name="rating" />
                            </div>
                         </div>
                         <div>
                             <div>
                                 <label className='input'>Year:</label>
                                 <iput type="text" name="year" />
                            </div>
                         </div>
                         </Modal.Body>
                         <Modal.Footer>

                         </Modal.Footer>
                 </Modal>
             </div>
         )
     }
 }



 export default AdddModal ;