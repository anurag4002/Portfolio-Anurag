import type { CoverKind } from "@/lib/data";

// Project covers are drawn in HTML and CSS from what each project really contains
// (table names, roles, flows). They are illustrations, not screenshots.
// To use a real screenshot instead, replace the matching block with a next/image.

function Tender() {
  const tables: [string, string][] = [
    ["notice", "id, title, info"],
    ["vendor", "vid, vname, company"],
    ["tender", "tid, tname, tprice, tdeadline"],
    ["bidder", "bid, vid, tid, bidamount, status"],
    ["tenderstatus", "tid, bid, status, vid"],
  ];
  return (
    <div className="cv-stack">
      <div className="cv-chip cv-mono">
        <i className="cv-sq" /> one bid per vendor
      </div>
      <div className="cv-card">
        <div className="cv-card-h">
          <span>tender</span>
          <span className="cv-dim">MySQL · 5 tables</span>
        </div>
        {tables.map(([name, cols]) => (
          <div className="cv-line" key={name}>
            <b className="cv-mono">{name}</b>
            <span className="cv-mono cv-dim">{cols}</span>
          </div>
        ))}
      </div>
      <div className="cv-pair">
        <div className="cv-card cv-mini">
          <span className="cv-dim">Role</span>
          <b>Admin</b>
        </div>
        <div className="cv-card cv-mini">
          <span className="cv-dim">Role</span>
          <b>Vendor</b>
        </div>
      </div>
    </div>
  );
}

function Pathlab() {
  const steps = ["Mobile number", "OTP", "Verify patient", "View reports", "Download report"];
  const modules = ["Patients", "Billing", "Cases", "Reports", "Ledger", "Referral doctors"];
  return (
    <div className="cv-window">
      <div className="cv-bar">
        <i />
        <i />
        <i />
        <span>Pure Path Lab</span>
      </div>
      <div className="cv-split">
        <div className="cv-side">
          {modules.map((m, i) => (
            <span key={m} className={i === 3 ? "on" : ""}>
              {m}
            </span>
          ))}
        </div>
        <div className="cv-main">
          <div className="cv-eyebrow">Patient report portal</div>
          <ol className="cv-flow">
            {steps.map((s, i) => (
              <li key={s}>
                <em>{String(i + 1).padStart(2, "0")}</em>
                {s}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

function Contractor() {
  const stats = ["Total workers", "Today's attendance", "Total wages", "Paid and pending"];
  return (
    <div className="cv-window cv-dark">
      <div className="cv-bar">
        <i />
        <i />
        <i />
        <span>Dashboard</span>
      </div>
      <div className="cv-stats">
        {stats.map((s) => (
          <div key={s}>
            <span>{s}</span>
            <u />
          </div>
        ))}
      </div>
      <div className="cv-sheet">
        <div className="cv-sheet-h">
          <span>Attendance</span>
          <span>Site-wise · Monthly</span>
        </div>
        {[0, 1, 2, 3].map((r) => (
          <div className="cv-sheet-r" key={r}>
            <u style={{ width: `${34 - r * 4}%` }} />
            <div>
              {[0, 1, 2, 3, 4, 5, 6].map((d) => (
                <i key={d} className={(d + r) % 4 === 3 ? "off" : ""} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Sap() {
  return (
    <div className="cv-stack cv-center">
      <div className="cv-pair cv-three">
        {["ZEMP_MASTER", "ZTRAVEL_REQ", "ZREIMBURSEMENT"].map((t) => (
          <div className="cv-card cv-mini cv-mono" key={t}>
            <span className="cv-dim">Z-table</span>
            <b>{t}</b>
          </div>
        ))}
      </div>
      <div className="cv-arrow" />
      <div className="cv-card cv-mini cv-mono">
        <span className="cv-dim">Consumption CDS view</span>
        <b>ZC_REIMBURSEMENT_CON_CDS</b>
      </div>
      <div className="cv-arrow" />
      <div className="cv-chip cv-mono">
        <i className="cv-sq" /> @OData.publish · SAP Gateway
      </div>
    </div>
  );
}

function Egyan() {
  const mods = ["Study material", "Assignments", "Feedback and complaints", "Student dashboard"];
  return (
    <div className="cv-stack">
      <div className="cv-card">
        <div className="cv-card-h">
          <span>Login as</span>
          <span className="cv-dim">NOU e-Gyan Portal</span>
        </div>
        <div className="cv-roles">
          <span className="on">Student</span>
          <span>Admin</span>
          <span>Study Center</span>
        </div>
      </div>
      <div className="cv-card">
        {mods.map((m) => (
          <div className="cv-line" key={m}>
            <b>{m}</b>
            <span className="cv-dim">→</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Iot() {
  return (
    <div className="cv-phone">
      <div className="cv-notch" />
      <div className="cv-eyebrow">Car control</div>
      <div className="cv-pad">
        <i className="up">↑</i>
        <i className="left">←</i>
        <i className="mid" />
        <i className="right">→</i>
        <i className="down">↓</i>
      </div>
      <div className="cv-chips">
        <span>Obstacle detection</span>
        <span>Remote navigation</span>
        <span>Automation</span>
      </div>
    </div>
  );
}

const map: Record<CoverKind, () => React.ReactElement> = {
  tender: Tender,
  pathlab: Pathlab,
  contractor: Contractor,
  sap: Sap,
  egyan: Egyan,
  iot: Iot,
};

export default function Cover({ kind }: { kind: CoverKind }) {
  const Art = map[kind];
  return (
    <div className={`cover cover-${kind}`} aria-hidden="true">
      <div className="cover-art">
        <Art />
      </div>
    </div>
  );
}
