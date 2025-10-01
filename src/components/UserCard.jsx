import React from "react";
import { useEffect } from "react";

// Component to display a participant's information
export default function ParticipantItem({ user }) {
  // Destructure user properties for easier access
  const {
    id,
    nome,
    cognome,
    email,
    telefono,
    codiceFiscale,
    contattoEmergenza,
  } = user;

  return (
    <div className="accordion-item">
      {/* Accordion header displaying the participant's name */}
      <h2 className="accordion-header" id={`heading-${id}`}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse-${id}`}
        >
          {nome} {cognome}
        </button>
      </h2>

      {/* Accordion body containing participant details */}
      <div
        id={`collapse-${id}`}
        className="accordion-collapse collapse"
        data-bs-parent="#usersAccordion"
      >
        <div className="accordion-body">
          {/* Display participant's email */}
          <p>
            <strong>Email:</strong> {email}
          </p>
          {/* Display participant's phone number */}
          <p>
            <strong>Telefono:</strong> {telefono}
          </p>
          {/* Display participant's tax code */}
          <p>
            <strong>Codice Fiscale:</strong> {codiceFiscale}
          </p>

          {/* Nested accordion for emergency contact details */}
          <div className="accordion mt-3">
            <div className="accordion-item">
              {/* Accordion header for emergency contact */}
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse-emergency-${id}`}
              >
                Contatto di emergenza
              </button>
              {/* Accordion body containing emergency contact details */}
              <div
                id={`collapse-emergency-${id}`}
                className="accordion-collapse collapse"
              >
                <div className="accordion-body">
                  {/* Display emergency contact's name */}
                  <p>
                    <strong>Nome:</strong> {contattoEmergenza.nome}
                  </p>
                  {/* Display emergency contact's phone number */}
                  <p>
                    <strong>Telefono:</strong> {contattoEmergenza.telefono}
                  </p>
                  {/* Display emergency contact's relationship */}
                  <p>
                    <strong>Relazione:</strong> {contattoEmergenza.relazione}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
