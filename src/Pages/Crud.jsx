import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from "react-data-table-component";


const Crud = () => {

  const columns = [
    {
      name: 'First Name',
      selector: row => row.firstname,
      sortable: true,
    },
    {
      name: 'Last Name',
      selector: row => row.lastname,
      sortable: true,
    },
    {
      name: 'Status',
      selector: row => row.status,
      sortable: true,
    },
    {
      name: "Actions",
      selector: (row) => <div>
        <span onClick={() => {
          setRowDetail(row)
          setEditContact(true)
        }}>
          <button className="btn btn-primary">EDIT</button></span> &nbsp;
        <button className="btn btn-danger"  onClick={() => handleDelete(row.id)}>DELETE</button>
      </div>,
    },
  ];

  const [list, setList] = useState([
    {
      id: 1,
      firstname: "Gagan",
      lastname: "Raj",
      status: "active"
    },
    {
      id: 2,
      firstname: "deepak",
      lastname: "Raj",
      status: "inactive"
    }
  ]);

  const [addcontact, setAddContact] = useState(false)

  const [editContact, setEditContact] = useState(false)

  const [rowDetail, setRowDetail] = useState()

  const handleRadioChange = (status) => {
    setRowDetail((prevRowDetail) => ({
      ...prevRowDetail,
      status: status,
    }));
  };

  const [newContact, setNewContact] = useState({
    firstname: "",
    lastname: "",
    status: "active",
  });


  const handleDelete = (id) => {
    const updatedList = list.filter((contact) => contact.id !== id);
    setList(updatedList);
  };

  return (
    <div style={{margin:"5%"}}>
      <div>
        <h2 className="">Create Contact</h2>
      </div>
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button 
        className="btn btn-success"
        onClick={() => {
          setAddContact(true)
        }}>
          Create Contact
        </button>
      </div>
      <hr />
      <div>
        <DataTable
          columns={columns}
          data={list}
        />
      </div>
      <Modal
        size="sm"
        show={addcontact}
        onHide={() => setAddContact(false)}
        aria-labelledby="example-modal-sizes-title-sm"
        style={{ marginTop: "3rem" }}
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Create Contact
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <input
              type="text"
              className="form-control"
              id="firstname"
              aria-describedby="firstname"
              placeholder="First Name"
              value={newContact.firstname}
              onChange={(e) =>
                setNewContact({ ...newContact, firstname: e.target.value })
              }
            />
          </div>
          <br />
          <div>
            <input
              type="text"
              className="form-control"
              id="lastname"
              aria-describedby="lastname"
              placeholder="Last Name"
              value={newContact.lastname}
              onChange={(e) =>
                setNewContact({ ...newContact, lastname: e.target.value })
              }
            />
          </div>
          <br />
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="statusRadio"
              id="activeRadio"
              checked={newContact.status === "active"}
              onChange={() => setNewContact({ ...newContact, status: "active" })}
            />
            <label className="form-check-label">Active</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="statusRadio"
              id="inactiveRadio"
              checked={newContact.status === "inactive"}
              onChange={() => setNewContact({ ...newContact, status: "inactive" })}
            />
            <label className="form-check-label">Inactive</label>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setList([...list, { ...newContact, id: list.length + 1 }]);
              setNewContact({
                firstname: "",
                lastname: "",
                status: "active",
              });
              setAddContact(false);
            }}
          >
            Save Contact
          </button>
        </Modal.Footer>
      </Modal>
      {/* edit modal  */}
      {
        rowDetail ?
          <Modal
            size="sm"
            show={editContact}
            onHide={() => setEditContact(false)}
            aria-labelledby="example-modal-sizes-title-sm"
            style={{ marginTop: "3rem" }}
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-sm">
                Edit Contact
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <input
                  type="text"
                  className="form-control"
                  id="firstname"
                  aria-describedby="firstname"
                  placeholder={rowDetail.firstname}
                  value={rowDetail.firstname}
                  onChange={(e) =>
                    setRowDetail({ ...rowDetail, firstname: e.target.value })
                  }
                />
              </div>
              <br />
              <div>
              <input
                  type="text"
                  className="form-control"
                  id="firstname"
                  aria-describedby="firstname"
                  placeholder={rowDetail.lastname}
                  value={rowDetail.lastname}
                  onChange={(e) =>
                    setRowDetail({ ...rowDetail, lastname: e.target.value })
                  }
                />
              </div>
              <br />
              <div style={{ display: "flex", gap: "10px" }}>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="statusRadio"
                    id="activeRadio"
                    checked={rowDetail.status === "active"}
                    onChange={() => handleRadioChange("active")}
                  />
                  <label className="form-check-label">Active</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="statusRadio"
                    id="inactiveRadio"
                    checked={rowDetail.status === "inactive"}
                    onChange={() => handleRadioChange("inactive")}
                  />
                  <label className="form-check-label">Inactive</label>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  const updatedList = list.map((contact) =>
                    contact.id === rowDetail.id ? rowDetail : contact
                  );
                  setList(updatedList);
                  setEditContact(false);
                }}
              >
                Update
              </button>
            </Modal.Footer>
          </Modal>
          : ""
      }
    </div>
  )
}

export default Crud
