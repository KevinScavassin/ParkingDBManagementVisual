import './Button.css';

const Button = () => {
    return (              
        <div className="form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" />
  
          <label htmlFor="capacity">Capacity:</label>
          <input type="number" id="capacity" />
  
          <label htmlFor="addressId">Address ID:</label>
          <input type="text" id="addressId" />
  
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" />
  
          <button type="submit">Send</button>
        </div>
    );
  };
  
  export default Button;