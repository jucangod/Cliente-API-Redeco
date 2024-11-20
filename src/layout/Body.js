import React, { useState, useEffect } from "react";
import { LoginPage } from "../pages/LoginPage";
import { SignUpPage } from "../pages/SignUpPage"
import { createComplaint } from "../services/complaints/newComplaint"; // Servicio para crear queja
import { fetchComplaints } from "../services/complaints/showComplaints"; // Servicio para mostrar quejas

function Body({ isLoggedIn, selectedSection }) {
    const [complaints, setComplaints] = useState([]);
    const [newComplaintText, setNewComplaintText] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Manejar la visualización de quejas
    useEffect(() => {
        if (selectedSection === "ver") {
        fetchComplaints()
            .then((data) => {
            setComplaints(data);
            })
            .catch((error) => {
            console.error("Error al cargar las quejas:", error);
            });
        }
    }, [selectedSection]);

    // Función para manejar el envío de quejas
    const handleSubmitComplaint = async (e) => {
        e.preventDefault();
        if (!newComplaintText) return; // Validación simple

        setIsSubmitting(true);
        try {
        await createComplaint({ text: newComplaintText });
        setNewComplaintText("");
        alert("Queja enviada correctamente");
        } catch (error) {
        console.error("Error al enviar la queja:", error);
        alert("Hubo un error al enviar la queja");
        } finally {
        setIsSubmitting(false);
        }
    };

    return (
        <div>
        {!isLoggedIn ? (
            <div>
            <LoginPage />
            <SignUpPage />
            </div>
        ) : (
            <div>
            {selectedSection === "ver" && (
                <div>
                <h3>Mis Quejas</h3>
                {complaints.length > 0 ? (
                    <ul>
                    {complaints.map((complaint) => (
                        <li key={complaint.id}>{complaint.text}</li>
                    ))}
                    </ul>
                ) : (
                    <p>No hay quejas disponibles.</p>
                )}
                </div>
            )}

            {selectedSection === "crear" && (
                <div>
                <h3>Crear Queja</h3>
                <form onSubmit={handleSubmitComplaint}>
                    <textarea
                    value={newComplaintText}
                    onChange={(e) => setNewComplaintText(e.target.value)}
                    placeholder="Escribe tu queja aquí"
                    />
                    <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Enviando..." : "Enviar Queja"}
                    </button>
                </form>
                </div>
            )}
            </div>
        )}
        </div>
    );
}

export { Body };
