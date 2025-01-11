export default function validation(values) {
    let errors = {};
    
    if (!values.Name.trim()) {
      errors.Name = "Name is required";
    }
  
    if (!values.Nic.trim()) {
      errors.Nic = "NIC is required";
    }
  
    if (!values.phoneNumber.trim()) {
      errors.phoneNumber = "Phone number is required";
    }
  
    if (!values.arrivalDate) {
      errors.arrivalDate = "Arrival date is required";
    }
  
    if (!values.departureDate) {
      errors.departureDate = "Departure date is required";
    }
  
    if (!values.locationNumber) {
      errors.locationNumber = "Location is required";
    }
  
    if (!values.Nights) {
      errors.Nights = "Number of nights are required";
    }
  
    if (!values.Members) {
      errors.Members = "Number of members are required";
    }

    return errors;
  }