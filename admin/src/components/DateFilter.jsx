import React, { useState } from "react";

const DateFilter = ({ appointments = [], onFiltered }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  console.log("DateFilter props:", { appointments, onFiltered });
  console.log("Initial startDate:", startDate);
  console.log("Initial endDate:", endDate);

  const handleFilter = () => {
    console.log("Filter button clicked");
    console.log("Filtering appointments with range:", startDate, endDate);

    if (!startDate || !endDate) {
      console.log("No dates chosen, returning all appointments", appointments);
      if (typeof onFiltered === "function") onFiltered(appointments);
      return;
    }

    const filtered = appointments.filter(appt => {
      if (!appt.slotDate) {
        console.log("Skipping appt without slotDate:", appt);
        return false;
      }
      const apptDate = new Date(appt.slotDate).setHours(0, 0, 0, 0);
      const start = new Date(startDate).setHours(0, 0, 0, 0);
      const end = new Date(endDate).setHours(0, 0, 0, 0);
      const withinRange = apptDate >= start && apptDate <= end;
      console.log(`Checking appt ${appt._id} date ${appt.slotDate}: within range? ${withinRange}`);
      return withinRange;
    });

    console.log("Filtered appointments:", filtered);
    if (typeof onFiltered === "function") onFiltered(filtered);
  };

  return (
    <div className="flex items-center gap-4">
      <label>
        Start Date:
        <input
          type="date"
          value={startDate}
          onChange={(e) => {
            console.log("Start date changed to:", e.target.value);
            setStartDate(e.target.value);
          }}
          className="ml-2 p-1 border rounded"
        />
      </label>
      <label>
        End Date:
        <input
          type="date"
          value={endDate}
          onChange={(e) => {
            console.log("End date changed to:", e.target.value);
            setEndDate(e.target.value);
          }}
          className="ml-2 p-1 border rounded"
        />
      </label>
      <button
        onClick={handleFilter}
        className="px-4 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700"
      >
        Filter
      </button>
    </div>
  );
};

export default DateFilter;
