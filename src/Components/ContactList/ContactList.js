import PropTypes from 'prop-types';
import './ContactList.scss';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className="contact_list">
      {contacts.map(({ id, name, number }) => (
        <li className="contact_item" key={id}>
          <p className="contact_info">
            {name}: {number}
          </p>
          <button
            className="add_button"
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.number,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
