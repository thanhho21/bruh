import React from "react";
import { Button, Container, TextInput, Select, Icon } from "react-materialize";

function Contact() {
  return (
    <div className="detail-container">
      <Container style={{display: "block", padding:"0"}}>
        <h3>Contact us</h3>
        <form className="ContactUS">
          <TextInput id="TextInput-38" label="Your Name" />
          <TextInput id="TextInput-39" label="Your Phone" />
          <TextInput email id="TextInput-41" label="Email" validate />
          <Select id="Select-46" multiple={false}>
            <option disabled value="">
              Choose your favorite nation
            </option>
            <option value="England">England</option>
            <option value="France">France</option>
            <option value="Spain">Spain</option>
          </Select>
          <TextInput icon="mode_edit" id="TextInput-109" label="Your content" />
          <Button waves="light">
            Submit
            <Icon right>send</Icon>
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default Contact;
