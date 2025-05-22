import React, { useEffect, useState } from "react";
import axios from "axios";

function DoctorApprovalPage() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch unapproved doctors on mount
  useEffect(() => {
    axios
      .get("/api/unapproved_doctors")
      .then((res) => {
        setDoctors(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load unapproved doctors");
        setLoading(false);
      });
  }, []);

  // Approve doctor function
  const approveDoctor = (id) => {
    axios
      .post(`/api/approve_doctor/${id}`)
      .then(() => {
        // Remove approved doctor from the list
        setDoctors((prev) => prev.filter((doc) => doc.id !== id));
      })
      .catch(() => {
        alert("Failed to approve doctor");
      });
  };

  if (loading) return <p>Loading doctors...</p>;
  if (error) return <p>{error}</p>;

  if (doctors.length === 0) return <p>No doctors waiting for approval.</p>;

  return (
    <div>
      <h2>Unapproved Doctors</h2>
      <ul>
        {doctors.map((doc) => (
          <li key={doc.id}>
            {doc.name} ({doc.email}){" "}
            <button onClick={() => approveDoctor(doc.id)}>Approve</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DoctorApprovalPage;
