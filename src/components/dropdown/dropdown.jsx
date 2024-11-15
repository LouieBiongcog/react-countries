/* eslint-disable react/prop-types */
import Form from "react-bootstrap/Form";

function Dropdown(props) {
  return (
    <div className={props.containerClass}>
      <Form.Select
        id="select"
        className="text-capitalize rounded-pill bg-light text-dark"
        size="lg"
        onChange={props.onSelectChange}
      >
        <option value="">{`select ${props.label}`}</option>
        {props.options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.name}
          </option>
        ))}
      </Form.Select>
    </div>
  );
}

export default Dropdown;
