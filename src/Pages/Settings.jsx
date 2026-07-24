

const Settings = () => {
  return (
    <div className="settings">

      <div className="settingsHeader">
        <h1>System Configuration</h1>
        <p>
          Manage your account, security and interface preferences.
        </p>
      </div>

      <div className="settingsGrid">

        <div className="card">
          <h2>Security & Authorization</h2>
        </div>

        <div className="card">
          <h2>Alert Protocols</h2>
        </div>

        <div className="card">
          <h2>Interface</h2>
        </div>

        <div className="card">
          <h2>Support & Legal</h2>
        </div>

      </div>

      <div className="settingsFooter">
        <button className="cancelBtn">
          Discard Changes
        </button>

        <button className="saveBtn">
          Save Configuration
        </button>
      </div>

    </div>
  );
};

export default Settings;