// =============================================================
//  CENTRAL TABLE DATA
//  This is the only file you need to edit when updating deadlines.
//  Place this file in your project root (or a /js/ subfolder).
// =============================================================

const MASTER = [
  {
    week: 3, date: "April 17<br>(Friday)", color: "yellow",
    task: "Preliminary draft of Technical Documentation due to EDS 411B instructor and faculty advisor",
    note: "", tags: ["technical-doc"]
  },
  {
    week: 4, date: "April 24<br>(Friday)", color: "white",
    task: "Feedback on draft from EDS 411B instructor and faculty advisor due back to group",
    note: "", tags: ["technical-doc"]
  },
  {
    week: 5, date: "May 1<br>(Friday)", color: "yellow",
    task: "Final project title due to CP Coordinator",
    note: "", tags: ["admin"]
  },
  {
    week: 7, date: "May 11<br>(Monday)", color: "yellow",
    task: "Complete draft of Technical Documentation and Project Repository due to EDS 411B instructor and faculty advisor",
    note: "", tags: ["technical-doc"]
  },
  {
    week: 7, date: "May 15<br>(Friday)", color: "blue",
    task: "Submit final presentation program abstract and acknowledgements to CP Coordinator for posting on the Bren website (template will be sent by CP Coordinator)",
    note: "The abstract should be approved by students' faculty advisor", tags: ["presentation", "admin"]
  },
  {
    week: 8, date: "May 18<br>(Monday)", color: "white",
    task: "Feedback on Technical Documentation from EDS 411B instructor and faculty advisor due back to students",
    note: "", tags: ["technical-doc"]
  },
  {
    week: 8, date: "May 22<br>(Friday)", color: "green",
    task: "Submit data to data repository and send DOI to CP Coordinator",
    note: "", tags: ["admin"]
  },
  {
    week: 8, date: "May 24<br>(Sunday)", color: "blue",
    task: "Submit editable file of closed captioning script",
    note: "", tags: ["presentation"]
  },
  {
    week: 9, date: "May 28<br>(Thursday)", color: "blue",
    task: "Share link or file of Final Presentation slides (final version to be shown at the event)",
    note: "", tags: ["presentation"]
  },
  {
    week: 9, date: "May 29<br>(Friday)", color: "orange",
    task: "Capstone Project Final Presentations",
    note: "", tags: ["presentation"]
  },
  {
    week: 10, date: "June 1<br>(Monday)", color: "pink",
    task: "Revised Technical Documentation and Project Repository due to the EDS 411B instructor and faculty advisor for their review and signature",
    note: "Faculty advisor should sign first before EDS 411B instructor", tags: ["technical-doc"]
  },
  {
    week: 10, date: "June 6<br>(Friday)", color: "pink",
    task: "- Submit final Technical Documentation, Signature page with all signatures, and Project Repository to CP Coordinator<br>- Submit Self/Peer Evaluation to EDS 411B instructor, faculty advisor, and CP Coordinator<br>- Submit faculty advisor evaluation via Qualtrics",
    note: "", tags: ["technical-doc", "admin"]
  }
];

// =============================================================
//  TABLE BUILDER — no need to edit below this line
// =============================================================
function buildTable(filter, targetId) {
  const rows = (typeof filter === "function")
    ? MASTER.filter(filter)
    : MASTER.filter(r => r.tags.includes(filter));

  const tbody = rows.map(r => `
    <tr class="row-${r.color}">
      <td>Week ${r.week}</td>
      <td>${r.date}</td>
      <td>${r.task}${r.note ? `<p class="note-italic">${r.note}</p>` : ""}</td>
    </tr>`).join("");

  const el = document.getElementById(targetId);
  if (!el) return;

  el.innerHTML = `
    <table class="deadlines-table">
      <thead><tr>
        <th>Spring Quarter 2026</th>
        <th>Due Date</th>
        <th></th>
      </tr></thead>
      <tbody>${tbody}</tbody>
    </table>`;
}
